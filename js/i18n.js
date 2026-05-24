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
    'about.hero.label': 'Our Story',
    'about.hero.title': 'The Team Behind <span>Transformative AI</span>',
    'about.hero.desc':  'Founded by engineers and researchers who left top AI labs to make enterprise-grade artificial intelligence accessible, accountable, and genuinely impactful.',

    'about.mission.label': 'Our Mission',
    'about.mission.title': 'Making AI Work <span>For People</span>, Not the Other Way Around',
    'about.mission.btn':   'Work With Us',

    'about.values.label':   'What Drives Us',
    'about.values.title':   'Our Core <span>Values</span>',
    'about.values.desc':    "These aren't posters on a wall. They're the principles that determine how we hire, what projects we take on, and how we handle difficult situations with clients.",
    'about.val.1.title':    'Outcome Over Output',
    'about.val.2.title':    'Radical Transparency',
    'about.val.3.title':    'Responsible Innovation',
    'about.val.4.title':    'True Partnership',
    'about.val.5.title':    'Speed Without Shortcuts',
    'about.val.6.title':    'Global Perspective',

    'about.team.label': 'Leadership',
    'about.team.title': 'Meet the <span>Minds Behind</span> AI Solution',
    'about.team.desc':  'Our leadership team combines decades of experience from top research institutions, global consultancies, and high-growth technology companies.',

    'about.timeline.label': 'Our Journey',
    'about.timeline.title': 'From Stealth Startup to <span>Global AI Leader</span>',
    'about.timeline.desc':  'Six years of deliberate growth, built on deep technical expertise and an unwavering commitment to client outcomes.',

    'about.culture.label': 'Life at AI Solution',
    'about.culture.title': 'A Culture Built on <span>Curiosity</span> &amp; Craft',
    'about.culture.li1':   '20% time policy — every engineer spends one day a week on blue-sky research',
    'about.culture.li2':   'Fully remote-friendly with quarterly in-person team summits',
    'about.culture.li3':   'Competitive equity, unlimited PTO, and mental health support',
    'about.culture.li4':   'Internal AI ethics review board with rotating membership',
    'about.culture.btn':   'View Open Roles',

    'about.cta.title': "Let's Build Something <span style=\"background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;\">Extraordinary Together</span>",
    'about.cta.desc':  "Whether you're a seed-stage startup or a global enterprise, we bring the same rigour, curiosity, and commitment to every engagement.",
    'about.cta.btn1':  'Get in Touch',
    'about.cta.btn2':  'Explore Services',

    /* ══════════════════════════════════════════════════
       SERVICES PAGE
    ══════════════════════════════════════════════════ */
    'services.hero.label': 'What We Do',
    'services.hero.title': 'Enterprise <span>AI Services</span><br>Built to Scale',
    'services.hero.desc':  "From your first proof-of-concept to a global production rollout, our end-to-end service portfolio covers every phase of your AI journey — with experts who've done it before.",

    'services.port.label': 'Full Portfolio',
    'services.port.title': 'Six Disciplines. <span>One Unified Platform.</span>',
    'services.port.desc':  'Every service is delivered through our integrated AI Platform, giving you a single pane of glass for development, deployment, monitoring, and governance.',
    'services.s1.title':   'Machine Learning Engineering',
    'services.s2.title':   'Natural Language Processing',
    'services.s3.title':   'Computer Vision Solutions',
    'services.s4.title':   'Predictive &amp; Prescriptive Analytics',
    'services.s5.title':   'Intelligent Process Automation',
    'services.s6.title':   'AI Strategy &amp; Governance',
    'services.card.link':  'Inquire about this service',

    'services.ml.label': 'Machine Learning',
    'services.ml.title': 'Models That <span>Improve Themselves</span>',
    'services.ml.desc':  'Our automated retraining pipelines monitor model performance in real time and trigger retraining when drift is detected — so your models stay sharp without manual intervention.',
    'services.nlp.label': 'Natural Language Processing',
    'services.nlp.title': 'Language AI That <span>Understands Context</span>',
    'services.nlp.desc':  'We fine-tune large language models on your domain-specific data, enabling them to understand your industry\'s terminology, tone, and compliance requirements out of the box.',

    'services.process.label': 'How We Work',
    'services.process.title': 'Delivery in <span>Four Phases</span>',
    'services.process.desc':  'A structured, low-risk delivery model that keeps stakeholders aligned and minimises surprises — from initial discovery to post-launch optimisation.',
    'services.p1.title': 'Discovery &amp; Audit',
    'services.p2.title': 'Design &amp; Prototype',
    'services.p3.title': 'Build &amp; Deploy',
    'services.p4.title': 'Monitor &amp; Optimise',

    'services.cta.title': 'Have a Use Case in Mind?',
    'services.cta.desc':  'Share your challenge with our solution architects. We\'ll outline a tailored AI approach — completely free, with no obligation to proceed.',
    'services.cta.btn1':  'Talk to a Solution Architect',
    'services.cta.btn2':  'See Pricing',

    /* ══════════════════════════════════════════════════
       PRICING PAGE
    ══════════════════════════════════════════════════ */
    'pricing.hero.label': 'Pricing Plans',
    'pricing.hero.title': 'Transparent Pricing.<br><span>No Surprises.</span>',
    'pricing.hero.desc':  'Every plan includes your first AI readiness assessment free. Cancel anytime. All prices are in RM and billed monthly unless otherwise agreed.',

    'pricing.plans.label': 'Choose Your Plan',
    'pricing.plans.title': 'The Right Plan for <span>Every Stage</span>',
    'pricing.plans.desc':  'Whether you\'re validating your first AI use case or scaling mission-critical models globally, we have a plan engineered for your current needs — and room to grow.',
    'pricing.tier.starter': 'Starter',
    'pricing.tier.pro':     'Professional',
    'pricing.tier.ent':     'Enterprise',
    'pricing.btn.starter':  'Get Started',
    'pricing.btn.pro':      'Start Professional',
    'pricing.btn.ent':      'Talk to Sales',

    'pricing.addons.label': 'Add-Ons',
    'pricing.addons.title': 'Extend Any Plan With <span>Optional Add-Ons</span>',
    'pricing.addons.desc':  'Need something specific? Our modular add-on library lets you precisely tailor your engagement without overpaying for features you don\'t need.',
    'pricing.addon1.title': 'AI Training Workshop',
    'pricing.addon2.title': 'AI Audit &amp; Health Check',
    'pricing.addon3.title': 'Custom LLM Fine-Tuning',

    'pricing.faq.label': 'FAQ',
    'pricing.faq.title': 'Frequently Asked <span>Questions</span>',

    'pricing.cta.title': 'Not Sure Which Plan Fits?',
    'pricing.cta.desc':  "Book a 30-minute, no-pressure call with a solution architect. We'll map your use case to the right engagement model — and tell you honestly if you don't need us yet.",
    'pricing.cta.btn1':  'Book a Free Call',
    'pricing.cta.btn2':  'Browse Services',

    /* ══════════════════════════════════════════════════
       CONTACT PAGE
    ══════════════════════════════════════════════════ */
    'contact.hero.label': 'Get in Touch',
    'contact.hero.title': "Let's Start a <span>Conversation</span>",
    'contact.hero.desc':  "Whether you're ready to launch your first AI project or just exploring what's possible — we'd love to hear from you. Our team responds within one business day.",

    'contact.info.label':    'Contact Information',
    'contact.info.title':    "We're <span>Here to Help</span>",
    'contact.form.title':    'Send Us a Message',
    'contact.form.consent':  "I agree to AI Solution's <a href='#' style='color:var(--primary)'>Privacy Policy</a> and consent to being contacted about my enquiry.",
    'contact.form.submit':   'Send Message',
    'contact.form.success':  "Message sent! We'll be in touch within one business day.",

    'contact.process.label': 'Before You Hit Send',
    'contact.process.title': 'What Happens <span>Next</span>',
    'contact.p1.title':      'Acknowledgement',
    'contact.p2.title':      'Discovery Call',
    'contact.p3.title':      'Tailored Proposal',
    'contact.p4.title':      'Decision — No Pressure',

    'contact.cta.title': 'Prefer to Talk <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Right Now?</span>',
    'contact.cta.desc':  "Book a 30-minute slot directly in our calendar. No email back-and-forth — just pick a time that works and we'll be there.",
    'contact.cta.btn1':  'Book a Call',
    'contact.cta.btn2':  'View Pricing First',
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
    'index.hero.desc': 'Studio AI kecik dari Kota Bharu. Kalau ko ada masalah perniagaan yang sebenar (jualan slow, stok asyik salah, customer hilang) cerita kat kami. Kami tengok, kami code, kami bagi sistem yang jalan.',
    'index.hero.btn1': 'Cerita masalah ko',
    'index.hero.btn2': 'Apa kami buat',

    'index.cap.label': 'Yang Kami Buat',
    'index.cap.title': 'Enam perkara <span>yang kami tahu</span> buat',
    'index.cap.desc':  'Bukan semua AI sesuai untuk perniagaan ko. Ni yang kami pernah bina untuk klien sebenar (kalau ko nak case study, mintak je).',
    'index.cap.ml.title':        'Pembelajaran Mesin',
    'index.cap.ml.desc':         'Model yang belajar dari data ko sendiri. Macam predict customer mana akan habis stok minggu depan, atau flag transaksi suspect dari ratusan transaksi sehari.',
    'index.cap.nlp.title':       'Pemprosesan Bahasa',
    'index.cap.nlp.desc':        'Sistem yang faham BM, English, Manglish campur. Boleh tag email customer, classify complaint ikut jenis, summarize 1000 review jadi 5 ayat penting.',
    'index.cap.cv.title':        'Computer Vision',
    'index.cap.cv.desc':         'Kamera + AI untuk count barang masuk gudang, baca plat kereta masuk parking, detect packaging yang rosak. Tak payah staff duduk pandang screen 8 jam.',
    'index.cap.analytics.title': 'Predictive Analytics',
    'index.cap.analytics.desc':  'Bagi tahu apa yang mungkin jadi minggu depan. Stok berapa habis bila, customer mana akan churn, peak hour pukul berapa.',
    'index.cap.auto.title':      'Automasi Proses',
    'index.cap.auto.desc':       'Auto-generate invoice dari order WhatsApp. Auto-update Excel bila ada email order baru. Kerja yang ko ulang 50 kali sehari, biar machine buat.',
    'index.cap.sec.title':       'AI Audit',
    'index.cap.sec.desc':        'Ko dah pakai AI tool tapi tak puas hati? Kami audit. Tengok mana yang accuracy rendah, fix prompt yang weak, bagi documentation yang ko boleh handover.',

    'index.ben.label':   'Bila AI Berguna',
    'index.ben.title':   'Bila AI sebenarnya <span>jadi</span>',
    'index.ben.desc':    'AI bukan magic. Untuk certain jenis kerja je dia memang berbaloi. Ni contoh real.',
    'index.ben.1.title': 'Jimat Masa Kerja Repetitif',
    'index.ben.1.desc':  'Kerja yang ko buat ulang setiap hari (copy data, generate report, balas mesej standard) AI boleh handle. Staff ko fokus benda yang perlukan otak manusia.',
    'index.ben.2.title': 'Keputusan Tak Lambat',
    'index.ben.2.desc':  'Kalau ko kena tunggu Excel siap dulu setiap kali nak buat keputusan, ko dah ketinggalan. AI proses ribuan row dalam sesaat, ko tengok summary je.',
    'index.ben.3.title': 'Customer Tak Tunggu Lama',
    'index.ben.3.desc':  'Pelanggan WhatsApp tanya pukul 3 pagi pasal order, chatbot ko jawab terus. Yang rumit baru hand-off ke staff esok pagi.',
    'index.ben.4.title': 'Pesaing Ko Dah Start',
    'index.ben.4.desc':  'Kedai online sebelah dah pakai AI untuk recommend produk. Kalau ko tunggu lagi setahun dua, susah nak kejar bila gap dah jauh.',
    'index.ben.5.title': 'Scale Tanpa Tambah Staff',
    'index.ben.5.desc':  'Bila order 100 vs 10,000 sehari, sistem sama. Ko tak perlu hire 100 admin lagi. Tinggal jaga yang AI tak handle.',
    'index.ben.6.title': 'Plan Pakai Data, Bukan Tekaan',
    'index.ben.6.desc':  'Stok berapa banyak nak order bulan depan? Marketing budget keluar bila? Berdasarkan trend sebenar perniagaan ko, bukan gut feeling.',

    'index.approach.label': 'Pendekatan Kami',
    'index.approach.title': 'Dari <span>Strategi</span> ke Realiti Berskala',
    'index.approach.desc':  'Setiap penglibatan bermula dengan fasa penemuan menyeluruh di mana kami memetakan landskap data, matlamat perniagaan, dan sasaran ROI anda sebelum menulis satu baris kod.',
    'index.approach.li1':   'Penilaian kesediaan AI dan audit data penuh disertakan',
    'index.approach.li2':   'Penghantaran agile dalam sprint 2 minggu dengan ulasan pemegang kepentingan berterusan',
    'index.approach.li3':   'Aliran kerja manusia-dalam-gelung untuk domain keputusan berisiko tinggi',
    'index.approach.li4':   'Dokumentasi model yang komprehensif dan pemindahan pengetahuan penuh',
    'index.approach.btn':   'Temui Pasukan',

    'index.cta.title': 'Ada masalah <span>yang AI patut tolong?</span>',
    'index.cta.desc':  'Hantar mesej. Aku reply dalam 24 jam. Kalau AI bukan jawapannya, aku cakap terus.',
    'index.cta.btn1':  'Hantar mesej',
    'index.cta.btn2':  'Tengok harga dulu',

    /* ══════════════════════════════════════════════════
       ABOUT PAGE
    ══════════════════════════════════════════════════ */
    'about.hero.label': 'Kisah Kami',
    'about.hero.title': 'Pasukan Di Sebalik <span>AI Transformatif</span>',
    'about.hero.desc':  'Diasaskan oleh jurutera dan penyelidik yang meninggalkan makmal AI terkemuka untuk menjadikan kecerdasan buatan peringkat perusahaan mudah diakses, bertanggungjawab, dan benar-benar berimpak.',

    'about.mission.label': 'Misi Kami',
    'about.mission.title': 'Menjadikan AI Bekerja <span>Untuk Manusia</span>, Bukan Sebaliknya',
    'about.mission.btn':   'Bekerja Bersama Kami',

    'about.values.label':   'Apa Yang Mendorong Kami',
    'about.values.title':   'Nilai Teras <span>Kami</span>',
    'about.values.desc':    'Ini bukan poster di dinding. Ia adalah prinsip yang menentukan cara kami mengambil pekerja, projek yang kami terima, dan cara kami menangani situasi sukar bersama klien.',
    'about.val.1.title':    'Hasil Mengatasi Output',
    'about.val.2.title':    'Ketelusan Mutlak',
    'about.val.3.title':    'Inovasi Bertanggungjawab',
    'about.val.4.title':    'Perkongsian Sejati',
    'about.val.5.title':    'Kelajuan Tanpa Jalan Pintas',
    'about.val.6.title':    'Perspektif Global',

    'about.team.label': 'Kepimpinan',
    'about.team.title': 'Temui <span>Minda Di Sebalik</span> AI Solution',
    'about.team.desc':  'Pasukan kepimpinan kami menggabungkan dekad pengalaman dari institusi penyelidikan terkemuka, perunding global, dan syarikat teknologi berprestasi tinggi.',

    'about.timeline.label': 'Perjalanan Kami',
    'about.timeline.title': 'Dari Permulaan Senyap ke <span>Pemimpin AI Global</span>',
    'about.timeline.desc':  'Enam tahun pertumbuhan yang disengajakan, dibina di atas kepakaran teknikal mendalam dan komitmen teguh kepada hasil klien.',

    'about.culture.label': 'Kehidupan di AI Solution',
    'about.culture.title': 'Budaya Yang Dibina Atas <span>Rasa Ingin Tahu</span> &amp; Kemahiran',
    'about.culture.li1':   'Polisi masa 20% — setiap jurutera menggunakan satu hari seminggu untuk penyelidikan bebas',
    'about.culture.li2':   'Mesra kerja jarak jauh sepenuhnya dengan sidang pasukan bersemuka suku tahunan',
    'about.culture.li3':   'Ekuiti kompetitif, cuti tanpa had, dan sokongan kesihatan mental',
    'about.culture.li4':   'Lembaga semakan etika AI dalaman dengan keahlian bergilir',
    'about.culture.btn':   'Lihat Jawatan Kosong',

    'about.cta.title': 'Mari Bina Sesuatu Yang <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Luar Biasa Bersama</span>',
    'about.cta.desc':  'Sama ada anda syarikat permulaan peringkat awal atau perusahaan global, kami membawa keteguhan, rasa ingin tahu, dan komitmen yang sama untuk setiap penglibatan.',
    'about.cta.btn1':  'Hubungi Kami',
    'about.cta.btn2':  'Lihat Perkhidmatan',

    /* ══════════════════════════════════════════════════
       SERVICES PAGE
    ══════════════════════════════════════════════════ */
    'services.hero.label': 'Apa Yang Kami Lakukan',
    'services.hero.title': 'Perkhidmatan <span>AI Perusahaan</span><br>Dibina Untuk Skala',
    'services.hero.desc':  'Dari bukti konsep pertama anda hingga pelancaran pengeluaran global, portfolio perkhidmatan kami merangkumi setiap fasa perjalanan AI anda — dengan pakar yang telah melakukannya sebelum ini.',

    'services.port.label': 'Portfolio Penuh',
    'services.port.title': 'Enam Disiplin. <span>Satu Platform Bersepadu.</span>',
    'services.port.desc':  'Setiap perkhidmatan dihantar melalui Platform AI bersepadu kami, memberi anda satu paparan tunggal untuk pembangunan, penggunaan, pemantauan, dan tadbir urus.',
    'services.s1.title':   'Kejuruteraan Pembelajaran Mesin',
    'services.s2.title':   'Pemprosesan Bahasa Semula Jadi',
    'services.s3.title':   'Penyelesaian Penglihatan Komputer',
    'services.s4.title':   'Analitik Ramalan &amp; Preskriptif',
    'services.s5.title':   'Automasi Proses Pintar',
    'services.s6.title':   'Strategi &amp; Tadbir Urus AI',
    'services.card.link':  'Tanya tentang perkhidmatan ini',

    'services.ml.label': 'Pembelajaran Mesin',
    'services.ml.title': 'Model Yang <span>Bertambah Baik Sendiri</span>',
    'services.ml.desc':  'Saluran paip latihan semula automatik kami memantau prestasi model secara masa nyata dan mencetuskan latihan semula apabila sisihan dikesan — supaya model anda sentiasa tajam tanpa campur tangan manual.',
    'services.nlp.label': 'Pemprosesan Bahasa Semula Jadi',
    'services.nlp.title': 'AI Bahasa Yang <span>Memahami Konteks</span>',
    'services.nlp.desc':  'Kami melaraskan model bahasa besar pada data khusus domain anda, membolehkannya memahami terminologi, nada, dan keperluan pematuhan industri anda sejak mula.',

    'services.process.label': 'Cara Kami Bekerja',
    'services.process.title': 'Penghantaran Dalam <span>Empat Fasa</span>',
    'services.process.desc':  'Model penghantaran berstruktur dan berisiko rendah yang memastikan pemegang kepentingan sejajar dan meminimumkan kejutan — dari penemuan awal hingga pengoptimuman pasca-pelancaran.',
    'services.p1.title': 'Penemuan &amp; Audit',
    'services.p2.title': 'Reka Bentuk &amp; Prototaip',
    'services.p3.title': 'Bina &amp; Guna',
    'services.p4.title': 'Pantau &amp; Optimumkan',

    'services.cta.title': 'Ada Kes Penggunaan Dalam Fikiran?',
    'services.cta.desc':  'Kongsi cabaran anda dengan arkitek penyelesaian kami. Kami akan menggariskan pendekatan AI yang disesuaikan — percuma sepenuhnya, tanpa sebarang obligasi.',
    'services.cta.btn1':  'Bercakap Dengan Arkitek Penyelesaian',
    'services.cta.btn2':  'Lihat Harga',

    /* ══════════════════════════════════════════════════
       PRICING PAGE
    ══════════════════════════════════════════════════ */
    'pricing.hero.label': 'Pelan Harga',
    'pricing.hero.title': 'Harga Telus.<br><span>Tiada Kejutan.</span>',
    'pricing.hero.desc':  'Setiap pelan termasuk penilaian kesediaan AI pertama anda secara percuma. Batal bila-bila masa. Semua harga dalam RM dan dibilkan bulanan melainkan dipersetujui sebaliknya.',

    'pricing.plans.label': 'Pilih Pelan Anda',
    'pricing.plans.title': 'Pelan Yang Tepat Untuk <span>Setiap Peringkat</span>',
    'pricing.plans.desc':  'Sama ada anda mengesahkan kes penggunaan AI pertama anda atau menskalakan model kritikal secara global, kami mempunyai pelan yang direka untuk keperluan semasa anda — dan ruang untuk berkembang.',
    'pricing.tier.starter': 'Permulaan',
    'pricing.tier.pro':     'Profesional',
    'pricing.tier.ent':     'Perusahaan',
    'pricing.btn.starter':  'Mulakan',
    'pricing.btn.pro':      'Mulakan Profesional',
    'pricing.btn.ent':      'Hubungi Jualan',

    'pricing.addons.label': 'Tambahan',
    'pricing.addons.title': 'Perluas Mana-Mana Pelan Dengan <span>Tambahan Pilihan</span>',
    'pricing.addons.desc':  'Perlukan sesuatu yang khusus? Perpustakaan tambahan modular kami membolehkan anda menyesuaikan penglibatan dengan tepat tanpa membayar lebih untuk ciri yang tidak diperlukan.',
    'pricing.addon1.title': 'Bengkel Latihan AI',
    'pricing.addon2.title': 'Audit &amp; Pemeriksaan Kesihatan AI',
    'pricing.addon3.title': 'Penalaan Halus LLM Tersuai',

    'pricing.faq.label': 'Soalan Lazim',
    'pricing.faq.title': '<span>Soalan</span> Yang Kerap Ditanya',

    'pricing.cta.title': 'Tidak Pasti Pelan Yang Sesuai?',
    'pricing.cta.desc':  'Tempah panggilan 30 minit tanpa tekanan dengan arkitek penyelesaian. Kami akan memetakan kes penggunaan anda ke model penglibatan yang betul — dan memberitahu anda dengan jujur jika anda tidak memerlukan kami lagi.',
    'pricing.cta.btn1':  'Tempah Panggilan Percuma',
    'pricing.cta.btn2':  'Lihat Perkhidmatan',

    /* ══════════════════════════════════════════════════
       CONTACT PAGE
    ══════════════════════════════════════════════════ */
    'contact.hero.label': 'Hubungi Kami',
    'contact.hero.title': 'Mari Mulakan <span>Perbualan</span>',
    'contact.hero.desc':  'Sama ada anda bersedia untuk melancarkan projek AI pertama anda atau sekadar meneroka kemungkinan — kami ingin mendengar daripada anda. Pasukan kami membalas dalam masa satu hari bekerja.',

    'contact.info.label':    'Maklumat Hubungan',
    'contact.info.title':    'Kami <span>Sedia Membantu</span>',
    'contact.form.title':    'Hantar Mesej Kepada Kami',
    'contact.form.consent':  "Saya bersetuju dengan <a href='#' style='color:var(--primary)'>Dasar Privasi</a> AI Solution dan bersetuju untuk dihubungi mengenai pertanyaan saya.",
    'contact.form.submit':   'Hantar Mesej',
    'contact.form.success':  'Mesej dihantar! Kami akan menghubungi anda dalam masa satu hari bekerja.',

    'contact.process.label': 'Sebelum Anda Hantar',
    'contact.process.title': 'Apa Yang Berlaku <span>Seterusnya</span>',
    'contact.p1.title':      'Pengesahan',
    'contact.p2.title':      'Panggilan Penemuan',
    'contact.p3.title':      'Cadangan Disesuaikan',
    'contact.p4.title':      'Keputusan — Tanpa Tekanan',

    'contact.cta.title': 'Lebih Suka Berbual <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Sekarang?</span>',
    'contact.cta.desc':  'Tempah slot 30 minit terus dalam kalendar kami. Tiada emel berulang-alik — pilih masa yang sesuai dan kami akan berada di sana.',
    'contact.cta.btn1':  'Tempah Panggilan',
    'contact.cta.btn2':  'Lihat Harga Dahulu',
  }
};
