const LEADS_SHEET = "Leads";
const HEADERS = [
  "submission_id",
  "submitted_at",
  "locale",
  "name",
  "email",
  "phone",
  "country",
  "discipline",
  "level",
  "weekly_hours",
  "primary_goal",
  "target_event",
  "event_date",
  "power_meter",
  "platform",
  "package_interest",
  "message",
  "consent",
  "status",
  "closed_at",
  "retention_delete_after"
];

function doPost(event) {
  const lock = LockService.getScriptLock();
  try {
    if (!event || !event.postData || !event.postData.contents) return json_({ ok: false, code: "invalid_request" });
    const payload = JSON.parse(event.postData.contents);
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty("INTAKE_SHARED_SECRET");
    if (!expectedSecret || payload.secret !== expectedSecret) return json_({ ok: false, code: "unauthorized" });

    const required = ["submissionId", "submittedAt", "locale", "name", "email", "country", "discipline", "level", "weeklyHours", "primaryGoal", "powerMeter", "platform", "packageInterest"];
    if (required.some(function (key) { return payload[key] === undefined || payload[key] === ""; })) return json_({ ok: false, code: "validation_failed" });

    const normalizedEmail = String(payload.email).trim().toLowerCase();
    const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, normalizedEmail)
      .map(function (byte) { return (byte + 256).toString(16).slice(-2); })
      .join("");
    const cache = CacheService.getScriptCache();
    const duplicateKey = "intake_" + digest.slice(0, 48);

    lock.waitLock(10000);
    if (cache.get(duplicateKey)) return json_({ ok: false, code: "duplicate" });

    const sheet = getLeadsSheet_();
    sheet.appendRow([
      text_(payload.submissionId),
      new Date(payload.submittedAt),
      text_(payload.locale),
      text_(payload.name),
      normalizedEmail,
      text_(payload.phone),
      text_(payload.country),
      text_(payload.discipline),
      text_(payload.level),
      Number(payload.weeklyHours),
      text_(payload.primaryGoal),
      text_(payload.targetEvent),
      text_(payload.eventDate),
      text_(payload.powerMeter),
      text_(payload.platform),
      text_(payload.packageInterest),
      text_(payload.message),
      payload.consent === true,
      "new",
      "",
      ""
    ]);
    cache.put(duplicateKey, "1", 900);
    notify_(payload);
    return json_({ ok: true, submissionId: payload.submissionId });
  } catch (error) {
    return json_({ ok: false, code: "delivery_failed" });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function setup() {
  getLeadsSheet_();
  const handlers = ScriptApp.getProjectTriggers().map(function (trigger) { return trigger.getHandlerFunction(); });
  if (handlers.indexOf("cleanupLostLeads") === -1) ScriptApp.newTrigger("cleanupLostLeads").timeBased().everyDays(1).atHour(3).create();
  if (handlers.indexOf("handleLeadStatusEdit") === -1) ScriptApp.newTrigger("handleLeadStatusEdit").forSpreadsheet(getSpreadsheet_()).onEdit().create();
}

function handleLeadStatusEdit(event) {
  if (!event || !event.range || event.range.getSheet().getName() !== LEADS_SHEET || event.range.getRow() === 1) return;
  const statusColumn = HEADERS.indexOf("status") + 1;
  if (event.range.getColumn() !== statusColumn) return;
  const row = event.range.getRow();
  const sheet = event.range.getSheet();
  const closedColumn = HEADERS.indexOf("closed_at") + 1;
  const deleteColumn = HEADERS.indexOf("retention_delete_after") + 1;
  const status = String(event.value || "").toLowerCase();
  if (status === "lost") {
    const closed = sheet.getRange(row, closedColumn).getValue() || new Date();
    const deleteAfter = new Date(closed);
    deleteAfter.setMonth(deleteAfter.getMonth() + 6);
    sheet.getRange(row, closedColumn).setValue(closed);
    sheet.getRange(row, deleteColumn).setValue(deleteAfter);
  } else if (status === "won") {
    sheet.getRange(row, deleteColumn).clearContent();
  }
}

function cleanupLostLeads() {
  const sheet = getLeadsSheet_();
  if (sheet.getLastRow() < 2) return;
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues();
  const statusIndex = HEADERS.indexOf("status");
  const deleteIndex = HEADERS.indexOf("retention_delete_after");
  const now = new Date();
  for (let index = values.length - 1; index >= 0; index -= 1) {
    const status = String(values[index][statusIndex]).toLowerCase();
    const deleteAfter = values[index][deleteIndex];
    if (status === "lost" && deleteAfter instanceof Date && deleteAfter <= now) sheet.deleteRow(index + 2);
  }
}

function getSpreadsheet_() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  if (!spreadsheetId) throw new Error("SPREADSHEET_ID is not configured");
  return SpreadsheetApp.openById(spreadsheetId);
}

function getLeadsSheet_() {
  const spreadsheet = getSpreadsheet_();
  const sheet = spreadsheet.getSheetByName(LEADS_SHEET) || spreadsheet.insertSheet(LEADS_SHEET);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notify_(payload) {
  const recipient = PropertiesService.getScriptProperties().getProperty("NOTIFICATION_EMAIL") || "tychocoach@gmail.com";
  const subject = "New Tycho Coaching intake · " + text_(payload.name);
  const body = [
    "A new coaching intake was received.",
    "",
    "Submission: " + text_(payload.submissionId),
    "Name: " + text_(payload.name),
    "Email: " + text_(payload.email),
    "Country: " + text_(payload.country),
    "Discipline: " + text_(payload.discipline),
    "Level: " + text_(payload.level),
    "Weekly hours: " + text_(payload.weeklyHours),
    "Goal: " + text_(payload.primaryGoal),
    "Package: " + text_(payload.packageInterest),
    "",
    "Open the private Leads sheet for the complete intake."
  ].join("\n");
  MailApp.sendEmail(recipient, subject, body);
}

function text_(value) {
  const safe = value === undefined || value === null ? "" : String(value);
  return /^[=+\-@]/.test(safe) ? "'" + safe : safe;
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
