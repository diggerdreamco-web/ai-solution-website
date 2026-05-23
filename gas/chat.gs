// ============================================================
//  AI Solution — Chat Backend (Google Apps Script)
//
//  Endpoints (semua doGet):
//    ?action=context&session=xxx  → return products + promos + history
//    ?action=log&...              → log conversation baru
//
//  Sheets yang diperlukan:
//    "Products"  : Name | Description | Price | Active
//    "Promos"    : Title | Description | Valid Until | Active
//    "Chat Logs" : Timestamp | Session | Message | Reply | Page  (auto)
//
//  Deploy: Execute as Me, Who has access: Anyone
// ============================================================

const NOTIFY_EMAIL = 'ruddenmohd@gmail.com';
const LOG_SHEET    = 'Chat Logs';
const HISTORY_MAX  = 6;   // berapa pasangan mesej terakhir di-include sebagai context

function doGet(e) {
  try {
    const action = e.parameter.action || 'log';
    if (action === 'context') return handleContext(e);
    return handleLog(e);
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doPost(e) { return doGet(e); }

/* ── CONTEXT: return data utk AI ── */
function handleContext(e) {
  const session = (e.parameter.session || '').trim();

  return jsonResponse({
    ok:       true,
    products: readSheetActive('Products'),
    promos:   readSheetActive('Promos'),
    history:  session ? getHistory(session, HISTORY_MAX) : []
  });
}

/* ── LOG: simpan chat baru ── */
function handleLog(e) {
  const session = (e.parameter.session || '').trim();
  const message = (e.parameter.message || '').trim();
  const reply   = (e.parameter.reply   || '').trim();
  const page    = e.parameter.page || '—';

  if (!message) return jsonResponse({ ok: false });

  const ss  = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(LOG_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(LOG_SHEET);
    sheet.appendRow(['Timestamp', 'Session', 'Message', 'Reply', 'Page']);
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([new Date(), session, message, reply, page]);

  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '💬 New chat — AI Solution',
      body:
        'Session: ' + (session || '—') + '\n\n' +
        'Mesej:\n"' + message + '"\n\n' +
        'AI reply:\n"' + reply + '"\n\n' +
        'Page: ' + page
    });
  } catch (_) {}

  return jsonResponse({ ok: true });
}

/* ── Helpers ── */

// Baca sheet sebagai array of object, filter ikut column "Active" (TRUE/YES/1)
function readSheetActive(name) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(name);
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];

  const headers = data[0].map(h => String(h).trim());
  const activeCol = headers.findIndex(h => /^active$/i.test(h));

  return data.slice(1)
    .map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    })
    .filter(row => {
      if (activeCol < 0) return true;
      const v = String(row[headers[activeCol]]).toLowerCase().trim();
      return v === 'true' || v === 'yes' || v === '1' || v === 'ya';
    });
}

// Ambil history conversation utk session tertentu (latest N pairs)
function getHistory(session, max) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(LOG_SHEET);
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];

  // header: Timestamp | Session | Message | Reply | Page
  const matches = data.slice(1)
    .filter(row => String(row[1]).trim() === session)
    .slice(-max)
    .map(row => ({ message: String(row[2]), reply: String(row[3]) }));

  return matches;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
