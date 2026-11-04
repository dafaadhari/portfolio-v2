import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'lang';

const resources = {
  en: {
    translation: {
      nav_story: "Story",
      nav_projects: "Projects",
      nav_contact: "Contact",
      nav_menu: "Toggle menu",
      nav_lang_prefix: "Switch language to",
      cv_download: "Download CV",
      hero_role: "Fullstack Developer",
      hero_hook: "From elementary school through high school, I avoided math. Then I enrolled in Informatics Engineering.",
      hero_status: "Looking for a full-time onsite job",
      hero_cta: "Start the story",
      hero_photo_alt: "Photo of Dapa Adhari",
      story_map: "Story map",
      chapter_of: "Chapter {{n}} of {{total}}",
      project_live: "View live",
      project_source: "Source code",
      project_internal: "Internal",
      project_details: "Technical details",
      project_screenshot: "Screenshot of {{title}}",
      project_demo_account: "Demo account",
      media_close: "Close",
      media_gallery: "Photo gallery",
      summary_kicker: "Appendix",
      summary_title: "The short version",
      summary_subtitle: "For when you don't have time to read it all.",
      summary_experience: "Experience and education",
      summary_projects: "Projects",
      summary_tools: "What I used in these projects",
      summary_read: "Read the story",
      contact_title: "Get in touch",
      contact_subtitle: "About a job, a project, or just to talk.",
      contact_label_name: "Name",
      contact_ph_name: "Your name",
      contact_label_email: "Email",
      contact_ph_email: "your@email.com",
      contact_label_message: "Message",
      contact_ph_message: "Write your message here",
      contact_btn_send: "Send message",
      contact_btn_sending: "Sending...",
      contact_btn_success: "Message sent!",
      contact_btn_error: "Failed to send",
      contact_social_github: "GitHub",
      contact_social_linkedin: "LinkedIn",
      contact_social_email: "Email",
      contact_social_instagram: "Instagram",
      footer_name: "Mochamad Dapa Adhari",
      "404_title": "This page doesn't exist.",
      "404_subtitle": "The link may be wrong, or the page has moved.",
      "404_btn_home": "Back to the start"
    }
  },
  id: {
    translation: {
      nav_story: "Cerita",
      nav_projects: "Proyek",
      nav_contact: "Kontak",
      nav_menu: "Buka atau tutup menu",
      nav_lang_prefix: "Ganti bahasa ke",
      cv_download: "Unduh CV",
      hero_role: "Fullstack Developer",
      hero_hook: "Dari SD sampai SMA saya menghindari matematika. Lalu saya masuk Teknik Informatika.",
      hero_status: "Mencari kerja full-time onsite",
      hero_cta: "Mulai ceritanya",
      hero_photo_alt: "Foto Dapa Adhari",
      story_map: "Peta cerita",
      chapter_of: "Bab {{n}} dari {{total}}",
      project_live: "Lihat langsung",
      project_source: "Kode sumber",
      project_internal: "Internal",
      project_details: "Detail teknis",
      project_screenshot: "Tampilan {{title}}",
      project_demo_account: "Akun demo",
      media_close: "Tutup",
      media_gallery: "Galeri foto",
      summary_kicker: "Lampiran",
      summary_title: "Versi singkatnya",
      summary_subtitle: "Buat yang tidak sempat baca semuanya.",
      summary_experience: "Pengalaman dan pendidikan",
      summary_projects: "Proyek",
      summary_tools: "Yang saya pakai di proyek-proyek ini",
      summary_read: "Baca ceritanya",
      contact_title: "Hubungi saya",
      contact_subtitle: "Soal lowongan, proyek, atau sekadar mau ngobrol.",
      contact_label_name: "Nama",
      contact_ph_name: "Nama Anda",
      contact_label_email: "Email",
      contact_ph_email: "email@anda.com",
      contact_label_message: "Pesan",
      contact_ph_message: "Tulis pesan Anda di sini",
      contact_btn_send: "Kirim pesan",
      contact_btn_sending: "Mengirim...",
      contact_btn_success: "Pesan terkirim!",
      contact_btn_error: "Gagal mengirim",
      contact_social_github: "GitHub",
      contact_social_linkedin: "LinkedIn",
      contact_social_email: "Email",
      contact_social_instagram: "Instagram",
      footer_name: "Mochamad Dapa Adhari",
      "404_title": "Halaman ini tidak ada.",
      "404_subtitle": "Mungkin link-nya salah, atau halamannya sudah pindah.",
      "404_btn_home": "Kembali ke awal"
    }
  }
};

// Storage can throw in private modes, and the site must still work without it.
const readSavedLanguage = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // The choice simply won't survive a reload.
  }
};

const initialLanguage = readSavedLanguage() === 'en' ? 'en' : 'id';
document.documentElement.lang = initialLanguage;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: "id",
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language;
  saveLanguage(language);
});

export default i18n;
