# Secure intake delivery

The website validates intake data in `app/api/intake/route.ts`, then sends it server-to-server to this Google Apps Script. The browser never receives the Apps Script URL or shared secret.

## Create the private sheet

1. Create a Google Sheet owned by the Tycho Coaching account. Do not enable public link access.
2. Copy its spreadsheet ID from the URL.
3. Create a standalone Apps Script project and replace `Code.gs` with this directory's `Code.gs`.
4. In **Project Settings → Script properties**, add:
   - `SPREADSHEET_ID`: the private sheet ID;
   - `INTAKE_SHARED_SECRET`: a long random value (at least 32 bytes);
   - `NOTIFICATION_EMAIL`: `tychocoach@gmail.com`.
5. Run `setup()` once in the editor and approve the Sheets, Mail and trigger permissions. It creates the header row, a daily retention cleanup and a status-edit trigger.
6. Deploy as **Web app**, execute as the owner, and allow access to **Anyone**. Possession of the shared secret is still required for accepted writes.
7. Put the deployment `/exec` URL in Vercel as `GOOGLE_APPS_SCRIPT_URL` and the same secret as `INTAKE_SHARED_SECRET`. Add both to Production and Preview; never prefix them with `NEXT_PUBLIC_`.

## Lead workflow and retention

Use only these values in the `status` column: `new`, `contacted`, `won`, `lost`. Changing a row to `lost` sets `closed_at` and a deletion date six months later. The daily cleanup permanently deletes expired lost leads. Changing a lead to `won` clears the lost-lead deletion date; client-record retention then follows the final coaching agreement and legal obligations.

The script also suppresses duplicate emails for 15 minutes, neutralises spreadsheet formulas in text fields, and sends a concise notification email. It does not log intake contents.
