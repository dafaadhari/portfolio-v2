// src/data/portfolioData.js
// Story copy comes from the owner's own words and CV. Do not add events they did not state.

// Fields are either a plain string or an { en, id } pair.
export const localize = (value, lang) => (typeof value === 'string' ? value : value[lang]);

export const cvPath = (lang) =>
  lang === 'en'
    ? '/assets/docs/CV_MOCHAMAD DAPA ADHARI_EN.pdf'
    : '/assets/docs/CV_MOCHAMAD DAPA ADHARI_ID.pdf';

export const socialLinks = {
  github: 'https://github.com/dafaadhari',
  linkedin: 'https://www.linkedin.com/in/dafa-adhari/',
  instagram: 'https://www.instagram.com/mochdafaadhari/',
  email: 'mailto:dafaadhari01@gmail.com',
};

export const projects = [
  {
    id: 'qhse',
    chapterId: 'chapter-5',
    title: 'QHSE Super App',
    period: { en: 'Jun – Jul 2026', id: 'Jun – Jul 2026' },
    stack: 'React, Tailwind CSS, Supabase',
    description: {
      en: 'A QHSE web app for PT PP (Persero) Tbk with four modules: Inspection, Equipment Monitoring, Medical, and Passport. The demo version is called SiteGuard.',
      id: 'Aplikasi web QHSE untuk PT PP (Persero) Tbk dengan empat modul: Inspection, Monitoring Equipment, Medis, dan Passport. Versi demonya bernama SiteGuard.',
    },
    image: '/assets/images/qhse-demo.webp',
    liveUrl: 'https://siteguard-demo.vercel.app',
    status: 'live',
    credentials: 'Email: admin@siteguard.com | Pass: siteguard123',
    githubUrl: 'https://github.com/dafaadhari/qshe-inspection',
    highlights: {
      en: [
        'Requirements analysis, UML diagrams, database design, UI/UX, and implementation, all done by me.',
        'Four modules in one app, plus user management.',
        'Supabase for auth, storage, and the database.',
      ],
      id: [
        'Analisis kebutuhan, diagram UML, rancangan database, UI/UX, dan implementasi saya kerjakan sendiri.',
        'Empat modul dalam satu aplikasi, ditambah manajemen user.',
        'Supabase untuk auth, storage, dan database.',
      ],
    },
  },
  {
    id: 'dogma',
    chapterId: 'chapter-5',
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
        'Automatic deployment to InfinityFree through GitHub Actions.',
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
        'Calculates criteria weights and normalization.',
        'Produces the staff ranking automatically.',
      ],
      id: [
        'Menghitung pembobotan kriteria dan normalisasi.',
        'Menghasilkan peringkat staf secara otomatis.',
      ],
    },
  },
  {
    id: 'superapps',
    chapterId: 'chapter-2',
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
    title: 'StuntGuard',
    period: { en: 'Aug – Dec 2023', id: 'Agt – Des 2023' },
    stack: 'React, JavaScript, Tailwind CSS',
    description: {
      en: "A web app for tracking children's growth and nutrition from anthropometric data. My final project at Vocasia, built as a team.",
      id: 'Aplikasi web untuk memantau tumbuh kembang dan gizi anak dari data antropometri. Proyek akhir Studi Independen di Vocasia, dikerjakan bersama tim.',
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
    numeral: { en: '2021', id: '2021' },
    period: { en: '2021–2023', id: '2021–2023' },
    mapLabel: { en: 'The shock phase, then Vocasia', id: 'Fase kaget, lalu Vocasia' },
    title: { en: 'The shock phase', id: 'Fase kaget' },
    paragraphs: {
      en: [
        'Turns out most of Informatics Engineering is math, hehe. That was my first phase, the shock phase. Like it or not, I had to get through it.',
        "It took two years before I could say I was any good at it. That was 2023, during my Independent Study at Vocasia. There I worked on StuntGuard, a web app for tracking children's nutrition and growth. It was my first project with friends, and the first time I contributed directly to real work.",
      ],
      id: [
        'Ternyata isi kuliah Teknik Informatika kebanyakan matematika, hehe. Itu fase pertama saya, fase kaget. Mau tidak mau, suka tidak suka, harus saya jalani.',
        'Saya baru bisa dibilang bisa dua tahun kemudian, di 2023, waktu Studi Independen di Vocasia. Di sana saya mengerjakan StuntGuard, aplikasi web untuk memantau gizi dan tumbuh kembang anak. Itu proyek pertama saya bareng teman-teman, dan pertama kalinya saya berkontribusi langsung di pekerjaan yang riil.',
      ],
    },
    projectIds: ['stuntguard'],
  },
  {
    id: 'chapter-2',
    numeral: { en: '2024', id: '2024' },
    period: { en: '2024–2025', id: '2024–2025' },
    mapLabel: { en: 'LPPM and Komisariat', id: 'LPPM & Komisariat' },
    title: { en: 'An internship and an organization, at the same time', id: 'Magang sambil pegang organisasi' },
    paragraphs: {
      en: [
        'In March 2024 I started interning at LPPM UHAMKA, building the front end of the campus Super Apps. A month later I became Ketua Komisariat, the campus chapter chair of my organization, so for almost a year I was doing both.',
        "The first time I fell behind was during the organization's branch assembly and congress. I was out of the internship for almost 4-5 days. With permission, though.",
      ],
      id: [
        'Maret 2024 saya mulai magang di LPPM UHAMKA, mengerjakan tampilan Super Apps untuk kampus. Sebulan kemudian saya jadi Ketua Komisariat, jadi hampir setahun dua-duanya jalan bareng.',
        'Pertama kali keteteran itu waktu musyawarah cabang dan kongres organisasi. Hampir 4-5 hari saya tidak masuk magang. Izin kok.',
      ],
    },
    projectIds: ['superapps'],
  },
  {
    id: 'chapter-3',
    numeral: { en: '2025', id: '2025' },
    period: { en: '2025', id: '2025' },
    mapLabel: { en: 'Rayyan Karya and Puskesmas', id: 'Rayyan Karya & Puskesmas' },
    title: { en: 'Making videos, because people asked', id: 'Bikin video, karena ada permintaan' },
    paragraphs: {
      en: [
        'In mid-2025 I made branding materials and promotional videos for CV Rayyan Karya and Ahmad Jaya Group, then public health education videos with Puskesmas Mekarsari. I did them because people asked, and honestly I like videography a little, and I can do it.',
        'For Rayyan Karya and Ahmad Jaya I also built an Android app for project monitoring.',
        "In September 2025 I got into aquascaping. That one's a hobby. Nobody asked.",
      ],
      id: [
        'Pertengahan 2025 saya mengerjakan materi branding dan video promosi untuk CV Rayyan Karya dan Ahmad Jaya Group, lalu video edukasi kesehatan bersama Puskesmas Mekarsari. Saya kerjakan karena memang ada permintaan, dan sebenarnya saya sedikit suka dan bisa videografi.',
        'Masih untuk Rayyan Karya dan Ahmad Jaya, saya juga bikin aplikasi Android untuk monitoring proyek.',
        'September 2025 saya mulai main aquascape. Yang ini hobi, tidak ada yang minta.',
      ],
    },
    projectIds: [],
    hasMedia: true,
  },
  {
    id: 'chapter-4',
    numeral: { en: '2026', id: '2026' },
    period: { en: 'Early 2026', id: 'Awal 2026' },
    mapLabel: { en: 'My thesis, then graduation', id: 'Skripsi, lalu lulus' },
    title: { en: 'Math again', id: 'Matematika lagi' },
    paragraphs: {
      en: [
        'In January 2026 I was working on my thesis: a Decision Support System for BSDM UHAMKA, the campus HR department, to make staff performance reviews more objective. The method is Simple Additive Weighting: weighting criteria, normalizing, then ranking. Yes, math again.',
        'I graduated the following month.',
      ],
      id: [
        'Januari 2026 saya mengerjakan skripsi: Sistem Pendukung Keputusan untuk BSDM UHAMKA, supaya penilaian kinerja staf lebih objektif. Metodenya Simple Additive Weighting: pembobotan kriteria, normalisasi, lalu pemeringkatan. Iya, matematika lagi.',
        'Bulan berikutnya saya lulus.',
      ],
    },
    projectIds: ['spk'],
  },
  {
    id: 'chapter-5',
    numeral: { en: '2026', id: '2026' },
    period: { en: 'Mid 2026', id: 'Pertengahan 2026' },
    mapLabel: { en: 'DOGMA and PT PP', id: 'DOGMA & PT PP' },
    title: { en: 'Maybe this was meant to be', id: 'Mungkin ini jodohnya' },
    paragraphs: {
      en: [
        'Freelancing was circumstance, not a choice. Right after graduating, a friend offered me a project, and eventually I started thinking maybe this was meant to be, haha.',
        'From May to June I built the DOGMA news portal. From June to July, through the same friend, I built a QHSE app for PT PP with four modules: inspection, equipment monitoring, medical, and passport. From gathering requirements to the finished web app, I did it all myself.',
        'The hardest parts were the monitoring app, the medical app, and user management. I was learning back end for the first time and went straight into a real project, so you can imagine.',
      ],
      id: [
        'Freelance itu keadaan, bukan pilihan. Begitu lulus saya langsung dapat tawaran proyek dari teman, sampai akhirnya saya merasa mungkin ini jodohnya, haha.',
        'Mei sampai Juni saya mengerjakan portal berita DOGMA. Juni sampai Juli, lewat teman yang tadi, saya mengerjakan aplikasi QHSE untuk PT PP dengan empat modul: inspeksi, monitoring alat, medis, dan passport. Dari analisis kebutuhan sampai jadi aplikasi web, semuanya saya kerjakan sendiri.',
        'Yang paling bikin pusing itu app monitoring, app medis, dan manajemen user. Saya baru pertama kali belajar back end dan langsung dapat proyek riil, jadi terbayang kan.',
      ],
    },
    projectIds: ['qhse', 'dogma'],
  },
  {
    id: 'chapter-6',
    numeral: { en: 'Now', id: 'Sekarang' },
    period: { en: 'Now', id: 'Sekarang' },
    mapLabel: { en: 'Rutan Pandeglang', id: 'Rutan Pandeglang' },
    title: { en: 'Interning again, this time at a detention center', id: 'Magang lagi, kali ini di rutan' },
    paragraphs: {
      en: [
        "In August 2026 I was accepted into MagangHub Cohort 2 Batch 1, and until February 2027 I'm interning at Rutan Kelas IIB Pandeglang, a detention center, as an Operations Service Operator. The work covers hardware and software, but it's mostly hardware. On the software side, I'm building a web-based information system for the center on my own, which will be my final project.",
        "My freelance work is still going. Meanwhile, I'm still looking for a full-time onsite job. If you have something that fits, you can reach me below.",
      ],
      id: [
        'Agustus 2026 saya lolos MagangHub Angkatan 2 Batch 1, dan sampai Februari 2027 saya magang di Rutan Kelas IIB Pandeglang sebagai Operator Layanan Operasional. Kerjaannya hardware dan software, tapi kebanyakan hardware. Untuk software, saya sedang mengerjakan sendiri sistem informasi berbasis web untuk rutan, yang nanti jadi final project saya.',
        'Freelance masih jalan. Sambil itu, saya masih mencari pekerjaan full-time onsite. Kalau ada yang cocok, kontak saya di bawah.',
      ],
    },
    projectIds: [],
  },
];

export const mediaItems = [
  {
    id: 'aquascape',
    kind: 'photos',
    thumb: '/assets/images/galleryaquascape2.webp',
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
    thumb: '/assets/images/promo-video-poster.webp',
    videoUrl: '/assets/videos/aicinematic.mp4',
    caption: { en: 'Promotional video, made with AI.', id: 'Video promosi, dibuat dengan AI.' },
    alt: { en: 'Promotional video', id: 'Video promosi' },
  },
  {
    id: 'branding',
    kind: 'photos',
    thumb: '/assets/images/gallery2.webp',
    images: ['/assets/images/gallery2.webp'],
    caption: {
      en: 'Construction visual for Rayyan Karya, made with AI.',
      id: 'Visual konstruksi untuk Rayyan Karya, dibuat dengan AI.',
    },
    alt: {
      en: 'Two workers in hard hats reviewing a plan at a construction site',
      id: 'Dua pekerja berhelm membaca gambar kerja di lokasi konstruksi',
    },
  },
];

export const experiences = [
  {
    id: 'rutan',
    role: { en: 'Operations Service Operator (Intern)', id: 'Operator Layanan Operasional (Magang)' },
    org: 'Rutan Kelas IIB Pandeglang',
    period: { en: 'Aug 2026 – Feb 2027', id: 'Agt 2026 – Feb 2027' },
  },
  {
    id: 'freelance',
    role: 'Freelance Fullstack Developer',
    org: { en: 'Independent', id: 'Independen' },
    period: { en: 'Feb 2026 – Present', id: 'Feb 2026 – Sekarang' },
  },
  {
    id: 'komisariat',
    role: { en: 'Campus Chapter Chair (Ketua Komisariat)', id: 'Ketua Komisariat' },
    org: 'UHAMKA',
    period: 'Apr 2024 – Apr 2025',
  },
  {
    id: 'lppm',
    role: { en: 'Front-End Developer (Intern)', id: 'Front-End Developer (Magang)' },
    org: 'LPPM UHAMKA',
    period: 'Mar 2024 – Mar 2025',
  },
  {
    id: 'vocasia',
    role: { en: 'Front-End Developer (Independent Study)', id: 'Front-End Developer (Studi Independen)' },
    org: 'Vocasia',
    period: { en: 'Aug – Dec 2023', id: 'Agt – Des 2023' },
  },
  {
    id: 'uhamka',
    role: { en: 'Bachelor of Engineering, Informatics', id: 'Sarjana Teknik, Teknik Informatika' },
    org: 'UHAMKA',
    period: 'Sep 2021 – Feb 2026',
  },
];

// Only tools that appear in the projects and experience above.
export const tools = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'Ant Design',
  'Laravel',
  'PHP',
  'MySQL',
  'Supabase',
  'Kotlin',
  'Git',
  'GitHub Actions',
  'Figma',
];
