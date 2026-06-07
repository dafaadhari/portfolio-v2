import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0B0F19] text-center py-10 border-t border-white/5">
      <p className="text-neutral-500 text-sm font-light tracking-wide">
        &copy; {currentYear} Mochamad Dapa Adhari. {t('contact_rights', 'All rights reserved.')}
      </p>
    </footer>
  );
};

export default Footer;