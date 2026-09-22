# Contact form backend (Google Apps Script)

`Code.gs` handles the contact form on `/contact`: it appends each
submission to a Google Sheet and emails a notification to everyone in
`NOTIFY_EMAILS` at the top of the file.

The form posts JSON to the script's `/exec` URL, which lives in
`components/contact-form.tsx` as `ENDPOINT`. That URL is **not a
secret** — the endpoint is public by design, which is why it's a plain
constant rather than an environment variable.

## First-time setup

1. Create a Google Sheet **under an account Tacoza owns**, not a
   personal one — otherwise the submissions are locked to whoever set
   it up the day they leave.
2. In that Sheet: **Extensions → Apps Script**.
3. Replace the placeholder code with the contents of `Code.gs`, and set
   `NOTIFY_EMAILS` to the address(es) that should be alerted.
4. **Deploy → New deployment → Web app**, with:
   - Execute as: **Me**
   - Who has access: **Anyone**

   Both settings matter. "Anyone" is the one people get wrong — any
   other value makes the browser's POST fail with a 401, because the
   visitor submitting the form is not signed in to Google.
5. Copy the `/exec` URL it gives you into `ENDPOINT` in
   `components/contact-form.tsx`.

The first time the script runs it will ask you to authorise the Sheets
and Gmail scopes. That's expected.

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
