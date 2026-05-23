/* ============================================================
   AI SOLUTION — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  setActiveNav();
  initReveal();
  initParallax();
  initCounters();
  initFAQ();
  initContactForm();
  initBackTop();
  initChat();
  initI18n();
});

/* ---- Sidebar / Mobile Menu ---- */
function initSidebar() {
  const burger   = document.querySelector('.hamburger');
  const sidebar  = document.querySelector('.sidebar');
  const overlay  = document.querySelector('.sidebar-overlay');
  if (!burger || !sidebar) return;

  const open  = () => { burger.classList.add('open'); sidebar.classList.add('open'); overlay.classList.add('visible'); document.body.style.overflow = 'hidden'; };
  const close = () => { burger.classList.remove('open'); sidebar.classList.remove('open'); overlay.classList.remove('visible'); document.body.style.overflow = ''; };

  burger.addEventListener('click', () => sidebar.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);

  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => { if (window.innerWidth <= 1024) close(); });
  });
}

/* ---- Active nav link ---- */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (!page && href === 'index.html') || (page === '/' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  els.forEach(el => obs.observe(el));
}

/* ============================================================
   PARALLAX
   ============================================================ */
function initParallax() {
  const layers = document.querySelectorAll('[data-speed]');
  if (!layers.length) return;

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    layers.forEach(el => {
      const s = parseFloat(el.dataset.speed) || 0.25;
      el.style.transform = `translateY(${sy * s}px)`;
    });
  }, { passive: true });
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function initCounters() {
  const els = document.querySelectorAll('.counter');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        runCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  els.forEach(el => obs.observe(el));
}

function runCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const dur    = 2000;
  const start  = performance.now();
  (function step(now) {
    const t  = Math.min((now - start) / dur, 1);
    const e4 = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.round(e4 * target).toLocaleString();
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  })(start);
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  /* real-time clear */
  form.querySelectorAll('.form-ctrl').forEach(f => {
    f.addEventListener('input', () => f.closest('.form-group')?.classList.remove('has-err'));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;

    form.querySelectorAll('[required]').forEach(f => {
      const g = f.closest('.form-group');
      if (!g) return;
      g.classList.remove('has-err');

      if (!f.value.trim()) {
        g.classList.add('has-err');
        g.querySelector('.form-err').textContent = 'This field is required.';
        ok = false;
      } else if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value)) {
        g.classList.add('has-err');
        g.querySelector('.form-err').textContent = 'Please enter a valid email address.';
        ok = false;
      }
    });

    if (!ok) return;

    const btn = form.querySelector('[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span>Sending…</span>';

    setTimeout(() => {
      form.reset();
      btn.disabled  = false;
      btn.innerHTML = orig;
      const msg = form.querySelector('.form-ok');
      if (msg) { msg.classList.add('show'); setTimeout(() => msg.classList.remove('show'), 5500); }
    }, 1600);
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackTop() {
  const btn = document.querySelector('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   CHAT WIDGET
   ============================================================ */
/* ============================================================
   BILINGUAL (EN / BM)
   ============================================================ */
function initI18n() {
  if (typeof i18n === 'undefined') return;
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === saved);
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      localStorage.setItem('lang', lang);
      applyLang(lang);
      document.querySelectorAll('.lang-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.lang === lang)
      );
    });
  });
}

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });
}

const CHAT_GAS_URL = '/chat';

function initChat() {
  /* inject HTML */
  const wrap = document.createElement('div');
  wrap.className = 'chat-widget';
  wrap.id = 'chat-widget';
  wrap.innerHTML = `
    <div class="chat-panel" id="chat-panel">
      <div class="chat-header">
        <div class="chat-header-info">
          <div class="chat-avatar">AI</div>
          <div>
            <div class="chat-name">AI Solution</div>
            <div class="chat-status">Online — replies instantly</div>
          </div>
        </div>
        <button class="chat-close" id="chat-close" aria-label="Close chat">&#x2715;</button>
      </div>
      <div class="chat-body" id="chat-body">
        <div class="chat-msg bot">
          <div class="chat-bubble">Hi there! How can we help you today?</div>
          <div class="chat-time">Just now</div>
        </div>
      </div>
      <div class="chat-footer">
        <input class="chat-input" id="chat-input" type="text" placeholder="Type a message…" autocomplete="off" />
        <button class="chat-send" id="chat-send" aria-label="Send">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" stroke="none"/></svg>
        </button>
      </div>
    </div>
    <button class="chat-toggle" id="chat-toggle" aria-label="Open chat">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      <span class="chat-badge" id="chat-badge">1</span>
    </button>`;
  document.body.appendChild(wrap);

  const panel  = document.getElementById('chat-panel');
  const toggle = document.getElementById('chat-toggle');
  const close  = document.getElementById('chat-close');
  const input  = document.getElementById('chat-input');
  const send   = document.getElementById('chat-send');
  const body   = document.getElementById('chat-body');
  const badge  = document.getElementById('chat-badge');

  const replies = [
    'Thanks for reaching out! Our team will get back to you within 1 business day.',
    'Great — feel free to share more details and we\'ll tailor a response for you.',
    'Noted! You can also fill in our contact form for a faster response.',
    'Our solution architects are available Mon–Fri, 9am–6pm. We\'ll follow up shortly!'
  ];
  let replyIdx = 0;

  const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const addMsg = (text, type) => {
    const el = document.createElement('div');
    el.className = `chat-msg ${type}`;
    el.innerHTML = `<div class="chat-bubble">${text}</div><div class="chat-time">${now()}</div>`;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  };

  const showTyping = () => {
    const el = document.createElement('div');
    el.className = 'chat-msg bot chat-typing';
    el.innerHTML = `<div class="chat-bubble"><div class="chat-dot"></div><div class="chat-dot"></div><div class="chat-dot"></div></div>`;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  };

  const openPanel = () => {
    panel.classList.add('open');
    badge.classList.add('hide');
    input.focus();
  };

  const closePanel = () => panel.classList.remove('open');

  toggle.addEventListener('click', () => panel.classList.contains('open') ? closePanel() : openPanel());
  close.addEventListener('click', closePanel);

  const doSend = async () => {
    const txt = input.value.trim();
    if (!txt) return;
    addMsg(txt, 'user');
    input.value = '';
    send.disabled = true;

    const typing = showTyping();

    if (CHAT_GAS_URL && CHAT_GAS_URL !== 'YOUR_GAS_WEB_APP_URL') {
      try {
        let session = localStorage.getItem('chat-session');
        if (!session) {
          session = (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(36).slice(2));
          localStorage.setItem('chat-session', session);
        }
        const params = new URLSearchParams({
          message: txt,
          page: location.pathname.split('/').pop() || 'index.html',
          session
        });
        const res  = await fetch(`${CHAT_GAS_URL}?${params}`);
        const data = await res.json();
        typing.remove();
        addMsg(data.reply || 'Terima kasih! Pasukan kami akan menghubungi anda dalam masa 1 hari bekerja.', 'bot');
      } catch {
        typing.remove();
        addMsg('Maaf, ada gangguan. Cuba lagi sebentar.', 'bot');
      }
    } else {
      setTimeout(() => {
        typing.remove();
        addMsg(replies[replyIdx % replies.length], 'bot');
        replyIdx++;
      }, 1000);
    }

    send.disabled = false;
  };

  send.addEventListener('click', doSend);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSend(); });
}
