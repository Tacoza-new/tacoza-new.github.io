const SHEET_NAME = 'Contact Submissions';
const NOTIFY_EMAILS = ['PASTE_NOTIFY_EMAIL_HERE'];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.company_website) {
      // Honeypot field — real users never fill this in. Pretend success
      // so bots don't notice and adapt, but skip the sheet/email entirely.
      return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = getOrCreateSheet();

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

    // Sent as separate individual emails (not one email to both addresses)
    // so neither recipient sees the other's address.
    NOTIFY_EMAILS.forEach((email) => {
      MailApp.sendEmail(email, 'New enquiry — Tacoza', bodyLines.join('\n'));
    });

    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Restaurant', 'City', 'Outlets', 'Message']);
  }
  return sheet;
}
