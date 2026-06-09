// src/data/portfolioData.js

export const projects = [
    {
        id: 1,
        title: "DOGMA Media Portal",
        category: "Full-Stack",
        description: {
            en: "A dynamic web-based news and media portal developed independently for the DOGMA Community. Built with Laravel to handle content management, article publishing, and community engagement efficiently.",
            id: "Portal berita dan media dinamis berbasis web yang dikembangkan secara mandiri untuk Komunitas DOGMA. Dibangun menggunakan Laravel untuk mengelola konten, publikasi artikel, dan interaksi komunitas secara efisien."
        },
        image: "/assets/images/dogma.png",
        liveUrl: "https://dogma.gt.tc/",
        status: "live",
        credentials: null,
        githubUrl: "https://github.com/dafaadhari/dogma-web"
    },
    {
        id: 2,
        title: "Decision Support System",
        category: "Full-Stack",
        description: {
            en: "Developed a web-based Decision Support System to evaluate and rank education personnel using the Simple Additive Weighting (SAW) method.",
            id: "Sistem Pendukung Keputusan (SPK) berbasis web untuk mengevaluasi dan memeringkat kinerja tenaga kependidikan menggunakan metode Simple Additive Weighting (SAW)."
        },
        image: "/assets/images/dss.png",
        liveUrl: "https://spksaw.gt.tc",
        status: "live",
        credentials: "Email: review@gmail.com | Pass: review123",
        githubUrl: "https://github.com/dafaadhari/spk-saw"
    },
    {
        id: 3,
        title: "Super'Apps",
        category: "Front-End",
        description: {
            en: "An employee performance management dashboard built using Next.js. Developed as part of a large-scale university ecosystem project during my internship period in 2024.",
            id: "Dasboard manajemen kinerja pegawai yang dibangun menggunakan Next.js. Dikembangkan sebagai bagian dari proyek ekosistem berskala universitas selama masa magang pada tahun 2024."
        },
        image: "/assets/images/superapps.png",
        liveUrl: "#",
        status: "internal",
        credentials: null,
        githubUrl: "https://github.com/LEMLIT/simakip-app"
    },
    {
        id: 4,
        title: "StuntGuard",
        category: "Front-End",
        description: {
            en: "A web-based system designed to monitor children's nutrition and detect potential stunting conditions. Provides data visualization and health indicators for early monitoring.",
            id: "Sistem berbasis web yang dirancang untuk memantau gizi anak dan mendeteksi potensi stunting. Dilengkapi dengan visualisasi data dan indikator kesehatan untuk pemantauan sejak dini."
        },
        image: "/assets/images/stuntguard.jpg",
        liveUrl: "https://stunt-guard-m44x.vercel.app/",
        status: "live",
        credentials: null,
        githubUrl: "https://github.com/dafaadhari/StuntGuard"
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
        image: "/assets/images/galleryaquascape.jpg",
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
        category: "AI CINEMATIC VIDEO",
        title: "Promotional Assets",
        description: {
            en: "High-quality video assets tailored for digital campaigns and promotional content.",
            id: "Aset video berkualitas tinggi untuk kebutuhan kampanye digital dan konten promosi."
        }
    }
];