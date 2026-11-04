import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import PillLink from '../atoms/PillLink';
import { pillClass } from '../atoms/pillStyles';
import { chapters, projects, cvPath } from '../../data/portfolioData';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { i18n, t } = useTranslation();
  const otherLanguage = i18n.language === 'en' ? 'id' : 'en';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close the mobile menu on Escape or when clicking outside of it.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handlePointerDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen]);

  const links = [
    { href: '#story', label: t('nav_story', 'Cerita'), count: chapters.length },
    { href: '#projects', label: t('nav_projects', 'Proyek'), count: projects.length },
    { href: '#contact', label: t('nav_contact', 'Kontak') },
  ];

  const languageButton = (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(otherLanguage)}
      className={pillClass('outline')}
    >
      <span className="sr-only">{t('nav_lang_prefix', 'Ganti bahasa ke')} </span>
      {otherLanguage.toUpperCase()}
    </button>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${
      isScrolled ? 'bg-beton/90 backdrop-blur-md border-ink/10' : 'bg-transparent border-transparent'
    }`}>
      <div ref={menuRef} className="relative flex items-center justify-between gap-3 px-5 lg:px-10 h-[4.25rem] lg:h-20 text-ink">
        <a href="#" className="text-lg font-semibold tracking-wide">
          Dap.
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium hover:underline underline-offset-4">
              {link.label}
              {link.count && <span className="ml-1 text-xs text-ink-soft">[{link.count}]</span>}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          {languageButton}
          <PillLink href={cvPath(i18n.language)} download>
            {t('cv_download', 'Unduh CV')} <FiArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
          </PillLink>

          {/* Hamburger Menu */}
          <button
            type="button"
            className="lg:hidden p-1.5 rounded-md hover:bg-ink/5 active:bg-ink/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t('nav_menu', 'Buka atau tutup menu')}
            aria-expanded={isOpen}
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="lg:hidden absolute top-full right-5 mt-1 w-44 bg-white rounded-lg py-2 shadow-lg border border-ink/10"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-ink hover:bg-ink/5"
                >
                  {link.label}
                  {link.count && <span className="ml-1 text-xs text-ink-soft">[{link.count}]</span>}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
