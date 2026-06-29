// src/data/portfolioData.js

export const projects = [
    {
        id: 5,
        title: "QHSE Super App",
        category: "Full-Stack",
        frameworks: ["React JS", "Vite"],
        description: {
            en: "An integrated enterprise QHSE platform for construction operations, combining digital inspections, equipment monitoring, medical dashboards, and employee passport management in one centralized system.",
            id: "Platform enterprise QHSE terintegrasi untuk operasional konstruksi, menggabungkan inspeksi digital, monitoring alat, dashboard medis, dan manajemen QHSE Passport karyawan dalam satu sistem terpusat."
        },
        image: "/assets/images/qshe.png",
        liveUrl: "https://qshe-inspection-app.vercel.app",
        status: "live",
        credentials: null,
        githubUrl: "https://github.com/dafaadhari/qshe-inspection",
        highlights: {
            en: [
                "Built a super app architecture that unifies 4 QHSE modules: Inspection, Equipment Monitoring, Medical Dashboard, and QHSE Passport.",
                "Designed shared employee, role, and division data flows to reduce duplication across field inspection, medical, and equipment workflows.",
                "Implemented audit-ready reporting features with Excel/PDF export planning, mobile-first inspection forms, and Supabase-based auth, storage, and database integration."
            ],
            id: [
                "Membangun arsitektur super app yang menyatukan 4 modul QHSE: Inspection, Equipment Monitoring, Dashboard Medis, dan QHSE Passport.",
                "Merancang alur data karyawan, role, dan divisi yang terpusat untuk mengurangi duplikasi pada proses inspeksi lapangan, medis, dan monitoring alat.",
                "Mengembangkan fondasi pelaporan siap audit dengan export Excel/PDF, form inspeksi mobile-first, serta integrasi Supabase untuk auth, storage, dan database."
            ]
        }
    },
    {
        id: 1,
        title: "DOGMA Media Portal",
        category: "Full-Stack",
        framework: "Laravel",
        description: {
            en: "A dynamic web-based news and media portal developed independently for the DOGMA Community. Built with Laravel to handle content management, article publishing, and community engagement efficiently.",
            id: "Portal berita dan media dinamis berbasis web yang dikembangkan secara mandiri untuk Komunitas DOGMA. Dibangun menggunakan Laravel untuk mengelola konten, publikasi artikel, dan interaksi komunitas secara efisien."
        },
        image: "/assets/images/dogma.png",
        liveUrl: "https://dogma.gt.tc/",
        status: "live",
        credentials: null,
        githubUrl: "https://github.com/dafaadhari/dogma-web",
        highlights: {
            en: [
                "Architected a custom Content Management System (CMS) handling multi-role publishing workflows.",
                "Optimized database indexing and implemented query caching to minimize load times.",
                "Integrated real-time SEO indexing protocols for published articles."
            ],
            id: [
                "Merancang Content Management System (CMS) kustom untuk alur kerja publikasi multi-role.",
                "Mengoptimalkan indeks database dan mengimplementasikan query caching untuk meminimalkan waktu tunggu.",
                "Mengintegrasikan protokol pengindeksan SEO real-time untuk artikel yang dipublikasikan."
            ]
        }
    },
    {
        id: 2,
        title: "Decision Support System",
        category: "Full-Stack",
        framework: "Laravel",
        description: {
            en: "Developed a web-based Decision Support System to evaluate and rank education personnel using the Simple Additive Weighting (SAW) method.",
            id: "Sistem Pendukung Keputusan (SPK) berbasis web untuk mengevaluasi dan memeringkat kinerja tenaga kependidikan menggunakan metode Simple Additive Weighting (SAW)."
        },
        image: "/assets/images/dss.png",
        liveUrl: "https://spksaw.gt.tc",
        status: "live",
        credentials: "Email: review@gmail.com | Pass: review123",
        githubUrl: "https://github.com/dafaadhari/spk-saw",
        highlights: {
            en: [
                "Implemented the complete SAW mathematical model in PHP for real-time ranking calculation.",
                "Created responsive tables and score visualizations using raw Tailwind CSS animations.",
                "Secured authentication mechanisms and session security tokens for evaluation integrity."
            ],
            id: [
                "Mengimplementasikan model matematika SAW secara utuh menggunakan PHP untuk perhitungan peringkat real-time.",
                "Membangun visualisasi data skor dan tabel responsif menggunakan animasi Tailwind CSS.",
                "Mengamankan mekanisme autentikasi dan token sesi untuk menjaga integritas penilaian."
            ]
        }
    },
    {
        id: 3,
        title: "Super'Apps",
        category: "Front-End",
        framework: "Next JS",
        description: {
            en: "An employee performance management dashboard built using Next.js. Developed as part of a large-scale university ecosystem project during my internship period in 2024.",
            id: "Dasboard manajemen kinerja pegawai yang dibangun menggunakan Next.js. Dikembangkan sebagai bagian dari proyek ekosistem berskala universitas selama masa magang pada tahun 2024."
        },
        image: "/assets/images/superapps.png",
        liveUrl: "#",
        status: "internal",
        credentials: null,
        githubUrl: "https://github.com/LEMLIT/simakip-app",
        highlights: {
            en: [
                "Built and maintained atomic React components utilizing Ant Design standards and custom Tailwind styling.",
                "Optimized state management for complex performance matrices and nested employee evaluation data.",
                "Connected and handled multiple RESTful APIs for unified enterprise dashboards."
            ],
            id: [
                "Membangun dan memelihara komponen React berbasis arsitektur atom menggunakan standar Ant Design dan Tailwind CSS.",
                "Mengoptimalkan state management untuk matriks kinerja kompleks dan data penilaian bertingkat.",
                "Menghubungkan dan menangani berbagai RESTful API untuk menyajikan dashboard perusahaan yang terpadu."
            ]
        }
    },
    {
        id: 4,
        title: "StuntGuard",
        category: "Front-End",
        framework: "React JS",
        description: {
            en: "A web-based system designed to monitor children's nutrition and detect potential stunting conditions. Provides data visualization and health indicators for early monitoring.",
            id: "Sistem berbasis web yang dirancang untuk memantau gizi anak dan mendeteksi potensi stunting. Dilengkapi dengan visualisasi data dan indikator kesehatan untuk pemantauan sejak dini."
        },
        image: "/assets/images/stuntguard.jpg",
        liveUrl: "https://stunt-guard-m44x.vercel.app/",
        status: "live",
        credentials: null,
        githubUrl: "https://github.com/dafaadhari/StuntGuard",
        highlights: {
            en: [
                "Designed clear UI dashboards visualizing physiological parameters of children.",
                "Optimized build size and asset caching strategies to ensure high accessibility in remote areas.",
                "Implemented client-side calculations of health markers using international nutrition standards."
            ],
            id: [
                "Merancang antarmuka dashboard interaktif yang memvisualisasikan parameter fisiologis gizi anak.",
                "Mengoptimalkan ukuran build dan strategi caching aset untuk memastikan akses cepat di daerah terpencil.",
                "Mengembangkan algoritma kalkulasi indikator kesehatan client-side sesuai standar gizi internasional."
            ]
        }
    }
];


export const experiences = [
    {
        id: 1,
        period: {
            en: "Nov 2025 - Present",
            id: "Nov 2025 - Sekarang"
        },
        role: {
            en: "Admin, Ops & Finance",
            id: "Admin Operasional & Keuangan"
        },
        company: "CV RAYYAN KARYA",
        color: "blue",
        description: {
            en: [
                "Streamlined daily operational workflows, overseeing digital administration, financial management, and logistics to ensure an efficient supply chain for construction materials."
            ],
            id: [
                "Mengoordinasikan operasional harian perusahaan, mencakup administrasi digital, manajemen keuangan, hingga logistik. Bertanggung jawab memastikan kelancaran alur kerja untuk rantai pasokan material konstruksi."
            ]
        }
    },
    {
        id: 2,
        period: {
            en: "Mar 2024 - Jan 2025",
            id: "Mar 2024 - Jan 2025"
        },
        role: {
            en: "Front-End Developer Intern",
            id: "Magang Front-End Developer"
        },
        company: "LPPM UHAMKA",
        color: "purple",
        description: {
            en: [
                "Engineered responsive and interactive web interfaces utilizing Next.js, JavaScript, Tailwind CSS, and Ant Design.",
                "Translated high-fidelity Figma prototypes into modular, highly reusable UI components.",
                "Played a key role in developing the university-wide 'Super'Apps' ecosystem, focusing on seamless API integration and dynamic data rendering."
            ],
            id: [
                "Membangun antarmuka web yang responsif dan interaktif menggunakan Next.js, JavaScript, Tailwind CSS, serta Ant Design.",
                "Menerjemahkan rancangan antarmuka dari Figma menjadi komponen UI yang modular dan dapat digunakan kembali.",
                "Berkontribusi penuh dalam pengembangan ekosistem 'Super'Apps' tingkat universitas, dengan fokus utama pada integrasi API dan pengelolaan data dinamis."
            ]
        }
    },
    {
        id: 3,
        period: {
            en: "Aug 2023 - Dec 2023",
            id: "Agt 2023 - Des 2023"
        },
        role: {
            en: "Front-End Developer (Independent Study)",
            id: "Front-End Developer (Studi Independen)"
        },
        company: "VOCASIA",
        color: "emerald",
        description: {
            en: [
                "Architected and developed user interfaces using React.js and Tailwind CSS with a strong emphasis on component-driven design.",
                "Integrated RESTful APIs to transform complex data into interactive, user-friendly graphical visualizations.",
                "Collaborated within an Agile team to successfully deliver a comprehensive web application as the capstone project."
            ],
            id: [
                "Merancang dan mengembangkan antarmuka pengguna menggunakan React.js dan Tailwind CSS dengan pendekatan arsitektur berbasis komponen.",
                "Mengelola integrasi data dari API untuk divisualisasikan menjadi grafik interaktif yang memudahkan proses analisis pengguna.",
                "Bekerja sama dalam tim menggunakan metodologi Agile untuk merilis aplikasi web secara utuh sebagai proyek akhir kelulusan."
            ]
        }
    }
];

export const galleryItems = [
    {
        id: 1,
        image: "/assets/images/gallery1.jpg",
        // Multiple photos -> rendered as a horizontal accordion INSIDE the card.
        images: [
            "/assets/images/gallery1.jpg",
            "/assets/images/galleryaquascape1.jpeg",
            "/assets/images/galleryaquascape2.jpg",
        ],
        category: "ENVIRONMENT VISUALIZATION",
        title: "Aquascape Concepts",
        description: {
            en: "Aquascape themes Natural Style for nano tanks.",
            id: "Konsep aquascape bergaya Natural untuk akuarium berukuran nano."
        }
    },
    {
        id: 2,
        image: "/assets/images/gallery2.png",
        category: "BRANDING & IDENTITY",
        title: "Corporate Visuals",
        description: {
            en: "Stylized imagery and branding materials designed to elevate business operations.",
            id: "Visualisasi dan materi branding untuk meningkatkan citra operasional bisnis."
        }
    },
    {
        id: 3,
        image: "/assets/images/gallery3.jpeg",
        videoUrl: "/assets/videos/aicinematic.mp4",
        category: "AI CINEMATIC VIDEO",
        title: "Promotional Assets",
        description: {
            en: "High-quality video assets tailored for digital campaigns and promotional content.",
            id: "Aset video berkualitas tinggi untuk kebutuhan kampanye digital dan konten promosi."
        }
    }
];
