// src/data/portfolioData.js

export const projects = [
    {
        id: 1,
        title: "DOGMA Media Portal",
        description: "A dynamic web-based news and media portal developed independently for the DOGMA Community. Built with Laravel to handle content management, article publishing, and community engagement efficiently.",
        image: "/assets/images/dogma.png",
        liveUrl: "https://dogma.gt.tc/",
        status: "live",
        credentials: null
    },
    {
        id: 2,
        title: "Decision Support System",
        description: "Developed a web-based Decision Support System to evaluate and rank education personnel using the Simple Additive Weighting (SAW) method.",
        image: "/assets/images/dss.png",
        liveUrl: "https://spksaw.gt.tc",
        status: "live",
        credentials: "Email: review@gmail.com | Pass: review123"
    },
    {
        id: 3,
        title: "Super'Apps",
        description: "An employee performance management dashboard built using Next.js. Developed as part of a large-scale university ecosystem project during my internship period in 2024.",
        image: "/assets/images/superapps.png",
        liveUrl: "#",
        status: "internal",
        credentials: null
    },
    {
        id: 4,
        title: "StuntGuard",
        description: "A web-based system designed to monitor children's nutrition and detect potential stunting conditions. Provides data visualization and health indicators for early monitoring.",
        image: "/assets/images/stuntguard.jpg",
        liveUrl: "#",
        status: "local",
        credentials: null
    },
    
];

export const experiences = [
    {
        id: 1,
        period: "Nov 2025 - Present",
        role: "Admin, Ops & Finance",
        company: "CV RAYYAN KARYA",
        color: "blue", // Warna biru
        description: [
            "Mengoordinasikan tata kelola operasional perusahaan, termasuk manajemen administrasi digital, keuangan (penyusunan invoice), logistik, serta memastikan kelancaran alur kerja harian untuk penyediaan material konstruksi."
        ]
    },
    {
        id: 2,
        period: "Mar 2024 - Jan 2025",
        role: "Front-End Developer Intern",
        company: "LPPM UHAMKA",
        color: "purple", // Warna ungu
        description: [
            "Mengembangkan antarmuka web responsif menggunakan Next.js, JavaScript, Tailwind CSS, dan Ant Design.",
            "Mengonversi prototipe desain Figma menjadi komponen UI modular yang reusable.",
            "Berperan aktif dalam pengembangan proyek Super'Apps skala universitas, dengan fokus pada integrasi dan penayangan data dinamis dari API."
        ]
    },
    {
        id: 3,
        period: "Aug 2023 - Dec 2023",
        role: "Front-End Developer (Studi Independen)",
        company: "VOCASIA",
        color: "emerald", // Warna hijau
        description: [
            "Mengembangkan komponen UI berbasis React.js dan Tailwind CSS dengan implementasi arsitektur komponen.",
            "Melakukan fetching data API dan menyajikannya dalam format grafik interaktif untuk mempermudah analisis pengguna.",
            "Berkolaborasi secara agile dalam tim untuk mendeliver aplikasi web sebagai proyek akhir kelulusan program."
        ]
    }
];

export const galleryItems = [
    {
        id: 1,
        image: "/assets/images/gallery1.jpeg",
        category: "ENVIRONMENT VISUALIZATION",
        title: "Aquascape Concepts",
        description: "Aquascape themes Natural Style for nano tanks."
    },
    {
        id: 2,
        image: "/assets/images/gallery2.png",
        category: "BRANDING & IDENTITY",
        title: "Corporate Visuals",
        description: "Stylized imagery and branding materials designed to elevate business operations."
    },
    {
        id: 3,
        image: "/assets/images/gallery3.jpeg",
        category: "AI CINEMATIC VIDEO",
        title: "Promotional Assets",
        description: "High-quality video assets tailored for digital campaigns and promotional content."
    }
];