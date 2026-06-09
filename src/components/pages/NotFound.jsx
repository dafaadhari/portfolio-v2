import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen w-screen bg-[#0B0F19] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Efek Cahaya Latar Belakang (Cyberpunk Glow) */}
      <div className="absolute w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] bottom-1/4 right-1/4 animate-pulse duration-4000"></div>

      {/* Animasi Angka 404 Besar Bergetar/Mengambang */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700 tracking-tighter select-none relative z-10"
      >
        404
      </motion.h1>

      {/* Ilustrasi Lingkaran Orbit Planet Minimalis */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-72 h-72 md:w-96 md:h-96 border border-white/5 rounded-full flex items-center justify-center"
      >
        <div className="w-3 h-3 bg-blue-500 rounded-full absolute -top-1.5 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
      </motion.div>

      {/* Teks Deskripsi */}
      <div className="relative z-10 max-w-md mt-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          {t('404_title', 'Lost in Space?')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-neutral-400 font-light mb-8 text-sm md:text-base leading-relaxed"
        >
          {t('404_subtitle', 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.')}
        </motion.p>

        {/* Tombol Kembali ke Rumah dengan Efek Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <a 
            href="/" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] group"
          >
            <svg 
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('404_btn_home', 'Back to Home')}
          </a>
        </motion.div>
      </div>

    </div>
  );
};

export default NotFound;