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
    'index.hero.1':    'We Deliver',
    'index.hero.2':    'Intelligent Solutions',
    'index.hero.3':    'For Every Industry',
    'index.hero.desc': 'AI Solution partners with organisations to design, build, and deploy production-grade AI systems — from initial data strategy through to live model monitoring and continuous improvement.',
    'index.hero.btn1': 'Explore Services',
    'index.hero.btn2': 'Book a Demo',

    'index.cap.label': 'Core Capabilities',
    'index.cap.title': 'AI That <span>Thinks, Learns</span> &amp; Adapts',
    'index.cap.desc':  'From raw data pipelines to real-time decision engines, our full-stack AI portfolio covers every layer of your transformation journey.',
    'index.cap.ml.title':        'Machine Learning',
    'index.cap.ml.desc':         'Custom ML pipelines trained on your proprietary data — from tabular models to deep neural networks that improve with every transaction.',
    'index.cap.nlp.title':       'Natural Language Processing',
    'index.cap.nlp.desc':        'Turn unstructured text, voice, and documents into structured insights with enterprise NLP and large language model integrations.',
    'index.cap.cv.title':        'Computer Vision',
    'index.cap.cv.desc':         'Real-time image and video analysis for quality control, security surveillance, retail analytics, and autonomous inspection workflows.',
    'index.cap.analytics.title': 'Predictive Analytics',
    'index.cap.analytics.desc':  'Anticipate market shifts, equipment failures, and customer churn before they happen with probabilistic forecasting models.',
    'index.cap.auto.title':      'Process Automation',
    'index.cap.auto.desc':       'Intelligent RPA and agentic AI workflows that eliminate repetitive tasks and orchestrate complex multi-step business operations.',
    'index.cap.sec.title':       'AI Security &amp; Governance',
    'index.cap.sec.desc':        'Responsible AI frameworks, model explainability dashboards, and bias auditing tools that keep your AI compliant and trustworthy.',

    'index.ben.label':    'Why AI Matters',
    'index.ben.title':    'The Benefits of <span>AI Technology</span> For Your Business',
    'index.ben.desc':     'AI is more than technology — it is a strategic investment that delivers real returns for organisations ready to transform.',
    'index.ben.1.title':  'Save Time &amp; Operational Costs',
    'index.ben.1.desc':   'Automating repetitive tasks lets your team focus on high-value work. Companies using AI report operational cost savings of up to 40% within the first 12 months.',
    'index.ben.2.title':  'Faster &amp; More Accurate Decisions',
    'index.ben.2.desc':   'AI models process thousands of data points in seconds — detecting patterns humans cannot see and recommending the right action before problems occur.',
    'index.ben.3.title':  'Better Customer Experiences',
    'index.ben.3.desc':   'From intelligent chatbots to personalised product recommendations, AI makes every customer interaction feel relevant, instant, and satisfying — at any scale.',
    'index.ben.4.title':  'Competitive Advantage',
    'index.ben.4.desc':   'Your competitors are already adopting AI. Businesses that move first capture markets faster, operate more efficiently, and become increasingly difficult to displace.',
    'index.ben.5.title':  'Unlimited Scalability',
    'index.ben.5.desc':   'AI systems scale with your business without proportional headcount increases — from 100 to 10 million daily transactions on the same infrastructure.',
    'index.ben.6.title':  'Forecasting &amp; Strategic Planning',
    'index.ben.6.desc':   'Predictive AI helps you anticipate market demand, manage inventory precisely, and build business strategies grounded in real data — not assumptions.',

    'index.approach.label': 'Our Approach',
    'index.approach.title': 'From <span>Strategy</span> to Scaled Reality',
    'index.approach.desc':  'Every engagement begins with a thorough discovery phase where we map your data landscape, business goals, and ROI targets before writing a single line of code.',
    'index.approach.li1':   'AI readiness assessment and full data audit included',
    'index.approach.li2':   'Agile delivery in 2-week sprints with continuous stakeholder review',
    'index.approach.li3':   'Human-in-the-loop workflows for high-stakes decision domains',
    'index.approach.li4':   'Comprehensive model documentation and full knowledge transfer',
    'index.approach.btn':   'Meet the Team',

    'index.cta.title': 'Ready to Build <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Your AI Advantage?</span>',
    'index.cta.desc':  'Join 500+ enterprises that have accelerated growth, reduced costs, and unlocked new revenue streams with AI Solution.',
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
    'index.hero.1':    'Kami Menyampaikan',
    'index.hero.2':    'Penyelesaian Cerdas',
    'index.hero.3':    'Untuk Setiap Industri',
    'index.hero.desc': 'AI Solution bekerjasama dengan organisasi untuk mereka bentuk, membina, dan menggunakan sistem AI peringkat pengeluaran — dari strategi data awal hingga pemantauan model langsung dan penambahbaikan berterusan.',
    'index.hero.btn1': 'Lihat Perkhidmatan',
    'index.hero.btn2': 'Tempah Demo',

    'index.cap.label': 'Keupayaan Teras',
    'index.cap.title': 'AI Yang <span>Berfikir, Belajar</span> &amp; Beradaptasi',
    'index.cap.desc':  'Dari saluran paip data mentah hingga enjin keputusan masa nyata, portfolio AI kami mencakupi setiap lapisan perjalanan transformasi anda.',
    'index.cap.ml.title':        'Pembelajaran Mesin',
    'index.cap.ml.desc':         'Saluran paip ML tersuai yang dilatih dengan data proprietari anda — dari model tabular hingga rangkaian neural dalam yang bertambah baik dengan setiap transaksi.',
    'index.cap.nlp.title':       'Pemprosesan Bahasa Semula Jadi',
    'index.cap.nlp.desc':        'Tukarkan teks tidak berstruktur, suara, dan dokumen kepada pandangan berstruktur dengan NLP perusahaan dan integrasi model bahasa besar.',
    'index.cap.cv.title':        'Penglihatan Komputer',
    'index.cap.cv.desc':         'Analisis imej dan video masa nyata untuk kawalan kualiti, pengawasan keselamatan, analitik runcit, dan aliran kerja pemeriksaan autonomi.',
    'index.cap.analytics.title': 'Analitik Ramalan',
    'index.cap.analytics.desc':  'Jangkakan perubahan pasaran, kerosakan peralatan, dan kehilangan pelanggan sebelum berlaku dengan model ramalan kebarangkalian.',
    'index.cap.auto.title':      'Automasi Proses',
    'index.cap.auto.desc':       'RPA pintar dan aliran kerja AI agentik yang menghapuskan tugas berulang dan mengatur operasi perniagaan berbilang langkah yang kompleks.',
    'index.cap.sec.title':       'Keselamatan &amp; Tadbir Urus AI',
    'index.cap.sec.desc':        'Rangka kerja AI yang bertanggungjawab, papan pemuka kebolehjelasan model, dan alat pengauditan berat sebelah yang memastikan AI anda patuh dan boleh dipercayai.',

    'index.ben.label':   'Kepentingan AI',
    'index.ben.title':   'Kebaikan <span>Teknologi AI</span> Untuk Perniagaan Anda',
    'index.ben.desc':    'AI bukan sekadar teknologi — ia adalah pelaburan strategik yang memberi pulangan nyata kepada perniagaan yang bersedia untuk bertransformasi.',
    'index.ben.1.title': 'Jimat Masa &amp; Kos Operasi',
    'index.ben.1.desc':  'Automasi tugas berulang membolehkan pasukan anda fokus kepada kerja bernilai tinggi. Syarikat yang menggunakan AI melaporkan penjimatan kos operasi sehingga 40% dalam tempoh 12 bulan pertama.',
    'index.ben.2.title': 'Keputusan Lebih Tepat &amp; Pantas',
    'index.ben.2.desc':  'Model AI memproses ribuan data dalam sesaat — mengesan corak yang tidak dapat dilihat manusia dan memberikan cadangan tindakan yang tepat sebelum masalah berlaku.',
    'index.ben.3.title': 'Pengalaman Pelanggan Yang Lebih Baik',
    'index.ben.3.desc':  'Dari chatbot pintar hingga cadangan produk yang diperibadikan, AI membolehkan setiap interaksi pelanggan terasa relevan, segera, dan memuaskan — pada sebarang skala.',
    'index.ben.4.title': 'Keunggulan Daya Saing',
    'index.ben.4.desc':  'Pesaing anda sudah beralih kepada AI. Perniagaan yang mengadopsi AI lebih awal menguasai pasaran dengan lebih pantas, lebih efisien, dan sukar dikejar oleh pihak yang lambat bertindak balas.',
    'index.ben.5.title': 'Skalabiliti Tanpa Had',
    'index.ben.5.desc':  'Sistem AI boleh dibesarkan mengikut keperluan perniagaan tanpa perlu menambah sumber manusia secara berkadaran — daripada 100 kepada 10 juta transaksi sehari dengan infrastruktur yang sama.',
    'index.ben.6.title': 'Ramalan &amp; Perancangan Strategik',
    'index.ben.6.desc':  'AI analitik ramalan membantu anda menjangka permintaan pasaran, mengurus stok dengan tepat, dan merancang strategi perniagaan berdasarkan data sebenar — bukan andaian.',

    'index.approach.label': 'Pendekatan Kami',
    'index.approach.title': 'Dari <span>Strategi</span> ke Realiti Berskala',
    'index.approach.desc':  'Setiap penglibatan bermula dengan fasa penemuan menyeluruh di mana kami memetakan landskap data, matlamat perniagaan, dan sasaran ROI anda sebelum menulis satu baris kod.',
    'index.approach.li1':   'Penilaian kesediaan AI dan audit data penuh disertakan',
    'index.approach.li2':   'Penghantaran agile dalam sprint 2 minggu dengan ulasan pemegang kepentingan berterusan',
    'index.approach.li3':   'Aliran kerja manusia-dalam-gelung untuk domain keputusan berisiko tinggi',
    'index.approach.li4':   'Dokumentasi model yang komprehensif dan pemindahan pengetahuan penuh',
    'index.approach.btn':   'Temui Pasukan',

    'index.cta.title': 'Sedia Bina <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Kelebihan AI Anda?</span>',
    'index.cta.desc':  'Sertai 500+ perusahaan yang telah mempercepatkan pertumbuhan, mengurangkan kos, dan membuka aliran hasil baharu dengan AI Solution.',
    'index.cta.btn1':  'Mulai Perundingan Percuma',
    'index.cta.btn2':  'Lihat Pelan Harga',

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
