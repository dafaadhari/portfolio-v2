import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_gallery: "Gallery",
      nav_contact: "Contact",
      hero_subtitle: "Junior Software Engineer",
      hero_description: "Informatics Engineering graduate with experience in developing web-based applications and decision support systems. Interested in software development, data-driven systems, and modern web technologies.",
      hero_button: "Resume",
      exp_title: "Experience",
      exp_subtitle: "My professional journey and technical growth.",  
      projects_title: "Featured Projects",
      gallery_title: "Creative Media & AI",
      gallery_subtitle: "Exploring visual aesthetics through AI generation and cinematic production.",
      contact_title: "Get In Touch",
        contact_subtitle: "Feel free to reach out for collaboration, project discussion, or job opportunities.",
      contact_label_name: "Name",
      contact_ph_name: "Your Name",
      contact_label_email: "Email",
      contact_ph_email: "your@email.com",
      contact_label_message: "Message",
      contact_ph_message: "How can I help you?",
      contact_btn_send: "Send Message",
      contact_btn_sending: "Sending...",
      contact_btn_success: "Message Sent!",
      contact_btn_error: "Failed to Send",
      contact_rights: "All rights reserved.",
      gallery_close: "Close",
      project_details_btn: "Technical Highlights",
      project_details_close: "Back",
      project_highlights_title: "Key Engineering Highlights",
      project_preview: "Preview",
      project_source: "Source Code",
      project_status_local: "Local Only",
      project_status_internal: "Internal",
      projects_filter_all: "All",
      stats_show_expertise: "Show Expertise Levels",
      stats_hide_expertise: "Hide Expertise Levels",
      stats_techstack_title: "Tech Stack & Tools",
      stats_github_title: "GitHub Activity",
      "404_title": "Lost in Space?",
      "404_subtitle": "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      "404_btn_home": "Back to Home"
    }
  },
  id: {
    translation: {
      nav_experience: "Pengalaman",
      nav_projects: "Proyek",
      nav_gallery: "Galeri",
      nav_contact: "Kontak",
      hero_subtitle: "Junior Software Engineer",
      hero_description: "Lulusan Teknik Informatika dengan pengalaman dalam mengembangkan aplikasi berbasis web dan sistem pendukung keputusan. Tertarik pada pengembangan perangkat lunak, sistem berbasis data, dan teknologi web modern.",
      hero_button: "Unduh CV",
      exp_title: "Pengalaman",
      exp_subtitle: "Perjalanan profesional dan perkembangan teknis saya.",
      projects_title: "Proyek Unggulan",
      gallery_title: "Media Kreatif & AI",
      gallery_subtitle: "Mengeksplorasi estetika visual melalui pemanfaatan AI dan produksi sinematik.",
      contact_title: "Hubungi Saya",
      contact_subtitle: "Jangan ragu untuk menghubungi saya terkait kolaborasi, diskusi proyek, atau peluang kerja.",
      contact_label_name: "Nama",
      contact_ph_name: "Nama Anda",
      contact_label_email: "Email",
      contact_ph_email: "email@anda.com",
      contact_label_message: "Pesan",
      contact_ph_message: "Apa yang bisa saya bantu?",
      contact_btn_send: "Kirim Pesan",
      contact_btn_sending: "Mengirim...",
      contact_btn_success: "Pesan Terkirim!",
      contact_btn_error: "Gagal Mengirim!",
      contact_rights: "Hak Cipta Dilindungi.",
      gallery_close: "Tutup",
      project_details_btn: "Highlight Teknis",
      project_details_close: "Kembali",
      project_highlights_title: "Pencapaian Rekayasa Utama",
      project_preview: "Pratinjau",
      project_source: "Kode Sumber",
      project_status_local: "Lokal Saja",
      project_status_internal: "Internal",
      projects_filter_all: "Semua",
      stats_show_expertise: "Tampilkan Tingkat Keahlian",
      stats_hide_expertise: "Sembunyikan Tingkat Keahlian",
      stats_techstack_title: "Tech Stack & Tools",
      stats_github_title: "Aktivitas GitHub",
      "404_title": "Tersesat di Luar Angkasa?",
      "404_subtitle": "Halaman yang Anda cari mungkin telah dihapus, berganti nama, atau sedang tidak tersedia.",
      "404_btn_home": "Kembali ke Beranda"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;