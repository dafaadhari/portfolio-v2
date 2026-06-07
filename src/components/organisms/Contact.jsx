import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  const [statusKey, setStatusKey] = useState("contact_btn_send");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusKey("contact_btn_sending");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "51772b50-2bb2-4261-a569-79b304699acd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatusKey("contact_btn_success");
        e.target.reset(); 
        setTimeout(() => setStatusKey("contact_btn_send"), 3000);
      } else {
        console.error("Error:", data);
        setStatusKey("contact_btn_error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatusKey("contact_btn_error");
    }
  };

  return (
    <section id="contact" className="bg-[#0B0F19] py-32 text-center">
      <div data-aos="zoom-in" className="max-w-3xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {t('contact_title', 'Get In Touch')}
        </h2>
        <p className="text-neutral-400 mb-12 text-lg font-light max-w-lg mx-auto">
          {t('contact_subtitle', 'Feel free to reach out for collaboration, project discussion, or job opportunities.')}
        </p>
        
        {/* --- AREA FORMULIR KONTAK MULAI DI SINI --- */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left max-w-xl mx-auto mb-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-neutral-400">
              {t('contact_label_name', 'Name')}
            </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              placeholder={t('contact_ph_name', 'Your Name')}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-neutral-400">
              {t('contact_label_email', 'Email')}
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder={t('contact_ph_email', 'your@email.com')}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-neutral-400">
              {t('contact_label_message', 'Message')}
            </label>
            <textarea 
              name="message" 
              id="message" 
              required 
              rows="4"
              placeholder={t('contact_ph_message', 'How can I help you?')}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] mt-2"
          >
            {t(statusKey)}
          </button>
        </form>
        {/* --- AREA FORMULIR KONTAK SELESAI --- */}

        {/* SOSIAL MEDIA ICON */}
        <div className="flex justify-center gap-6 mb-20">
          <a href="https://github.com/dafaadhari" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 text-neutral-400 rounded-full flex items-center justify-center border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
            <FiGithub className="w-6 h-6" />
          </a>
          
          <a href="https://www.linkedin.com/in/dafa-adhari/" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 text-neutral-400 rounded-full flex items-center justify-center border border-white/10 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300">
            <FiLinkedin className="w-6 h-6" />
          </a>
          
          <a href="mailto:dafaadhari01@gmail.com" className="w-14 h-14 bg-white/5 text-neutral-400 rounded-full flex items-center justify-center border border-white/10 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
            <FiMail className="w-6 h-6" />
          </a>
          
          <a href="https://www.instagram.com/mochdafaadhari/" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 text-neutral-400 rounded-full flex items-center justify-center border border-white/10 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300">
            <FiInstagram className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;