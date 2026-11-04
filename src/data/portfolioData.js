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

export const projectCategories = ['Full-Stack', 'Front-End'];

export const projects = [
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
    image: '/assets/images/qhse-demo.webp',
    liveUrl: 'https://siteguard-demo.vercel.app',
    status: 'live',
    credentials: 'Email: admin@siteguard.com | Pass: siteguard123',
    githubUrl: 'https://github.com/dafaadhari/qshe-inspection',
    highlights: {
      en: [
        'Handled requirements analysis, UML diagrams, database design, UI/UX, and implementation on my own.',
        'Four modules in one app, plus user management.',
        'Uses Supabase for auth, storage, and the database.',
      ],
      id: [
        'Analisis kebutuhan, diagram UML, rancangan database, UI/UX, dan implementasi saya kerjakan sendiri.',
        'Empat modul dalam satu aplikasi, ditambah manajemen user.',
        'Memakai Supabase untuk auth, storage, dan database.',
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
    numeral: { en: '2025', id: '2025' },
    period: { en: '2025', id: '2025' },
    mapLabel: { en: 'Videos & Android', id: 'Video & Android' },
    title: { en: 'Making videos, because people asked', id: 'Bikin video, karena ada yang minta' },
    paragraphs: {
      en: [
        "In mid-2025 I took on something a little different: branding materials and promotional videos for CV Rayyan Karya and Ahmad Jaya Group, followed by public health education videos with Puskesmas Mekarsari. It started because people asked, and to be honest, I enjoy videography a little and I can do it.",
        'For Rayyan Karya and Ahmad Jaya, I also built an Android app for monitoring their projects.',
        "Then in September 2025 I picked up aquascaping. Nobody asked me for this one. It's simply my hobby.",
      ],
      id: [
        'Pertengahan 2025 saya mengerjakan sesuatu yang agak berbeda: materi branding dan video promosi untuk CV Rayyan Karya dan Ahmad Jaya Group, lalu video edukasi kesehatan bersama Puskesmas Mekarsari. Awalnya karena memang ada permintaan, dan jujur saja, saya sedikit suka dan bisa videografi.',
        'Untuk Rayyan Karya dan Ahmad Jaya, saya juga membuat aplikasi Android untuk memantau proyek mereka.',
        'Lalu di September 2025 saya mulai main aquascape. Kalau yang ini tidak ada yang minta, murni hobi saya.',
      ],
    },
    projectIds: [],
    hasMedia: true,
  },
  {
    id: 'chapter-4',
    numeral: { en: '2026', id: '2026' },
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
    numeral: { en: '2026', id: '2026' },
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
        "In August 2026 I was accepted into MagangHub Cohort 2 Batch 1, so until February 2027 I'm interning at Rutan Kelas IIB Pandeglang, a detention center, as an Operations Service Operator. The work covers both hardware and software, though it's mostly hardware. On the software side, I'm building a web-based information system for the center on my own, and it will become my final project.",
        "My freelance work is still going, and I'm also looking for a full-time onsite job. If you have a role that might fit, or you just want to say hi, I'd love to hear from you.",
      ],
      id: [
        'Agustus 2026 saya lolos MagangHub Angkatan 2 Batch 1, jadi sampai Februari 2027 saya magang di Rutan Kelas IIB Pandeglang sebagai Operator Layanan Operasional. Kerjaannya mencakup hardware dan software, walaupun kebanyakan hardware. Untuk software, saya sedang mengerjakan sendiri sistem informasi berbasis web untuk rutan, yang nantinya jadi final project saya.',
        'Freelance saya masih jalan, dan saya juga masih mencari pekerjaan full-time onsite. Kalau kamu punya lowongan yang cocok atau sekadar ingin menyapa, saya senang sekali mendengarnya.',
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
    caption: { en: 'A promotional video, made with AI.', id: 'Video promosi, dibuat dengan AI.' },
    alt: { en: 'Promotional video', id: 'Video promosi' },
  },
  {
    id: 'branding',
    kind: 'photos',
    thumb: '/assets/images/gallery2.webp',
    images: ['/assets/images/gallery2.webp'],
    caption: {
      en: 'A construction visual for Rayyan Karya, made with AI.',
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
  { name: 'Kotlin' },
  { name: 'GitHub Actions' },
  { name: 'Figma' },
];
