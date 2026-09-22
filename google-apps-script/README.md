# Website form backend (Google Apps Script)

`Code.gs` handles the site's forms: it appends each submission to a tab
in a Google Sheet and emails a notification to everyone in
`NOTIFY_EMAILS`.

| Form | Page | Component | Sheet tab |
|---|---|---|---|
| Outlet Onboarding | `/apply` | `components/onboarding-form.tsx` | `Outlet Onboarding` |
| Contact | — | — | `Contact Submissions` |

The onboarding form replaced a Tally.so embed. The contact form was
removed from the site; its routing stays in `Code.gs` so old rows and
any future re-add keep working.

Each form posts JSON to the script's `/exec` URL, sending a `formType`
field (`onboarding` or `contact`) that selects the tab, the email
subject and the column order. A payload with no `formType` falls back
to the contact shape, so an older deployment keeps working. That URL is **not a
secret** — the endpoint is public by design, which is why it's a plain
constant rather than an environment variable.

## Configuration lives in Script Properties

`SHEET_ID` and `NOTIFY_EMAILS` are read at runtime from Script
Properties, not from the code. Changing who gets notified therefore
needs **no code edit, no new version and no redeploy** — the `/exec`
URL never changes.

Set them under **Project Settings (gear icon) -> Script Properties**:

| Property | Value |
|---|---|
| `SHEET_ID` | the long string between `/d/` and `/edit` in the Sheet's URL |
| `NOTIFY_EMAILS` | comma-separated, e.g. `a@tacoza.com, b@tacoza.com` |

## First-time setup

1. Create a Google Sheet **under an account Tacoza owns**, not a
   personal one — otherwise the submissions are locked to whoever set
   it up the day they leave.
2. Paste `Code.gs` into the script project.
3. Set `SHEET_ID` and `NOTIFY_EMAILS` as Script Properties (above).
4. Run `doGet` once from the editor and accept the authorisation
   prompts. **This matters:** the script needs both the Sheets *and*
   the Gmail scope. Running only a sheet function grants only the sheet
   scope, and mail then fails silently at submit time.
5. **Deploy -> New deployment -> Web app**, with:
   - Execute as: **Me**
   - Who has access: **Anyone**

   "Anyone" is the one people get wrong — any other value makes the
   browser's POST fail with a 401, because the visitor submitting the
   form is not signed in to Google.
6. Copy the `/exec` URL into `ENDPOINT` in `components/contact-form.tsx`.

## Diagnosing a missing email

**Open the `/exec` URL in a browser.** `doGet` reports what the script
can actually see:

```json
{
  "deployedVersionHasDiagnostics": true,
  "sheetIdConfigured": "yes",
  "notifyEmails": ["someone@tacoza.com"],
  "remainingDailyEmailQuota": 100,
  "sheetReachable": "Website enquiries",
  "effectiveUser": "someone@tacoza.com"
}
```

Read it like this:

- **The page 404s or has no `deployedVersionHasDiagnostics` field** —
  the deployment is serving an **older version** of the code. This is
  the most common cause. See *Making a later change live* below.
- **`notifyEmails: "NONE — ..."`** — the property is unset, so nothing
  is ever mailed. A submission still returns `ok` and still writes the
  row.
- **`remainingDailyEmailQuota: 0`** — the daily cap is spent; it resets
  every 24 hours.
- **`ERROR: ... permission ...`** on quota or sheet — the Gmail or
  Sheets scope was never authorised. Run `doGet` from the editor and
  accept the prompts.

A real submission now returns detail too, rather than a bare `ok`:

```bash
curl -s -L \
  -H "Content-Type: text/plain;charset=utf-8" \
  -d '{"fullName":"Test","email":"test@example.com","phone":"+91 9999999999"}' \
  "https://script.google.com/macros/s/<deploymentId>/exec"
```

```json
{"status":"ok","wroteRow":true,"emailsSent":1,"emailErrors":[]}
```

`wroteRow: true` with `emailsSent: 0` isolates the problem to mail, and
`emailErrors` carries the reason.

## Verifying it works

Post a test submission straight at the endpoint, bypassing the site:

```bash
curl -s -L \
  -H "Content-Type: text/plain;charset=utf-8" \
  -d '{"fullName":"Test","email":"test@example.com","phone":"+91 9999999999","restaurant":"Test Cafe","city":"Delhi","outlets":"1","message":"verify deploy"}' \
  "https://script.google.com/macros/s/<deploymentId>/exec"
```

A working deployment returns `{"status":"ok"}`, adds a row to the
**Contact Submissions** tab, and sends the notification email.

## Making a later change live

Editing the code in the browser editor is **not enough** — the live
`/exec` URL stays pinned to whatever *version* it was last deployed
at. After any edit:

**Deploy → Manage deployments →** pick the existing deployment → edit
it → set Version to **New version** → Deploy.

Use *Manage deployments*, not *New deployment*. A new deployment gets
a **different** `/exec` URL, which means the live site keeps talking to
the old one until you also update `ENDPOINT` in
`components/contact-form.tsx`.

## Why `text/plain` on the request

`components/contact-form.tsx` sends `Content-Type:
text/plain;charset=utf-8` even though the body is JSON. This is
deliberate: it keeps the POST a CORS "simple request" so the browser
skips the preflight `OPTIONS` call, which Apps Script cannot answer.
Switching to `application/json` breaks the form with an opaque CORS
error.
