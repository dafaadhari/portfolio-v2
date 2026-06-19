import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 backdrop-blur-xl bg-[#0B0F19]/20 border-white/5 shadow-lg' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative">
        
        {/* Logo */}
        <a href="#" className="text-white font-extrabold tracking-widest text-lg md:text-xl hover:opacity-80 transition-opacity">
          Dap<span className="text-blue-600">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#experience" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">{t('nav_experience', 'Experience')}</a>
          <a href="#projects" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">{t('nav_projects', 'Projects')}</a>
          <a href="#gallery" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">{t('nav_gallery', 'Gallery')}</a>
          <a href="#contact" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">{t('nav_about', 'About')}</a>
          
          {/* Language Switcher (Desktop) */}
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-bold tracking-widest transition-all duration-300 border border-gray-700 rounded-md hover:bg-white/10 text-white active:bg-white/20 active:scale-95"
          >
            {i18n.language === 'en' ? 'ID' : 'EN'}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          
          {/* Language Switcher (Mobile) */}
          <button 
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-xs font-bold tracking-widest transition-all duration-300 border border-gray-700 rounded-md hover:bg-white/10 text-white active:bg-white/20 active:scale-95"
            
          >
            {i18n.language === 'en' ? 'ID' : 'EN'}
          </button>

          {/* Hamburger Menu */}
          <button 
            className="text-white focus:outline-none p-1.5 rounded-md hover:bg-white/5 transition-colors active:bg-white/10 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="md:hidden absolute top-full right-6 mt-4 w-40 bg-[#121826] border border-white/10 rounded-xl py-4 px-5 flex flex-col gap-5 shadow-2xl origin-top-right"
          >
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-sm font-medium text-neutral-300 hover:text-white text-left">{t('nav_experience', 'Experience')}</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-sm font-medium text-neutral-300 hover:text-white text-left">{t('nav_projects', 'Projects')}</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-sm font-medium text-neutral-300 hover:text-white text-left">{t('nav_gallery', 'Gallery')}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-neutral-300 hover:text-white text-left">{t('nav_about', 'About')}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;