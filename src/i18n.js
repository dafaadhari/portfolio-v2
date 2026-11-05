import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'lang';

const resources = {
  en: {
    translation: {
      nav_story: "Story",
      nav_experience: "Experience",
      exp_title: "Experience",
      exp_subtitle: "Where I've worked, newest first.",
      exp_background: "Education and organization",
      nav_projects: "Projects",
      nav_gallery: "Gallery",
      nav_contact: "Contact",
      nav_menu: "Toggle menu",
      nav_lang_prefix: "Switch language to",
      cv_download: "Download CV",
      hero_role: "Fullstack Developer",
      hero_hook: "Growing up, I did everything I could to avoid math. Then I signed up for Informatics Engineering.",
      hero_status: "Looking for a full-time onsite job",
      hero_cta: "Start the story",
      hero_photo_alt: "Photo of Dapa Adhari",
      story_map: "Story map",
      chapter_of: "Chapter {{n}} of {{total}}",
      chapter_cta: "Get in touch",
      project_live: "View live",
      project_source: "Source code",
      project_internal: "Internal",
      project_details_btn: "Technical Highlights",
      project_details_close: "Back",
      project_highlights_title: "Technical Highlights",
      project_screenshot: "Screenshot of {{title}}",
      project_demo_account: "Demo account",
      project_screens_label: "App screens",
      media_strip_prev: "Scroll left",
      media_strip_next: "Scroll right",
      media_photos: "Photos",
      media_video: "Video",
      media_close: "Close",
      media_gallery: "Photo gallery",
      gallery_title: "Outside the Code",
      gallery_subtitle: "What I like to make when I'm not coding.",
      summary_title: "The quick version",
      summary_subtitle: "In a hurry? Here are my projects at a glance.",
      summary_projects: "Projects",
      summary_tools: "What I used in these projects",
      summary_read: "Read the story",
      github_title: "GitHub Activity",
      github_follow: "Follow & View",
      github_streak_alt: "GitHub contribution streak for @{{handle}}",
      github_streak_fallback: "See my activity on GitHub",
      projects_filter_all: "All",
      projects_filter_label: "Filter projects",
      contact_title: "Get In Touch",
      contact_subtitle: "Whether it's a job, a project, or just a quick hello, I'd be happy to hear from you.",
      contact_label_name: "Name",
      contact_ph_name: "Your name",
      contact_label_email: "Email",
      contact_ph_email: "your@email.com",
      contact_label_message: "Message",
      contact_ph_message: "Write your message here",
      contact_btn_send: "Send message",
      contact_btn_sending: "Sending...",
      contact_btn_success: "Message sent, thank you!",
      contact_btn_error: "Couldn't send it, please try again",
      contact_social_github: "GitHub",
      contact_social_linkedin: "LinkedIn",
      contact_social_email: "Email",
      contact_social_instagram: "Instagram",
      footer_name: "Mochamad Dapa Adhari",
      "404_title": "Oops, this page doesn't exist.",
      "404_subtitle": "The link may be wrong, or the page has moved. Let's get you back to the story.",
      "404_btn_home": "Back to the start"
    }
  },
  id: {
    translation: {
      nav_story: "Cerita",
      nav_experience: "Pengalaman",
      exp_title: "Pengalaman",
      exp_subtitle: "Tempat saya bekerja, dari yang terbaru.",
      exp_background: "Pendidikan dan organisasi",
      nav_projects: "Proyek",
      nav_gallery: "Galeri",
      nav_contact: "Kontak",
      nav_menu: "Buka atau tutup menu",
      nav_lang_prefix: "Ganti bahasa ke",
      cv_download: "Unduh CV",
      hero_role: "Fullstack Developer",
      hero_hook: "Dari SD sampai SMA, saya selalu berusaha menghindari matematika. Eh, begitu kuliah, saya malah masuk Teknik Informatika.",
      hero_status: "Mencari kerja full-time onsite",
      hero_cta: "Mulai ceritanya",
      hero_photo_alt: "Foto Dapa Adhari",
      story_map: "Peta cerita",
      chapter_of: "Bab {{n}} dari {{total}}",
      chapter_cta: "Hubungi saya",
      project_live: "Lihat langsung",
      project_source: "Kode sumber",
      project_internal: "Internal",
      project_details_btn: "Highlight Teknis",
      project_details_close: "Kembali",
      project_highlights_title: "Highlight Teknis",
      project_screenshot: "Tampilan {{title}}",
      project_demo_account: "Akun demo",
      project_screens_label: "Tampilan aplikasi",
      media_strip_prev: "Geser ke kiri",
      media_strip_next: "Geser ke kanan",
      media_photos: "Foto",
      media_video: "Video",
      media_close: "Tutup",
      media_gallery: "Galeri foto",
      gallery_title: "Di Luar Kode",
      gallery_subtitle: "Yang saya suka buat saat tidak sedang ngoding.",
      summary_title: "Versi singkatnya",
      summary_subtitle: "Lagi buru-buru? Ini daftar proyek saya.",
      summary_projects: "Proyek",
      summary_tools: "Yang saya pakai di proyek-proyek ini",
      summary_read: "Baca ceritanya",
      github_title: "Aktivitas GitHub",
      github_follow: "Ikuti & Lihat",
      github_streak_alt: "Streak kontribusi GitHub @{{handle}}",
      github_streak_fallback: "Lihat aktivitas saya di GitHub",
      projects_filter_all: "Semua",
      projects_filter_label: "Saring proyek",
      contact_title: "Yuk, ngobrol",
      contact_subtitle: "Soal lowongan, proyek, atau sekadar menyapa, saya senang dihubungi.",
      contact_label_name: "Nama",
      contact_ph_name: "Nama kamu",
      contact_label_email: "Email",
      contact_ph_email: "email@kamu.com",
      contact_label_message: "Pesan",
      contact_ph_message: "Tulis pesanmu di sini",
      contact_btn_send: "Kirim pesan",
      contact_btn_sending: "Mengirim...",
      contact_btn_success: "Pesan terkirim, terima kasih!",
      contact_btn_error: "Belum terkirim, coba lagi ya",
      contact_social_github: "GitHub",
      contact_social_linkedin: "LinkedIn",
      contact_social_email: "Email",
      contact_social_instagram: "Instagram",
      footer_name: "Mochamad Dapa Adhari",
      "404_title": "Waduh, halaman ini tidak ada.",
      "404_subtitle": "Mungkin link-nya salah, atau halamannya sudah pindah. Yuk, kembali ke ceritanya.",
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

// English unless the visitor already chose Indonesian.
const initialLanguage = readSavedLanguage() === 'id' ? 'id' : 'en';
document.documentElement.lang = initialLanguage;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language;
  saveLanguage(language);
});

export default i18n;
