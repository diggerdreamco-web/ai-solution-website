/* ============================================================
   AI SOLUTION — Bilingual Translations (EN / BM)
   ============================================================ */

const i18n = {
  en: {
    /* ── SHARED NAV ── */
    'nav.home':     'Home',
    'nav.services': 'Services',
    'nav.about':    'About Us',
    'nav.pricing':  'Pricing',
    'nav.contact':  'Contact',
    'nav.cta':      'Get Free Consultation',

    /* ── SHARED BOTTOM BAR ── */
    'bar.tagline': 'Ready to transform your business?',
    'bar.btn':     'Get Started Free',

    /* ══════════════════════════════════════════════════
       INDEX PAGE
    ══════════════════════════════════════════════════ */
    'index.hero.1':    'AI that',
    'index.hero.2':    'actually',
    'index.hero.3':    'works.',
    'index.hero.desc': 'Small AI studio from Kota Bharu. If you have a real business problem (slow sales, stock always wrong, customers leaving) tell us. We look at it, we code, we ship something that actually runs.',
    'index.hero.btn1': 'Tell us your problem',
    'index.hero.btn2': 'What we do',

    'index.cap.label': 'What We Do',
    'index.cap.title': 'Six things <span>we actually know</span> how to build',
    'index.cap.desc':  'Not every AI fits every business. Here\'s what we\'ve actually shipped for real clients. Ask for a case study if you want.',
    'index.cap.ml.title':        'Machine Learning',
    'index.cap.ml.desc':         'Models that learn from your own data. Like predicting which customer is about to run out of stock next week. Or flagging suspect transactions out of a thousand a day.',
    'index.cap.nlp.title':       'Natural Language Processing',
    'index.cap.nlp.desc':        'Systems that understand BM, English, and the mix in between. Tag customer emails, classify complaints by type, summarize a thousand reviews into the five points that matter.',
    'index.cap.cv.title':        'Computer Vision',
    'index.cap.cv.desc':         'Cameras plus AI to count items entering your warehouse, read plate numbers at the gate, spot damaged packaging on the line. Nobody has to stare at a screen for 8 hours.',
    'index.cap.analytics.title': 'Predictive Analytics',
    'index.cap.analytics.desc':  'Tells you what\'s likely to happen next week. When stock runs out. Which customers are about to churn. When peak hour actually hits.',
    'index.cap.auto.title':      'Process Automation',
    'index.cap.auto.desc':       'Auto-generate invoices from WhatsApp orders. Auto-update your Excel when new orders arrive. The work you repeat fifty times a day, let the machine handle.',
    'index.cap.sec.title':       'AI Audit',
    'index.cap.sec.desc':        'Already using AI tools but not happy with them? We audit. Find the parts with low accuracy, fix weak prompts, document what we did so you can hand it off.',

    'index.ben.label':    'When AI Helps',
    'index.ben.title':    'When AI <span>actually</span> earns its keep',
    'index.ben.desc':     'AI isn\'t magic. For certain kinds of work, it pays off. Here are real examples.',
    'index.ben.1.title':  'Saves Time on Repetitive Work',
    'index.ben.1.desc':   'The work you repeat every day (copying data, generating reports, sending standard replies) AI can handle. Your team focuses on things that need a human brain.',
    'index.ben.2.title':  'Decisions Without the Wait',
    'index.ben.2.desc':   'If you wait for Excel to finish before deciding anything, you\'re already behind. AI processes thousands of rows in a second. You just read the summary.',
    'index.ben.3.title':  'Customers Don\'t Wait',
    'index.ben.3.desc':   'A customer WhatsApps you at 3am about an order. Your chatbot answers right away. The complicated ones get handed off to your staff in the morning.',
    'index.ben.4.title':  'Your Competitor Already Started',
    'index.ben.4.desc':   'The online shop next door already uses AI for product recommendations. Wait another year or two and the gap gets hard to close.',
    'index.ben.5.title':  'Scale Without Hiring',
    'index.ben.5.desc':   'When you go from 100 to 10,000 orders a day, the system is the same. You don\'t hire 100 more admins. You just handle what the AI doesn\'t.',
    'index.ben.6.title':  'Plan With Data, Not Guesses',
    'index.ben.6.desc':   'How much stock for next month? When does the marketing budget go out? Based on your actual trends, not a gut feeling.',

    'index.approach.label': 'Our Approach',
    'index.approach.title': 'From <span>Strategy</span> to Scaled Reality',
    'index.approach.desc':  'Every engagement begins with a thorough discovery phase where we map your data landscape, business goals, and ROI targets before writing a single line of code.',
    'index.approach.li1':   'AI readiness assessment and full data audit included',
    'index.approach.li2':   'Agile delivery in 2-week sprints with continuous stakeholder review',
    'index.approach.li3':   'Human-in-the-loop workflows for high-stakes decision domains',
    'index.approach.li4':   'Comprehensive model documentation and full knowledge transfer',
    'index.approach.btn':   'Meet the Team',

    'index.cta.title': 'Got a problem <span>AI should help with?</span>',
    'index.cta.desc':  'Send a message. I reply within 24 hours. If AI isn\'t the answer, I\'ll tell you straight.',
    'index.cta.btn1':  'Start Free Consultation',
    'index.cta.btn2':  'View Pricing Plans',

    /* ══════════════════════════════════════════════════
       ABOUT PAGE
    ══════════════════════════════════════════════════ */
    'about.hero.label': 'About Us',
    'about.hero.title': 'Small studio <span>from Kota Bharu</span>',
    'about.hero.desc':  'AI Solution is just getting started. We\'re looking for our first clients to build AI systems that actually work. If you want to take a chance on a hungry studio that pays attention, we\'re here.',

    'about.mission.label': 'Our Mission',
    'about.mission.title': 'AI should <span>help your work</span>, not add to it',
    'about.mission.p1':    'AI Solution started with one belief: most companies get sold AI hype, not AI results. Consultants ship slide decks. Software vendors push one-size-fits-all tools. None of it delivers real value.',
    'about.mission.p2':    "We built AI Solution to be the partner we wish we had — practical engineers who understand the business, talk straight without jargon, and measure their work by your outcomes, not their billable hours.",
    'about.mission.btn':   'Start a project',

    'about.values.label':   'What We Stand For',
    'about.values.title':   'What <span>we stand for</span>',
    'about.values.desc':    "Not posters on the office wall. This is how we pick projects, how we talk to clients, and why we turn down work that isn't a fit.",
    'about.val.1.title':    'Results, Not Output',
    'about.val.1.desc':     "We measure success by the business outcomes we create. Not lines of code, not models trained, not slide decks delivered. If it doesn't move your needle, we say so early.",
    'about.val.2.title':    'Straight Talk',
    'about.val.2.desc':     "We tell you what your data can and can't support. We flag risks before they become problems. We share metrics openly, including the disappointing ones.",
    'about.val.3.title':    'Build Responsibly',
    'about.val.3.desc':     'Every model we build is assessed for bias and downstream impact. We refuse projects that could cause harm, regardless of how lucrative.',
    'about.val.4.title':    'On Your Team',
    'about.val.4.desc':     'We embed with your team, upskill your engineers, and document everything. When the engagement ends, the knowledge stays with you — not with us.',
    'about.val.5.title':    'Fast But Right',
    'about.val.5.desc':     "Rapid prototyping isn't an excuse for technical debt. We move fast using battle-tested frameworks — production-ready code that won't collapse under real load.",
    'about.val.6.title':    'Local Context',
    'about.val.6.desc':     'Based in Kota Bharu, we know the Malaysian context. We design for real users (not generic personas) and local regulations from day one.',

    'about.team.label': 'Leadership',
    'about.team.title': 'Meet the <span>Minds Behind</span> AI Solution',
    'about.team.desc':  'Our leadership team combines decades of experience from top research institutions, global consultancies, and high-growth technology companies.',

    'about.timeline.label': 'Our Journey',
    'about.timeline.title': 'From Stealth Startup to <span>Global AI Leader</span>',
    'about.timeline.desc':  'Six years of deliberate growth, built on deep technical expertise and an unwavering commitment to client outcomes.',

    'about.culture.label': 'How We Work',
    'about.culture.title': 'Small team. <span>Honest work.</span>',
    'about.culture.desc':  "We pick people who are curious, not CVs that match keywords. Everyone on the team has a learning budget, keeps current with AI research, and contributes to open-source.",
    'about.culture.li1':   'Every project has one senior owner — no offloading to juniors without supervision',
    'about.culture.li2':   'Based in Kota Bharu, work remote — can meet in person if needed',
    'about.culture.li3':   'We take projects we understand and refuse the ones we don\'t (cheaper for you)',
    'about.culture.li4':   'Every delivery comes with documentation you can hand off yourself',
    'about.culture.btn':   'Get in touch',

    'about.cta.title': 'Got a project <span>to build?</span>',
    'about.cta.desc':  'Send us a message with your problem. We reply within 24 hours. If it\'s not a fit for us, we\'ll point you somewhere better.',
    'about.cta.btn1':  'Get in Touch',
    'about.cta.btn2':  'Explore Services',

    /* ══════════════════════════════════════════════════
       SERVICES PAGE
    ══════════════════════════════════════════════════ */
    'services.hero.label': 'What We Do',
    'services.hero.title': 'AI services <span>for real problems</span>',
    'services.hero.desc':  'Every service below has a portfolio (ask to see it). We build from scratch, or take over work where another AI vendor failed.',

    'services.port.label': 'Service List',
    'services.port.title': 'Six kinds of work. <span>One team.</span>',
    'services.port.desc':  'Not generalists. We specialize in these 6 areas. For everything else, we refer you to friends who do it better.',
    'services.s1.title':   'Machine Learning',
    'services.s2.title':   'Natural Language Processing',
    'services.s3.title':   'Computer Vision',
    'services.s4.title':   'Predictive Analytics',
    'services.s5.title':   'Process Automation',
    'services.s6.title':   'AI Audit &amp; Strategy',
    'services.card.link':  'Ask us',

    'services.ml.label': 'Machine Learning',
    'services.ml.title': 'Models that <span>learn from your data</span>',
    'services.ml.desc':  'New data comes in every day. The model auto-retrains. If accuracy drops, we get an alert and adjust — you don\'t have to monitor it yourself.',
    'services.nlp.label': 'Language Processing',
    'services.nlp.title': 'AI that <span>understands BM, English, mixed</span>',
    'services.nlp.desc':  'We fine-tune LLMs on your company\'s actual data — products, customers, industry terminology. Output sounds like your brand, not generic ChatGPT.',

    'services.process.label': 'How We Work',
    'services.process.title': 'How <span>we work</span> with you',
    'services.process.desc':  'Not a 6-month contract from day one. We break it into 4 short phases. Not happy after Phase 1? Stop there.',
    'services.p1.title': 'Audit (1 week)',
    'services.p2.title': 'Prototype (2 weeks)',
    'services.p3.title': 'Build (4–6 weeks)',
    'services.p4.title': 'Post-launch',

    'services.cta.title': 'Got a problem to solve?',
    'services.cta.desc':  'Send us a message with your problem. We reply within 24 hours with an initial recommendation. Free, no commitment.',
    'services.cta.btn1':  'Send a message',
    'services.cta.btn2':  'See Pricing',

    /* ══════════════════════════════════════════════════
       PRICING PAGE
    ══════════════════════════════════════════════════ */
    'pricing.hero.label': 'Pricing',
    'pricing.hero.title': 'Clear pricing.<br><span>No hidden fees.</span>',
    'pricing.hero.desc':  'First audit is free on every plan. Cancel anytime. All prices in RM, billed monthly.',

    'pricing.plans.label': 'Plans',
    'pricing.plans.title': 'Plans by <span>company size</span>',
    'pricing.plans.desc':  'Start with Starter to test, scale to Pro when you\'re ready. Enterprise is for on-prem or specific compliance needs.',
    'pricing.tier.starter': 'Starter',
    'pricing.tier.pro':     'Pro',
    'pricing.tier.ent':     'Enterprise',
    'pricing.btn.starter':  'Get Started',
    'pricing.btn.pro':      'Start Pro',
    'pricing.btn.ent':      'Contact us',

    'pricing.addons.label': 'Add-ons',
    'pricing.addons.title': 'Add-ons <span>if you need them</span>',
    'pricing.addons.desc':  'If the base plan doesn\'t cover what you need, add what you need one at a time.',
    'pricing.addon1.title': 'AI Training Workshop',
    'pricing.addon2.title': 'AI Audit',
    'pricing.addon3.title': 'LLM Fine-Tuning',

    'pricing.faq.label': 'FAQ',
    'pricing.faq.title': '<span>Questions</span> we hear often',

    'pricing.cta.title': 'Not sure which plan fits?',
    'pricing.cta.desc':  'Send a message with your problem. We\'ll recommend a plan — or tell you if you don\'t need us yet.',
    'pricing.cta.btn1':  'Send a message',
    'pricing.cta.btn2':  'Browse Services',

    /* ══════════════════════════════════════════════════
       CONTACT PAGE
    ══════════════════════════════════════════════════ */
    'contact.hero.label': 'Get in Touch',
    'contact.hero.title': 'Tell us <span>your problem</span>',
    'contact.hero.desc':  'Send a message. We reply within one business day. If AI isn\'t the answer for your problem, we\'ll say so straight.',

    'contact.info.label':    'Contact Channels',
    'contact.info.title':    'Pick the channel <span>you prefer</span>',
    'contact.form.title':    'Send a message',
    'contact.form.consent':  "I agree to AI Solution's <a href='#' style='color:var(--primary)'>Privacy Policy</a> and consent to being contacted about my enquiry.",
    'contact.form.submit':   'Send',
    'contact.form.success':  "Received. We'll reply within one business day.",

    'contact.process.label': 'After You Send',
    'contact.process.title': 'After <span>you send a message</span>',
    'contact.p1.title':      'Auto-confirm',
    'contact.p2.title':      'Discovery call',
    'contact.p3.title':      'Proposal',
    'contact.p4.title':      'Your decision',

    'contact.cta.title': 'Want to <span>talk now?</span>',
    'contact.cta.desc':  "Pick a 30-minute slot on our calendar. No email back-and-forth — direct booking.",
    'contact.cta.btn1':  'Book a slot',
    'contact.cta.btn2':  'See pricing first',
  },

  /* ════════════════════════════════════════════════════
     BAHASA MALAYSIA TRANSLATIONS
  ════════════════════════════════════════════════════ */
  ms: {
    /* ── SHARED NAV ── */
    'nav.home':     'Utama',
    'nav.services': 'Perkhidmatan',
    'nav.about':    'Tentang Kami',
    'nav.pricing':  'Harga',
    'nav.contact':  'Hubungi',
    'nav.cta':      'Perundingan Percuma',

    /* ── SHARED BOTTOM BAR ── */
    'bar.tagline': 'Sedia transformasi perniagaan anda?',
    'bar.btn':     'Mulakan Percuma',

    /* ══════════════════════════════════════════════════
       INDEX PAGE
    ══════════════════════════════════════════════════ */
    'index.hero.1':    'AI yang',
    'index.hero.2':    'betul-betul',
    'index.hero.3':    'jalan.',
    'index.hero.desc': 'Studio AI kecil dari Kota Bharu. Kalau anda ada masalah perniagaan yang sebenar (jualan perlahan, stok asyik salah, pelanggan hilang) cerita kepada kami. Kami tengok, kami code, kami bagi sistem yang jalan.',
    'index.hero.btn1': 'Cerita masalah anda',
    'index.hero.btn2': 'Apa kami buat',

    'index.cap.label': 'Yang Kami Buat',
    'index.cap.title': 'Enam perkara <span>yang kami tahu</span> buat',
    'index.cap.desc':  'Bukan semua AI sesuai untuk perniagaan anda. Ini yang kami pernah bina untuk klien sebenar (kalau anda nak case study, sila minta).',
    'index.cap.ml.title':        'Pembelajaran Mesin',
    'index.cap.ml.desc':         'Model yang belajar dari data anda sendiri. Contoh: predict pelanggan mana akan habis stok minggu depan, atau flag transaksi suspect dari ratusan transaksi sehari.',
    'index.cap.nlp.title':       'Pemprosesan Bahasa',
    'index.cap.nlp.desc':        'Sistem yang faham BM, English, Manglish campur. Boleh tag email pelanggan, classify complaint ikut jenis, summarize 1000 review jadi 5 ayat penting.',
    'index.cap.cv.title':        'Computer Vision',
    'index.cap.cv.desc':         'Kamera + AI untuk count barang masuk gudang, baca plat kereta masuk parking, detect packaging yang rosak. Tak payah staff duduk pandang screen 8 jam.',
    'index.cap.analytics.title': 'Predictive Analytics',
    'index.cap.analytics.desc':  'Bagi tahu apa yang mungkin jadi minggu depan. Stok berapa habis bila, pelanggan mana akan churn, peak hour pukul berapa.',
    'index.cap.auto.title':      'Automasi Proses',
    'index.cap.auto.desc':       'Auto-generate invoice dari order WhatsApp. Auto-update Excel bila ada email order baru. Kerja yang anda ulang 50 kali sehari, biar mesin buat.',
    'index.cap.sec.title':       'AI Audit',
    'index.cap.sec.desc':        'Anda dah pakai AI tool tapi tak puas hati? Kami audit. Tengok mana yang accuracy rendah, fix prompt yang weak, bagi documentation yang anda boleh handover.',

    'index.ben.label':   'Bila AI Berguna',
    'index.ben.title':   'Bila AI sebenarnya <span>jadi</span>',
    'index.ben.desc':    'AI bukan magic. Untuk certain jenis kerja sahaja dia memang berbaloi. Ini contoh real.',
    'index.ben.1.title': 'Jimat Masa Kerja Repetitif',
    'index.ben.1.desc':  'Kerja yang anda buat ulang setiap hari (copy data, generate report, balas mesej standard) AI boleh handle. Staff anda fokus benda yang perlukan otak manusia.',
    'index.ben.2.title': 'Keputusan Tak Lambat',
    'index.ben.2.desc':  'Kalau anda kena tunggu Excel siap dulu setiap kali nak buat keputusan, anda dah ketinggalan. AI proses ribuan row dalam sesaat, anda tengok summary sahaja.',
    'index.ben.3.title': 'Pelanggan Tak Tunggu Lama',
    'index.ben.3.desc':  'Pelanggan WhatsApp tanya pukul 3 pagi pasal order, chatbot anda jawab terus. Yang rumit baru hand-off ke staff esok pagi.',
    'index.ben.4.title': 'Pesaing Anda Dah Start',
    'index.ben.4.desc':  'Kedai online sebelah dah pakai AI untuk recommend produk. Kalau anda tunggu lagi setahun dua, susah nak kejar bila gap dah jauh.',
    'index.ben.5.title': 'Scale Tanpa Tambah Staff',
    'index.ben.5.desc':  'Bila order 100 vs 10,000 sehari, sistem sama. Anda tak perlu hire 100 admin lagi. Tinggal jaga yang AI tak handle.',
    'index.ben.6.title': 'Plan Pakai Data, Bukan Tekaan',
    'index.ben.6.desc':  'Stok berapa banyak nak order bulan depan? Marketing budget keluar bila? Berdasarkan trend sebenar perniagaan anda, bukan gut feeling.',

    'index.approach.label': 'Pendekatan Kami',
    'index.approach.title': 'Dari <span>Strategi</span> ke Realiti Berskala',
    'index.approach.desc':  'Setiap penglibatan bermula dengan fasa penemuan menyeluruh di mana kami memetakan landskap data, matlamat perniagaan, dan sasaran ROI anda sebelum menulis satu baris kod.',
    'index.approach.li1':   'Penilaian kesediaan AI dan audit data penuh disertakan',
    'index.approach.li2':   'Penghantaran agile dalam sprint 2 minggu dengan ulasan pemegang kepentingan berterusan',
    'index.approach.li3':   'Aliran kerja manusia-dalam-gelung untuk domain keputusan berisiko tinggi',
    'index.approach.li4':   'Dokumentasi model yang komprehensif dan pemindahan pengetahuan penuh',
    'index.approach.btn':   'Temui Pasukan',

    'index.cta.title': 'Ada masalah <span>yang AI patut tolong?</span>',
    'index.cta.desc':  'Hantar mesej. Kami reply dalam 24 jam. Kalau AI bukan jawapannya, kami cakap terus.',
    'index.cta.btn1':  'Hantar mesej',
    'index.cta.btn2':  'Tengok harga dulu',

    /* ══════════════════════════════════════════════════
       ABOUT PAGE
    ══════════════════════════════════════════════════ */
    'about.hero.label': 'Tentang Kami',
    'about.hero.title': 'Studio kecil <span>dari Kota Bharu</span>',
    'about.hero.desc':  'AI Solution baru bermula. Kami sedang cari klien pertama untuk bina sistem AI yang sebenarnya jalan. Kalau anda nak ambil risiko dengan studio yang lapar dan teliti, kami sini.',

    'about.mission.label': 'Misi Kami',
    'about.mission.title': 'AI patut <span>tolong kerja</span>, bukan tambah masalah',
    'about.mission.p1':    'AI Solution mula dengan satu prinsip: kebanyakan syarikat dijual hype AI, bukan hasil AI. Konsultan hantar slide deck. Vendor software jual tool one-size-fits-all. Tak ada yang bagi nilai sebenar pada perniagaan.',
    'about.mission.p2':    'Kami bina AI Solution jadi rakan kerja yang kami sendiri nak ada — engineer praktikal yang faham konteks perniagaan, cakap clear tanpa jargon, dan ukur kerja ikut hasil anda bukan billable hours.',
    'about.mission.btn':   'Mulakan projek',

    'about.values.label':   'Apa Kami Pegang',
    'about.values.title':   'Yang <span>kami pegang</span>',
    'about.values.desc':    'Bukan poster di pejabat. Ini cara kami pilih projek, cara kami cakap dengan klien, dan kenapa kami refuse projek yang tak sesuai.',
    'about.val.1.title':    'Hasil, Bukan Output',
    'about.val.1.desc':     'Kami ukur kejayaan ikut hasil perniagaan yang kami beri klien. Bukan baris kod, bukan model yang dilatih, bukan slide deck. Kalau tak gerakkan needle anda, kami cakap awal.',
    'about.val.2.title':    'Cakap Terus',
    'about.val.2.desc':     'Kami bagi tahu data anda boleh buat apa, dan tak boleh buat apa. Flag risiko sebelum jadi masalah. Share metrics terbuka, walaupun bila result tak best.',
    'about.val.3.title':    'Bina Yang Bertanggungjawab',
    'about.val.3.desc':     'Setiap model kami assess untuk bias dan kesan downstream. Kami refuse projek yang boleh bahaya, regardless berapa lucrative.',
    'about.val.4.title':    'Pasukan Anda',
    'about.val.4.desc':     'Kami embed dalam pasukan anda, upskill engineer anda, document semua. Bila engagement habis, knowledge stay dengan anda — bukan dengan kami.',
    'about.val.5.title':    'Cepat Tapi Betul',
    'about.val.5.desc':     'Rapid prototyping bukan alasan untuk technical debt. Kami gerak laju guna framework yang dah tested — production-ready code yang tak collapse bawah load sebenar.',
    'about.val.6.title':    'Konteks Tempatan',
    'about.val.6.desc':     'Base di Kota Bharu, kami faham konteks Malaysia. Kami design untuk pengguna sebenar (bukan persona generic) dan regulasi tempatan dari hari pertama.',

    'about.team.label': 'Kepimpinan',
    'about.team.title': 'Temui <span>Minda Di Sebalik</span> AI Solution',
    'about.team.desc':  'Pasukan kepimpinan kami menggabungkan dekad pengalaman dari institusi penyelidikan terkemuka, perunding global, dan syarikat teknologi berprestasi tinggi.',

    'about.timeline.label': 'Perjalanan Kami',
    'about.timeline.title': 'Dari Permulaan Senyap ke <span>Pemimpin AI Global</span>',
    'about.timeline.desc':  'Enam tahun pertumbuhan yang disengajakan, dibina di atas kepakaran teknikal mendalam dan komitmen teguh kepada hasil klien.',

    'about.culture.label': 'Cara Kami Kerja',
    'about.culture.title': 'Pasukan kecil. <span>Kerja jujur.</span>',
    'about.culture.desc':  'Kami pilih orang yang ingin tahu, bukan CV yang match keyword. Setiap orang dalam pasukan ada budget pembelajaran, kekal terkini dengan research AI, dan contribute ke open-source projek.',
    'about.culture.li1':   'Setiap projek ada satu pakar utama — tak offload ke junior tanpa supervision',
    'about.culture.li2':   'Base di Kota Bharu, kerja remote — boleh meet kalau perlu',
    'about.culture.li3':   'Terima projek yang kami faham, refuse yang tak (lebih murah untuk anda)',
    'about.culture.li4':   'Setiap delivery ada documentation yang anda boleh handover sendiri',
    'about.culture.btn':   'Hubungi kami',

    'about.cta.title': 'Ada projek <span>nak bina?</span>',
    'about.cta.desc':  'Hantar mesej dengan masalah anda. Kami balas dalam 24 jam. Kalau projek tak sesuai untuk kami, kami cadangkan tempat lain.',
    'about.cta.btn1':  'Hubungi Kami',
    'about.cta.btn2':  'Lihat Perkhidmatan',

    /* ══════════════════════════════════════════════════
       SERVICES PAGE
    ══════════════════════════════════════════════════ */
    'services.hero.label': 'Apa Kami Buat',
    'services.hero.title': 'Perkhidmatan <span>AI</span><br>untuk masalah sebenar',
    'services.hero.desc':  'Setiap perkhidmatan di bawah ada portfolio (boleh minta tengok). Kami bina dari awal, atau ambil over kerja AI yang lain dah gagal.',

    'services.port.label': 'Senarai Perkhidmatan',
    'services.port.title': 'Enam jenis kerja. <span>Satu pasukan.</span>',
    'services.port.desc':  'Bukan generalist. Kami specialize dalam 6 area ni. Yang lain, kami refer ke kawan-kawan yang lebih sesuai.',
    'services.s1.title':   'Machine Learning',
    'services.s2.title':   'Pemprosesan Bahasa (NLP)',
    'services.s3.title':   'Computer Vision',
    'services.s4.title':   'Predictive Analytics',
    'services.s5.title':   'Automasi Proses',
    'services.s6.title':   'AI Audit &amp; Strategy',
    'services.card.link':  'Tanya kami',

    'services.ml.label': 'Machine Learning',
    'services.ml.title': 'Model yang <span>belajar dari data anda</span>',
    'services.ml.desc':  'Data baru masuk setiap hari, model auto-retrain. Kalau accuracy drop, kami terima alert dan adjust — anda tak perlu monitor sendiri.',
    'services.nlp.label': 'Pemprosesan Bahasa',
    'services.nlp.title': 'AI yang <span>faham BM, English, campur</span>',
    'services.nlp.desc':  'Kami fine-tune LLM pada data syarikat anda — produk, customer, terminologi industri. Output dalam bahasa yang sesuai brand anda, bukan style ChatGPT generic.',

    'services.process.label': 'Cara Kerja',
    'services.process.title': 'Cara <span>kami kerja</span> dengan anda',
    'services.process.desc':  'Bukan kontrak 6 bulan dari awal. Pecah jadi 4 phase pendek. Tak puas hati lepas Phase 1? Stop di situ.',
    'services.p1.title': 'Audit (1 minggu)',
    'services.p2.title': 'Prototaip (2 minggu)',
    'services.p3.title': 'Build (4–6 minggu)',
    'services.p4.title': 'Selepas-launch',

    'services.cta.title': 'Ada masalah nak selesaikan?',
    'services.cta.desc':  'Hantar mesej dengan masalah anda. Kami balas dalam 24 jam dengan cadangan awal. Percuma, tak perlu commit apa-apa.',
    'services.cta.btn1':  'Hantar mesej',
    'services.cta.btn2':  'Lihat Harga',

    /* ══════════════════════════════════════════════════
       PRICING PAGE
    ══════════════════════════════════════════════════ */
    'pricing.hero.label': 'Harga',
    'pricing.hero.title': 'Harga terus.<br><span>Tiada hidden fee.</span>',
    'pricing.hero.desc':  'Audit awal percuma untuk semua pelan. Boleh batal bila-bila masa. Semua dalam RM, billed bulanan.',

    'pricing.plans.label': 'Pelan',
    'pricing.plans.title': 'Pelan ikut <span>saiz syarikat</span>',
    'pricing.plans.desc':  'Mula dari Starter untuk test, scale ke Pro bila siap. Enterprise untuk yang perlu on-prem atau compliance khusus.',
    'pricing.tier.starter': 'Starter',
    'pricing.tier.pro':     'Pro',
    'pricing.tier.ent':     'Enterprise',
    'pricing.btn.starter':  'Mulakan',
    'pricing.btn.pro':      'Mulakan Pro',
    'pricing.btn.ent':      'Hubungi kami',

    'pricing.addons.label': 'Add-on',
    'pricing.addons.title': 'Tambahan <span>kalau perlu</span>',
    'pricing.addons.desc':  'Kalau pelan biasa tak cover keperluan anda, boleh tambah satu-satu ikut keperluan.',
    'pricing.addon1.title': 'Bengkel Latihan AI',
    'pricing.addon2.title': 'Audit AI',
    'pricing.addon3.title': 'LLM Fine-tuning',

    'pricing.faq.label': 'Soalan Lazim',
    'pricing.faq.title': '<span>Soalan</span> yang kami selalu jawab',

    'pricing.cta.title': 'Tak pasti pelan mana sesuai?',
    'pricing.cta.desc':  'Hantar mesej cerita masalah anda. Kami cadangkan pelan yang sesuai — atau bagi tahu kalau anda tak perlu lagi.',
    'pricing.cta.btn1':  'Hantar mesej',
    'pricing.cta.btn2':  'Lihat Perkhidmatan',

    /* ══════════════════════════════════════════════════
       CONTACT PAGE
    ══════════════════════════════════════════════════ */
    'contact.hero.label': 'Hubungi Kami',
    'contact.hero.title': 'Cerita <span>masalah anda</span>',
    'contact.hero.desc':  'Hantar mesej. Kami balas dalam 1 hari bekerja. Kalau AI bukan jawapan untuk masalah anda, kami cakap terus.',

    'contact.info.label':    'Cara Hubungi',
    'contact.info.title':    'Pilih saluran <span>yang anda selesa</span>',
    'contact.form.title':    'Hantar mesej',
    'contact.form.consent':  "Saya setuju dengan <a href='#' style='color:var(--primary)'>Dasar Privasi</a> AI Solution dan boleh dihubungi pasal pertanyaan saya.",
    'contact.form.submit':   'Hantar',
    'contact.form.success':  'Diterima. Kami balas dalam 1 hari bekerja.',

    'contact.process.label': 'Selepas Hantar',
    'contact.process.title': 'Selepas <span>anda hantar mesej</span>',
    'contact.p1.title':      'Auto-confirm',
    'contact.p2.title':      'Discovery call',
    'contact.p3.title':      'Cadangan',
    'contact.p4.title':      'Keputusan anda',

    'contact.cta.title': 'Nak <span>cakap terus?</span>',
    'contact.cta.desc':  'Pilih slot 30 minit dalam kalendar kami. Tak perlu emel berbalas — direct booking.',
    'contact.cta.btn1':  'Tempah slot',
    'contact.cta.btn2':  'Lihat harga dulu',
  }
};
