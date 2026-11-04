import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night px-5 lg:px-10 py-8 border-t border-white/15">
      <p className="text-mist text-sm">
        &copy; {currentYear} {t('footer_name', 'Mochamad Dapa Adhari')}
      </p>
    </footer>
  );
};

export default Footer;
