import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: "Hello, I am",
      role: "Junior Software Engineer",
      nav_home: "Home",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_gallery: "Gallery",
      nav_about: "About",
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
      contact_rights: "All rights reserved."
    }
  },
  id: {
    translation: {
      greeting: "Halo, saya",
      role: "Junior Software Engineer",
      nav_home: "Beranda",
      nav_experience: "Pengalaman",
      nav_projects: "Proyek",
      nav_gallery: "Galeri",
      nav_about: "Tentang",
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
      contact_rights: "Hak Cipta Dilindungi."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "id",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;