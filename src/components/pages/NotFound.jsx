import { useTranslation } from 'react-i18next';
import { FiArrowLeft } from 'react-icons/fi';
import PillLink from '../atoms/PillLink';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-svh bg-beton text-ink flex flex-col items-center justify-center text-center px-5">
      <h1 className="font-display font-normal text-[clamp(8rem,32vw,20rem)] leading-none">404</h1>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{t('404_title', 'Halaman ini tidak ada.')}</h2>
      <p className="mt-2 mb-7 max-w-md text-ink-soft">
        {t('404_subtitle', 'Mungkin link-nya salah, atau halamannya sudah pindah.')}
      </p>
      <PillLink href="/">
        <FiArrowLeft aria-hidden="true" className="w-3.5 h-3.5" /> {t('404_btn_home', 'Kembali ke awal')}
      </PillLink>
    </main>
  );
};

export default NotFound;
