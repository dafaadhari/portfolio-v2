// src/data/portfolioData.js
// The story is built from the owner's own answers and CV, elaborated into friendly sentences.
// Do not add events, feelings, or lessons they did not state.

// Fields are either a plain string or an { en, id } pair.
export const localize = (value, lang) => (typeof value === 'string' ? value : value[lang]);

export const cvPath = (lang) =>
  lang === 'id'
    ? '/assets/docs/CV_MOCHAMAD DAPA ADHARI_ID.pdf'
    : '/assets/docs/CV_MOCHAMAD DAPA ADHARI_EN.pdf';

export const socialLinks = {
  github: 'https://github.com/dafaadhari',
  linkedin: 'https://www.linkedin.com/in/dafa-adhari/',
  instagram: 'https://www.instagram.com/mochdafaadhari/',
  email: 'mailto:dafaadhari01@gmail.com',
};

export const projectCategories = ['Full-Stack', 'Front-End', 'Mobile'];

// Has the same shape as a media item, so MediaLightbox can open a screen at full size.
const appScreen = (name, caption, alt) => ({
  id: name,
  kind: 'photos',
  images: [`/assets/images/construction-${name}.webp`],
  caption,
  alt,
});

// A desktop and phone collage from a web project's mockups. The card shows the smaller file,
// and the lightbox opens the larger one.
const webScreen = (project, name, caption, alt) => ({
  id: `${project}-${name}`,
  kind: 'photos',
  thumb: `/assets/images/${project}-${name}.webp`,
  images: [`/assets/images/${project}-${name}-lg.webp`],
  caption,
  alt,
});

const OVERVIEW = { en: 'Overview', id: 'Ringkasan' };

export const projects = [
  {
    id: 'rutan',
    chapterId: 'chapter-6',
    category: 'Full-Stack',
    title: 'Rutan Pandeglang Information System',
    period: { en: 'Sep 2026 – Present', id: 'Sep 2026 – Sekarang' },
    stack: 'Laravel, Blade, Tailwind CSS, MySQL',
    description: {
      en: "A public information portal for Rutan Kelas IIB Pandeglang that brings public services, news, and a panel for the PR team into one web app. It's now in the finishing stage.",
      id: 'Portal informasi publik untuk Rutan Kelas IIB Pandeglang yang menyatukan layanan publik, berita, dan panel humas dalam satu aplikasi web. Sekarang sudah masuk tahap finishing.',
    },
    image: '/assets/images/rutan-cover.webp',
    liveUrl: null,
    status: 'progress',
    credentials: null,
    githubUrl: 'https://github.com/dafaadhari/rutan-pdg',
    highlights: {
      en: [
        'Public service pages for visiting hours, item drop-offs, the integration program, and research permits.',
        'News and activities from the detention center.',
        'A PR panel for writing news, managing pages, and running announcement banners.',
        'Built on my own as the final project of my internship.',
      ],
      id: [
        'Halaman layanan publik untuk jadwal besuk, titipan barang, program integrasi, dan perizinan penelitian.',
        'Berita dan kegiatan dari rutan.',
        'Panel humas untuk menulis berita, mengelola halaman, dan menayangkan banner pengumuman.',
        'Saya kerjakan sendiri sebagai final project magang.',
      ],
    },
  },
  {
    id: 'btoday',
    chapterId: 'chapter-6',
    category: 'Full-Stack',
    title: 'B.Today Portal',
    period: { en: 'Sep – Oct 2026', id: 'Sep – Okt 2026' },
    stack: 'Laravel, Blade, Tailwind CSS, Alpine.js',
    description: {
      en: 'A news portal built for a company, with an editorial CMS, articles sent in by readers, and ad slots the newsroom manages itself.',
      id: 'Portal berita yang dibuat untuk sebuah perusahaan, lengkap dengan CMS redaksi, kiriman tulisan dari pembaca, dan slot iklan yang diatur sendiri oleh redaksi.',
    },
    image: null,
    screenShape: 'wide',
    screens: [
      webScreen('btoday', 'cover', OVERVIEW, {
        en: 'B.Today on a laptop and three phones',
        id: 'B.Today di laptop dan tiga ponsel',
      }),
      webScreen('btoday', 'home', { en: 'Home page', id: 'Beranda' }, {
        en: 'The B.Today home page with an ad banner and the headline story, on desktop and phone',
        id: 'Beranda B.Today dengan banner iklan dan berita utama, di desktop dan ponsel',
      }),
      webScreen('btoday', 'article', { en: 'Article page', id: 'Detail artikel' }, {
        en: 'An article page with share buttons and related stories, on desktop and phone',
        id: 'Halaman artikel dengan tombol berbagi dan berita terkait, di desktop dan ponsel',
      }),
      webScreen('btoday', 'dashboard', { en: 'Newsroom dashboard', id: 'Dasbor redaksi' }, {
        en: 'The newsroom dashboard with article, submission, and ad counts, on desktop and phone',
        id: 'Dasbor redaksi berisi jumlah artikel, kiriman, dan iklan, di desktop dan ponsel',
      }),
      webScreen('btoday', 'ads', { en: 'Ad slots', id: 'Slot iklan' }, {
        en: 'Ad slot management with placements, impressions, and clicks, on desktop and phone',
        id: 'Pengelolaan slot iklan berisi posisi, jumlah tayang, dan klik, di desktop dan ponsel',
      }),
    ],
    liveUrl: null,
    status: 'internal',
    credentials: null,
    githubUrl: 'https://github.com/dafaadhari/B.TODAY',
    highlights: {
      en: [
        'An editorial CMS for writing, editing, and approving articles, with drafts and review status.',
        "Readers can send in articles without an account, and once approved, they're published under the writer's byline.",
        'Ad slots for the leaderboard, sidebar, and in-article placements, with impression and click counts.',
        'Regional sub-categories, such as Cilegon, Lebak, Pandeglang, Serang, and Tangerang under Banten.',
      ],
      id: [
        'CMS redaksi untuk menulis, menyunting, dan menyetujui artikel, lengkap dengan draf dan status review.',
        'Pembaca bisa mengirim tulisan tanpa akun, dan setelah disetujui, tulisannya tayang dengan byline penulisnya.',
        'Slot iklan untuk posisi leaderboard, sidebar, dan dalam artikel, lengkap dengan jumlah tayang dan klik.',
        'Subkategori per wilayah, misalnya Cilegon, Lebak, Pandeglang, Serang, dan Tangerang di bawah Banten.',
      ],
    },
  },
  {
    id: 'qhse',
    chapterId: 'chapter-5',
    category: 'Full-Stack',
    title: 'QHSE Super App',
    period: { en: 'Jun – Jul 2026', id: 'Jun – Jul 2026' },
    stack: 'React, Tailwind CSS, Supabase',
    description: {
      en: 'A QHSE web app for PT PP (Persero) Tbk with four modules: Inspection, Equipment Monitoring, Medical, and Passport. The demo version is called SiteGuard.',
      id: 'Aplikasi web QHSE untuk PT PP (Persero) Tbk dengan empat modul: Inspection, Monitoring Equipment, Medis, dan Passport. Versi demonya bernama SiteGuard.',
    },
    image: null,
    screenShape: 'wide',
    // One page from each module, after the cover.
    screens: [
      webScreen('qhse', 'cover', OVERVIEW, {
        en: 'QHSE Super App on a laptop and three phones',
        id: 'QHSE Super App di laptop dan tiga ponsel',
      }),
      webScreen('qhse', 'dashboard', { en: 'Dashboard', id: 'Dasbor' }, {
        en: 'The dashboard with inspection, equipment, and clinic summaries, on desktop and phone',
        id: 'Dasbor berisi ringkasan inspeksi, alat, dan klinik, di desktop dan ponsel',
      }),
      webScreen('qhse', 'form-builder', 'Form Builder', {
        en: 'The Form Builder for creating inspection forms, on desktop and phone',
        id: 'Form Builder untuk membuat form inspeksi, di desktop dan ponsel',
      }),
      webScreen('qhse', 'heavy-equipment', { en: 'Heavy equipment', id: 'Alat berat' }, {
        en: 'The heavy equipment list with each unit’s status and permit expiry dates, on desktop and phone',
        id: 'Daftar alat berat berisi status tiap unit dan masa berlaku izinnya, di desktop dan ponsel',
      }),
      webScreen('qhse', 'fit-for-duty', 'Fit for duty', {
        en: 'Fit for duty checks with blood pressure, sleep, and work readiness, on desktop and phone',
        id: 'Pemeriksaan fit for duty berisi tekanan darah, jam tidur, dan kesiapan kerja, di desktop dan ponsel',
      }),
    ],
    liveUrl: 'https://siteguard-demo.vercel.app',
    status: 'live',
    credentials: 'Email: admin@siteguard.com | Pass: siteguard123',
    githubUrl: 'https://github.com/dafaadhari/qshe-inspection',
    highlights: {
      en: [
        'Handled requirements analysis, UML diagrams, database design, UI/UX, and implementation on my own.',
        'Four modules in one app, plus user management.',
        'Uses Supabase for auth, storage, and the database.',
        'Comes with light and dark mode.',
      ],
      id: [
        'Analisis kebutuhan, diagram UML, rancangan database, UI/UX, dan implementasi saya kerjakan sendiri.',
        'Empat modul dalam satu aplikasi, ditambah manajemen user.',
        'Memakai Supabase untuk auth, storage, dan database.',
        'Tersedia mode terang dan gelap.',
      ],
    },
  },
  {
    id: 'dogma',
    chapterId: 'chapter-5',
    category: 'Full-Stack',
    title: 'DOGMA Media Portal',
    period: { en: 'May – Jun 2026', id: 'Mei – Jun 2026' },
    stack: 'Laravel, Git, GitHub Actions',
    description: {
      en: 'A news and media portal for the DOGMA community.',
      id: 'Portal berita dan media untuk komunitas DOGMA.',
    },
    image: '/assets/images/dogma.webp',
    liveUrl: 'https://dogma.gt.tc/',
    status: 'live',
    credentials: null,
    githubUrl: 'https://github.com/dafaadhari/dogma-web',
    highlights: {
      en: [
        'Role-based access for Super Admin and Author.',
        'Every article gets its own title and image when its link is shared on social media, using dynamic Open Graph and Twitter meta tags.',
        'Deploys automatically to InfinityFree through GitHub Actions.',
      ],
      id: [
        'Hak akses berbasis peran untuk Super Admin dan Author.',
        'Setiap artikel punya judul dan gambar sendiri saat link-nya dibagikan di media sosial, lewat meta tag Open Graph dan Twitter yang dinamis.',
        'Deployment otomatis ke InfinityFree lewat GitHub Actions.',
      ],
    },
  },
  {
    id: 'spk',
    chapterId: 'chapter-4',
    category: 'Full-Stack',
    title: 'Decision Support System',
    period: { en: 'Jan 2026', id: 'Jan 2026' },
    stack: 'Laravel, PHP, MySQL, Tailwind CSS',
    description: {
      en: 'My thesis: a web system that helps BSDM UHAMKA evaluate staff performance using Simple Additive Weighting.',
      id: 'Skripsi saya: sistem web yang membantu BSDM UHAMKA mengevaluasi kinerja staf dengan metode Simple Additive Weighting.',
    },
    image: '/assets/images/dss.webp',
    liveUrl: 'https://spksaw.gt.tc',
    status: 'live',
    credentials: 'Email: review@gmail.com | Pass: review123',
    githubUrl: 'https://github.com/dafaadhari/spk-saw',
    highlights: {
      en: [
        'Calculates criteria weights and normalizes the values.',
        'Produces the staff ranking automatically.',
      ],
      id: [
        'Menghitung pembobotan kriteria dan normalisasi.',
        'Menghasilkan peringkat staf secara otomatis.',
      ],
    },
  },
  {
    id: 'construction',
    chapterId: 'chapter-3',
    category: 'Mobile',
    title: 'Construction App',
    period: { en: 'Jun 2025 – Dec 2026', id: 'Jun 2025 – Des 2026' },
    stack: 'Kotlin, Jetpack Compose',
    description: {
      en: 'An Android app for running the logistics of construction projects at Rayyan Karya: keeping track of projects, recording material deliveries, and billing clients, with delivery notes and invoices ready to print as PDFs.',
      id: 'Aplikasi Android untuk mengurus logistik proyek konstruksi di Rayyan Karya: memantau proyek, mencatat pengiriman material, dan menagih klien, lengkap dengan surat jalan dan invoice yang siap dicetak sebagai PDF.',
    },
    image: null,
    screens: [
      appScreen(
        'dashboard',
        { en: 'Dashboard', id: 'Dasbor' },
        {
          en: 'Dashboard with active projects, pending deliveries, and remaining billing',
          id: 'Dasbor berisi proyek aktif, pengiriman tertunda, dan sisa penagihan',
        }
      ),
      appScreen(
        'delivery-log',
        { en: 'Delivery log', id: 'Log surat jalan' },
        {
          en: 'List of delivery notes with their material, driver, and status',
          id: 'Daftar surat jalan berisi material, sopir, dan statusnya',
        }
      ),
      appScreen(
        'delivery-form',
        { en: 'New delivery note', id: 'Buat surat jalan' },
        {
          en: 'Form for a new delivery note, with project, material, volume, driver, and photo proof',
          id: 'Form surat jalan baru berisi proyek, material, volume, sopir, dan foto bukti',
        }
      ),
      appScreen(
        'delivery-note',
        { en: 'Delivery note PDF', id: 'PDF surat jalan' },
        { en: 'Print preview of a delivery note', id: 'Pratinjau cetak surat jalan' }
      ),
      appScreen(
        'billing',
        { en: 'Billing per project', id: 'Penagihan per proyek' },
        {
          en: 'Billing page with the contract value, materials sent, payments, and amount left to bill for each project',
          id: 'Halaman penagihan berisi nilai kontrak, material terkirim, pembayaran, dan sisa tagihan tiap proyek',
        }
      ),
      appScreen(
        'payment',
        { en: 'Recording a payment', id: 'Catat pembayaran' },
        { en: 'Form for recording a client payment', id: 'Form pencatatan pembayaran klien' }
      ),
      appScreen(
        'invoice',
        { en: 'Invoice PDF', id: 'PDF invoice' },
        { en: 'Print preview of an invoice', id: 'Pratinjau cetak invoice' }
      ),
    ],
    liveUrl: null,
    status: 'internal',
    credentials: null,
    githubUrl: null,
    highlights: {
      en: [
        'Native Android app built with Kotlin and Jetpack Compose, using the MVVM architecture.',
        'Data is stored locally on the device, so field records can still be saved without a connection.',
        'Four modules: Dashboard, Logistics & Delivery Notes, Invoice Creator, and Billing & Finance.',
        "Invoices are calculated automatically per term or down payment, with the amount written out in words and the Director's stamp and signature.",
        'Delivery notes signed by Administration and invoices can both be printed as PDFs.',
        'Tracks outstanding receivables per project and records client payments.',
      ],
      id: [
        'Aplikasi Android native dengan Kotlin dan Jetpack Compose, memakai arsitektur MVVM.',
        'Data disimpan lokal di perangkat, jadi pencatatan di lapangan tetap jalan walau tidak ada koneksi.',
        'Empat modul: Dasbor, Logistik & Surat Jalan, Invoice Creator, serta Tagihan & Keuangan.',
        'Invoice dihitung otomatis per termin atau DP, lengkap dengan teks terbilang serta stempel dan tanda tangan Direktur.',
        'Surat jalan bertanda tangan Administrasi dan invoice bisa langsung dicetak sebagai PDF.',
        'Memantau piutang per proyek dan mencatat pembayaran klien.',
      ],
    },
  },
  {
    id: 'superapps',
    chapterId: 'chapter-2',
    category: 'Front-End',
    title: 'Super Apps',
    period: { en: 'Mar 2024 – Mar 2025', id: 'Mar 2024 – Mar 2025' },
    stack: 'Next.js, React, Tailwind CSS, Ant Design',
    description: {
      en: 'Front-end modules for the university digital ecosystem: SIMPEG, SIAKAD, and SIMAKIP.',
      id: 'Modul front-end untuk ekosistem digital kampus: SIMPEG, SIAKAD, dan SIMAKIP.',
    },
    image: '/assets/images/superapps.webp',
    liveUrl: null,
    status: 'internal',
    credentials: null,
    githubUrl: 'https://github.com/LEMLIT/simakip-app',
    highlights: {
      en: [
        'Monitoring for daily staff activity, performance charts, and reporting on performance metrics.',
        'Reusable UI components built from Figma designs.',
        'API integration for dynamic data.',
      ],
      id: [
        'Monitoring aktivitas harian staf, visualisasi performa, dan pelaporan metrik kinerja.',
        'Komponen UI yang bisa dipakai ulang, dibuat dari desain Figma.',
        'Integrasi API untuk data dinamis.',
      ],
    },
  },
  {
    id: 'stuntguard',
    chapterId: 'chapter-1',
    category: 'Front-End',
    title: 'StuntGuard',
    period: { en: 'Aug – Dec 2023', id: 'Agt – Des 2023' },
    stack: 'React, JavaScript, Tailwind CSS',
    description: {
      en: "A web app for tracking children's growth and nutrition from anthropometric data. It was the team's final project at Vocasia.",
      id: 'Aplikasi web untuk memantau tumbuh kembang dan gizi anak dari data antropometri. Ini proyek akhir tim kami di Studi Independen Vocasia.',
    },
    image: '/assets/images/stuntguard-home.webp',
    liveUrl: 'https://stunt-guard-m44x.vercel.app/',
    status: 'live',
    credentials: null,
    githubUrl: 'https://github.com/dafaadhari/StuntGuard',
    highlights: {
      en: [
        'Interactive charts and visual indicators for early stunting detection.',
        'Designed so people without a medical background can use it.',
      ],
      id: [
        'Grafik interaktif dan indikator visual untuk deteksi dini stunting.',
        'Dibuat supaya mudah dipakai orang tanpa latar belakang medis.',
      ],
    },
  },
];

export const chapters = [
  {
    id: 'chapter-1',
    number: 1,
    numeral: { en: '2021', id: '2021' },
    period: { en: '2021–2023', id: '2021–2023' },
    mapLabel: { en: 'The shock phase', id: 'Fase kaget' },
    title: { en: 'The shock phase', id: 'Fase kaget' },
    paragraphs: {
      en: [
        'I started college in 2021, and you can probably guess what most of Informatics Engineering turned out to be: math, and lots of it, hehe. I call this my shock phase. Like it or not, I had to keep going.',
        "It took about two years of learning before I could honestly say I was getting the hang of it. That moment came in 2023, during my Independent Study at Vocasia, where I worked with friends on StuntGuard, a web app that helps track children's nutrition and growth. It was my first project with friends, and the first time I got to contribute directly to real work.",
      ],
      id: [
        'Tahun 2021 saya mulai kuliah, dan bisa ditebak, isi Teknik Informatika ternyata kebanyakan matematika, hehe. Saya menyebutnya fase kaget. Suka atau tidak, tetap harus dijalani.',
        'Butuh sekitar dua tahun belajar sampai saya berani bilang, oke, sekarang saya bisa. Itu terjadi di 2023, waktu ikut Studi Independen di Vocasia. Di sana saya bersama teman-teman mengerjakan StuntGuard, aplikasi web untuk memantau gizi dan tumbuh kembang anak. Itu proyek pertama saya bareng teman, sekaligus pertama kalinya saya berkontribusi langsung di pekerjaan yang nyata.',
      ],
    },
    projectIds: ['stuntguard'],
  },
  {
    id: 'chapter-2',
    number: 2,
    numeral: { en: '2024', id: '2024' },
    period: { en: '2024–2025', id: '2024–2025' },
    mapLabel: { en: 'LPPM & Komisariat', id: 'LPPM & Komisariat' },
    title: { en: 'Interning while leading an organization', id: 'Magang sambil memimpin organisasi' },
    paragraphs: {
      en: [
        'In March 2024 I started an internship at LPPM UHAMKA, where I built the front end of the campus Super Apps. A month later I also became Ketua Komisariat, the campus chapter chair of my organization, so for almost a year I was juggling both.',
        'The first time I really struggled to keep up was when the organization held its branch assembly and congress. I had to take almost 4-5 days off from the internship, with permission, to run them.',
      ],
      id: [
        'Maret 2024 saya mulai magang di LPPM UHAMKA, mengerjakan tampilan Super Apps untuk kampus. Sebulan kemudian saya juga menjadi Ketua Komisariat, jadi hampir setahun saya menjalani keduanya sekaligus.',
        'Saya pertama kali keteteran waktu organisasi mengadakan musyawarah cabang dan kongres. Hampir 4-5 hari saya harus izin dari magang untuk melaksanakannya.',
      ],
    },
    projectIds: ['superapps'],
  },
  {
    id: 'chapter-3',
    number: 3,
    numeral: { en: '2025', id: '2025' },
    period: { en: '2025', id: '2025' },
    mapLabel: { en: 'Videos & Android', id: 'Video & Android' },
    title: { en: 'Making videos, because people asked', id: 'Bikin video, karena ada yang minta' },
    paragraphs: {
      en: [
        "In mid-2025 I took on something a little different: branding materials and promotional videos for CV Rayyan Karya and Ahmad Jaya Group, followed by public health education videos with Puskesmas Mekarsari. It started because people asked, and to be honest, I enjoy videography a little and I can do it.",
        "For Rayyan Karya and Ahmad Jaya, I also built an Android app to help run the logistics of their construction projects. It records material deliveries to each site, works out what's left to bill, and prints delivery notes and invoices as PDFs. Since the signal on a site can be unreliable, records are saved right on the phone, so work doesn't stop when the connection drops.",
      ],
      id: [
        'Pertengahan 2025 saya mengerjakan sesuatu yang agak berbeda: materi branding dan video promosi untuk CV Rayyan Karya dan Ahmad Jaya Group, lalu video edukasi kesehatan bersama Puskesmas Mekarsari. Awalnya karena memang ada permintaan, dan jujur saja, saya sedikit suka dan bisa videografi.',
        'Untuk Rayyan Karya dan Ahmad Jaya, saya juga membuat aplikasi Android untuk mengurus logistik proyek konstruksi mereka. Aplikasinya mencatat pengiriman material ke tiap lokasi, menghitung sisa tagihan, dan mencetak surat jalan serta invoice sebagai PDF. Karena sinyal di lokasi proyek tidak selalu bagus, datanya disimpan langsung di HP, jadi pencatatan tetap jalan walau koneksi putus.',
      ],
    },
    projectIds: ['construction'],
  },
  {
    id: 'chapter-4',
    number: 4,
    numeral: { en: '2026', id: '2026' },
    numeralTag: { en: 'Early', id: 'Awal' },
    period: { en: 'Early 2026', id: 'Awal 2026' },
    mapLabel: { en: 'My thesis', id: 'Skripsi' },
    title: { en: 'Math, again', id: 'Ketemu matematika lagi' },
    paragraphs: {
      en: [
        'Remember the math I spent years avoiding? It came back for my thesis. In January 2026 I was working on a Decision Support System for BSDM UHAMKA, the campus HR department, to make staff performance reviews more objective. The method, Simple Additive Weighting, is all about weighting criteria, normalizing values, and ranking the results. So yes, math again.',
        'A month later, I graduated.',
      ],
      id: [
        'Ingat matematika yang dulu saya hindari? Ternyata dia muncul lagi di skripsi saya. Januari 2026 saya mengerjakan Sistem Pendukung Keputusan untuk BSDM UHAMKA, supaya penilaian kinerja staf lebih objektif. Metodenya Simple Additive Weighting, yang isinya pembobotan kriteria, normalisasi, lalu pemeringkatan. Jadi ya, matematika lagi.',
        'Sebulan kemudian, saya lulus.',
      ],
    },
    projectIds: ['spk'],
  },
  {
    id: 'chapter-5',
    // Continues chapter 4 on its own panel, so it doesn't repeat the giant year.
    number: 4,
    isPart: true,
    numeral: { en: 'Mid', id: 'Pertengahan' },
    period: { en: 'Mid 2026', id: 'Pertengahan 2026' },
    mapLabel: { en: 'DOGMA & PT PP', id: 'DOGMA & PT PP' },
    title: { en: 'Maybe this was meant to be', id: 'Mungkin ini jodohnya' },
    paragraphs: {
      en: [
        'Honestly, freelancing wasn\'t the plan. Right after I graduated, a friend offered me a project, and eventually I started to think maybe this was meant to be, haha.',
        'From May to June I built the DOGMA news portal. Then from June to July, through that same friend, I built a QHSE app for PT PP with four modules: inspection, equipment monitoring, medical, and passport. I handled everything myself, from gathering requirements to the finished web app.',
        'The hardest parts were the monitoring app, the medical app, and user management. I had only just started learning back end, and there I was working on a real project, so you can imagine.',
      ],
      id: [
        'Jujur, freelance awalnya bukan rencana saya. Begitu lulus, seorang teman langsung menawarkan proyek, sampai akhirnya saya merasa mungkin memang ini jodohnya, haha.',
        'Mei sampai Juni saya mengerjakan portal berita DOGMA. Lalu Juni sampai Juli, lewat teman yang sama, saya mengerjakan aplikasi QHSE untuk PT PP dengan empat modul: inspeksi, monitoring alat, medis, dan passport. Semuanya saya tangani sendiri, dari analisis kebutuhan sampai jadi aplikasi web.',
        'Yang paling bikin pusing itu app monitoring, app medis, dan manajemen user. Saya baru pertama kali belajar back end dan langsung dapat proyek sungguhan, jadi terbayang kan.',
      ],
    },
    // In the order the story tells them. QHSE's card is also the taller one, so it stacks neatly in front.
    projectIds: ['dogma', 'qhse'],
  },
  {
    id: 'chapter-6',
    number: 5,
    numeral: { en: 'Now', id: 'Sekarang' },
    period: { en: 'Now', id: 'Sekarang' },
    mapLabel: { en: 'Rutan & B.Today', id: 'Rutan & B.Today' },
    title: { en: 'Interning again, this time at a detention center', id: 'Magang lagi, kali ini di rutan' },
    paragraphs: {
      en: [
        "In August 2026 I was accepted into MagangHub Cohort 2 Batch 1, so until February 2027 I'm interning at Rutan Kelas IIB Pandeglang, a detention center, as an IT Operator. The work covers both hardware and software, though it's mostly hardware. On the software side, since September I've been building a web-based information system for the center on my own. It will become my final project, and it's now in the finishing stage.",
        "My freelance work is still going too. From September to October I built B.Today, another news portal, but this time for a company. I'm also still looking for a full-time onsite job. If you have a role that might fit, or you just want to say hi, I'd love to hear from you.",
      ],
      id: [
        'Agustus 2026 saya lolos MagangHub Angkatan 2 Batch 1, jadi sampai Februari 2027 saya magang di Rutan Kelas IIB Pandeglang sebagai IT Operator. Kerjaannya mencakup hardware dan software, walaupun kebanyakan hardware. Untuk software, sejak September saya mengerjakan sendiri sistem informasi berbasis web untuk rutan. Nantinya ini jadi final project saya, dan sekarang sudah masuk tahap finishing.',
        'Freelance saya juga masih jalan. September sampai Oktober saya membuat B.Today, portal berita lagi, tapi kali ini memang untuk perusahaan. Saya juga masih mencari pekerjaan full-time onsite. Kalau kamu punya lowongan yang cocok atau sekadar ingin menyapa, saya senang sekali mendengarnya.',
      ],
    },
    projectIds: ['rutan', 'btoday'],
  },
];

export const chapterCount = new Set(chapters.map((chapter) => chapter.number)).size;

export const mediaItems = [
  {
    id: 'aquascape',
    kind: 'photos',
    title: 'Aquascape',
    description: {
      en: "My own aquascape, a Natural Style layout in a 25 cm cube tank. Nobody asked me for this one, it's simply my hobby.",
      id: 'Aquascape buatan saya sendiri, bergaya Natural di tank kubus 25 cm. Kalau yang ini tidak ada yang minta, murni hobi saya.',
    },
    tag: { en: 'Since September 2025', id: 'Sejak September 2025' },
    thumbs: [
      '/assets/images/aquascape-thumb-1.webp',
      '/assets/images/aquascape-thumb-2.webp',
      '/assets/images/aquascape-thumb-3.webp',
    ],
    images: [
      '/assets/images/galleryaquascape2.webp',
      '/assets/images/galleryaquascape1.webp',
      '/assets/images/gallery1.webp',
    ],
    caption: { en: 'My aquascape.', id: 'Aquascape saya.' },
    alt: {
      en: 'An aquarium with driftwood, stones, and a betta fish under a small lamp',
      id: 'Akuarium berisi kayu, batu, dan ikan cupang di bawah lampu kecil',
    },
  },
  {
    id: 'promo-video',
    kind: 'video',
    title: { en: 'AI Promo Video', id: 'Video Promosi AI' },
    description: {
      en: "A short cinematic promo video made with Google's Veo AI in Gemini, for a distributor and contractor of lightweight steel, ceilings, roof tiles, and other building materials.",
      id: 'Video promosi sinematik singkat yang dibuat dengan Veo AI dari Google Gemini, tentang distributor dan kontraktor baja ringan, plafon, atap genteng, dan material bangunan lainnya.',
    },
    tag: 'Veo AI, Google Gemini',
    thumb: '/assets/images/promo-video-poster.webp',
    videoUrl: '/assets/videos/aicinematic.mp4',
    caption: { en: 'A promo video made with Veo AI.', id: 'Video promosi yang dibuat dengan Veo AI.' },
    alt: { en: 'Play the promo video', id: 'Putar video promosi' },
  },
];

// Work comes first, since it's what most visitors look for here. The story covers the details.
export const experiences = [
  {
    id: 'rutan',
    current: true,
    role: { en: 'IT Operator (Intern)', id: 'IT Operator (Magang)' },
    org: 'Rutan Kelas IIB Pandeglang',
    period: { en: 'Aug 2026 – Feb 2027', id: 'Agt 2026 – Feb 2027' },
    description: {
      en: [
        'Maintain and repair office IT hardware, including printers, CCTV monitors, and network devices.',
        'Develop internal web apps and portals with PHP, Laravel, and Blade.',
      ],
      id: [
        'Memelihara dan memperbaiki perangkat IT kantor, termasuk printer, monitor CCTV, dan jaringan.',
        'Mengembangkan aplikasi dan portal web internal dengan PHP, Laravel, dan Blade.',
      ],
    },
  },
  {
    id: 'freelance',
    current: true,
    role: 'Freelance Fullstack Developer',
    org: { en: 'Independent', id: 'Independen' },
    period: { en: 'Feb 2026 – Present', id: 'Feb 2026 – Sekarang' },
    description: {
      en: [
        'Build custom web apps for clients with React, Next.js, Laravel, and Supabase.',
        'Work directly with clients, from analyzing their needs to maintaining the finished system.',
      ],
      id: [
        'Membuat aplikasi web kustom untuk klien dengan React, Next.js, Laravel, dan Supabase.',
        'Bekerja langsung dengan klien, dari menganalisis kebutuhan sampai memelihara sistemnya.',
      ],
    },
  },
  {
    id: 'lppm',
    role: { en: 'Front-End Developer (Intern)', id: 'Front-End Developer (Magang)' },
    org: 'LPPM UHAMKA',
    period: 'Mar 2024 – Mar 2025',
    description: {
      en: [
        'Built responsive interfaces with Next.js, Tailwind CSS, and Ant Design.',
        'Turned Figma designs into reusable components and connected them to APIs for the campus Super Apps.',
      ],
      id: [
        'Membangun antarmuka responsif dengan Next.js, Tailwind CSS, dan Ant Design.',
        'Mengubah desain Figma menjadi komponen yang bisa dipakai ulang dan menghubungkannya ke API untuk Super Apps kampus.',
      ],
    },
  },
  {
    id: 'vocasia',
    role: { en: 'Front-End Developer (Independent Study)', id: 'Front-End Developer (Studi Independen)' },
    org: 'Vocasia',
    period: { en: 'Aug – Dec 2023', id: 'Agt – Des 2023' },
    description: {
      en: [
        'Built web interfaces with React and Tailwind CSS in an Agile team.',
        'Turned API data into interactive charts with Chart.js.',
      ],
      id: [
        'Membangun antarmuka web dengan React dan Tailwind CSS dalam tim Agile.',
        'Mengubah data API menjadi grafik interaktif dengan Chart.js.',
      ],
    },
  },
];

export const background = [
  {
    id: 'uhamka',
    role: { en: 'Bachelor of Engineering, Informatics', id: 'Sarjana Teknik, Teknik Informatika' },
    org: { en: 'UHAMKA · GPA 3.39 / 4.00', id: 'UHAMKA · IPK 3.39 / 4.00' },
    period: 'Sep 2021 – Feb 2026',
  },
  {
    id: 'komisariat',
    role: { en: 'Campus Chapter Chair (Ketua Komisariat)', id: 'Ketua Komisariat' },
    org: 'IMALA',
    period: 'Apr 2024 – Apr 2025',
  },
];

// Only tools that appear in the projects and experience above.
export const tools = [
  { name: 'React', logo: '/assets/logos/react.svg' },
  { name: 'Next.js', logo: '/assets/logos/nextjs.svg' },
  { name: 'JavaScript', logo: '/assets/logos/javascript.svg' },
  { name: 'Tailwind CSS', logo: '/assets/logos/tailwindcss.svg' },
  { name: 'Laravel', logo: '/assets/logos/laravel.svg' },
  { name: 'PHP', logo: '/assets/logos/php.svg' },
  { name: 'MySQL', logo: '/assets/logos/mysql.svg' },
  { name: 'Git', logo: '/assets/logos/git.svg' },
  { name: 'Ant Design' },
  { name: 'Supabase' },
  { name: 'Alpine.js' },
  { name: 'Kotlin' },
  { name: 'Jetpack Compose' },
  { name: 'GitHub Actions' },
  { name: 'Figma' },
];
