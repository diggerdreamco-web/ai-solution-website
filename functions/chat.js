/* ============================================================
   Cloudflare Pages Function — /chat

   Flow:
     1. Browser hantar {message, page, session} → /chat
     2. /chat ambil context dari GAS (products, promos, customer history)
     3. /chat call Claude dengan enriched system prompt + history
     4. /chat log {session, message, reply, page} ke GAS
     5. /chat return reply ke browser

   Env vars (Cloudflare Pages → Settings → Environment variables):
     ANTHROPIC_API_KEY = sk-ant-xxxx
     GAS_LOG_URL       = https://script.google.com/macros/s/.../exec
   ============================================================ */

const BASE_PROMPT =
  'Kamu adalah AI assistant untuk AI Solution, syarikat konsultansi AI berpusat di Kota Bharu, Kelantan, Malaysia. ' +
  'Tugas kamu: jawab soalan berkaitan perkhidmatan AI, harga, dan bagaimana AI boleh bantu perniagaan. ' +
  'Jawab ringkas, mesra, dan profesional. ' +
  'Balas dalam bahasa yang sama dengan pengguna (BM atau Inggeris). ' +
  'Gunakan data PRODUCTS dan PROMOSI di bawah sebagai sumber kebenaran — jangan reka harga atau perkhidmatan yang tiada dalam senarai.';

export async function onRequestGet({ request, env }) {
  const url     = new URL(request.url);
  const message = (url.searchParams.get('message') || '').trim();
  const page    = url.searchParams.get('page')    || '—';
  const session = url.searchParams.get('session') || '';

  if (!message) return json({ ok: false, reply: '' });

  /* 1. Ambil context dari GAS */
  let context = { products: [], promos: [], history: [] };
  if (env.GAS_LOG_URL) {
    try {
      const ctxRes = await fetch(`${env.GAS_LOG_URL}?action=context&session=${encodeURIComponent(session)}`);
      context = await ctxRes.json();
    } catch {}
  }

  /* 2. Build system prompt dengan products + promos */
  const productLines = (context.products || []).map(p =>
    `- ${p.Name || p.name}: ${p.Price || p.price || '—'} — ${p.Description || p.description || ''}`
  ).join('\n');

  const promoLines = (context.promos || []).map(p =>
    `- ${p.Title || p.title}: ${p.Description || p.description || ''}` +
    (p['Valid Until'] || p.valid_until ? ` (sah hingga ${p['Valid Until'] || p.valid_until})` : '')
  ).join('\n');

  const systemPrompt =
    BASE_PROMPT +
    (productLines ? '\n\nPRODUCTS / SERVICES:\n' + productLines : '') +
    (promoLines   ? '\n\nPROMOSI SEMASA:\n'    + promoLines   : '');

  /* 3. Build messages array — include history */
  const messages = [];
  (context.history || []).forEach(h => {
    if (h.message) messages.push({ role: 'user',      content: h.message });
    if (h.reply)   messages.push({ role: 'assistant', content: h.reply   });
  });
  messages.push({ role: 'user', content: message });

  /* 4. Call Claude */
  let reply = 'Terima kasih! Pasukan kami akan menghubungi anda dalam masa 1 hari bekerja.';
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model:      'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system:     systemPrompt,
        messages
      })
    });
    const data = await res.json();
    if (data.content?.[0]?.text) reply = data.content[0].text;
  } catch {}

  /* 5. Log to Sheet (fire-and-forget) */
  if (env.GAS_LOG_URL) {
    const params = new URLSearchParams({ action: 'log', session, message, reply, page });
    fetch(`${env.GAS_LOG_URL}?${params}`).catch(() => {});
  }

  return json({ ok: true, reply });
}

function json(obj) {
  return new Response(JSON.stringify(obj), {
    headers: { 'Content-Type': 'application/json' }
  });
}
