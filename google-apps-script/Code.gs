/**
 * Contact form backend for the Tacoza website.
 *
 * Configuration lives in Script Properties, NOT in this file, so
 * changing recipients needs no code edit, no new version and no
 * redeploy — the /exec URL stays the same. Set them under
 * Project Settings -> Script Properties:
 *
 *   SHEET_ID       the long id from the Sheet's URL
 *   NOTIFY_EMAILS  comma-separated list of recipients
 *
 * Visit the /exec URL in a browser to get a diagnostic of what the
 * script can currently see. That is the fastest way to find out why an
 * email did not arrive.
 */

const SHEET_NAME = 'Contact Submissions';

function getConfig_() {
  const props = PropertiesService.getScriptProperties();
  const emails = (props.getProperty('NOTIFY_EMAILS') || '')
    .split(',')
    .map(function (s) { return s.trim(); })
    .filter(function (s) { return s.length > 0; });
  return {
    sheetId: (props.getProperty('SHEET_ID') || '').trim(),
    notifyEmails: emails,
  };
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Open the /exec URL in a browser to see this. Reports what the script
 * can actually reach, so a missing email can be traced to config,
 * permissions or quota rather than guessed at.
 */
function doGet() {
  const cfg = getConfig_();
  const report = {
    status: 'diagnostic',
    deployedVersionHasDiagnostics: true,
    sheetIdConfigured: cfg.sheetId ? 'yes' : 'NO — set SHEET_ID in Script Properties',
    notifyEmails: cfg.notifyEmails.length
      ? cfg.notifyEmails
      : 'NONE — set NOTIFY_EMAILS in Script Properties',
    remainingDailyEmailQuota: null,
    sheetReachable: null,
    effectiveUser: null,
  };

  try {
    report.remainingDailyEmailQuota = MailApp.getRemainingDailyQuota();
  } catch (err) {
    report.remainingDailyEmailQuota = 'ERROR: ' + err.message;
  }

  try {
    report.effectiveUser = Session.getEffectiveUser().getEmail();
  } catch (err) {
    report.effectiveUser = 'ERROR: ' + err.message;
  }

  try {
    const ss = SpreadsheetApp.openById(cfg.sheetId);
    report.sheetReachable = ss.getName();
  } catch (err) {
    report.sheetReachable = 'ERROR: ' + err.message;
  }

  return json_(report);
}

function doPost(e) {
  const result = { status: 'ok', wroteRow: false, emailsSent: 0, emailErrors: [] };
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.company_website) {
      // Honeypot field — real users never fill this in. Pretend success
      // so bots don't notice and adapt, but skip the sheet/email entirely.
      return json_({ status: 'ok' });
    }

    const cfg = getConfig_();
    if (!cfg.sheetId) {
      return json_({ status: 'error', message: 'SHEET_ID is not set in Script Properties.' });
    }

    const sheet = getOrCreateSheet_(cfg.sheetId);
    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      // Leading apostrophe stops Sheets mangling +91... into a formula/number.
      data.phone ? "'" + data.phone : '',
      data.restaurant || '',
      data.city || '',
      data.outlets || '',
      data.message || '',
    ]);
    result.wroteRow = true;

    const bodyLines = [
      'New contact enquiry from the Tacoza website:',
      '',
      'Name: ' + (data.fullName || '-'),
      'Email: ' + (data.email || '-'),
      'Phone: ' + (data.phone || '-'),
      'Restaurant: ' + (data.restaurant || '-'),
      'City: ' + (data.city || '-'),
      'Number of outlets: ' + (data.outlets || '-'),
      'Message: ' + (data.message || '-'),
    ];

    if (!cfg.notifyEmails.length) {
      result.emailErrors.push('NOTIFY_EMAILS is not set in Script Properties.');
    }

    // Each recipient is mailed separately so neither sees the other's
    // address. One failure must not stop the rest, and must not lose the
    // row that was already written — hence the per-recipient try.
    cfg.notifyEmails.forEach(function (email) {
      try {
        MailApp.sendEmail({
          to: email,
          subject: 'New enquiry — Tacoza',
          body: bodyLines.join('\n'),
          replyTo: data.email || undefined,
          name: 'Tacoza Website',
        });
        result.emailsSent++;
      } catch (err) {
        result.emailErrors.push(email + ': ' + err.message);
      }
    });

    return json_(result);
  } catch (err) {
    return json_({ status: 'error', message: err.message, wroteRow: result.wroteRow });
  }
}

function getOrCreateSheet_(sheetId) {
  const ss = SpreadsheetApp.openById(sheetId);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Restaurant', 'City', 'Outlets', 'Message']);
  }
  return sheet;
}
