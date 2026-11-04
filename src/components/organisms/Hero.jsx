import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowDown } from 'react-icons/fi';
import PillLink from '../atoms/PillLink';
import { socialLinks } from '../../data/portfolioData';

// --name is the font size that fits the name to the viewport. The divisors are the width of
// "ADHARI" (2.666em, stacked layout) and "DAPA ADHARI" (4.822em, one line) in Anton.
// The svh caps stop the name from taking over short screens.
// The portrait height is derived from it so the hair always just overlaps the bottom of the name.
const Hero = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);

  const status = (
    <>
      <span aria-hidden="true" className="w-2 h-2 rounded-full bg-emerald-600" />
      {t('hero_status', 'Mencari kerja full-time onsite')}
    </>
  );

  const startStory = (
    <>
      {t('hero_cta', 'Mulai ceritanya')} <FiArrowDown aria-hidden="true" className="w-3.5 h-3.5" />
    </>
  );

  return (
    <section
      ref={sectionRef}
      className="@container relative h-svh overflow-hidden bg-beton text-ink [--name:min(calc((100cqw_-_2.5rem)/2.666),22svh)] lg:[--name:min(calc((100cqw_-_3.5rem)/4.822),36svh)]"
    >
      {/* Role line (stacked layout) */}
      <p className="lg:hidden absolute z-20 top-[4.25rem] inset-x-5 text-sm font-medium text-ink-soft">
        {t('hero_role', 'Fullstack Developer')}
      </p>

      {/* will-change gives the giant letters clean greyscale edges instead of colored subpixel fringes. */}
      <h1 className="absolute z-0 inset-x-0 top-[5.875rem] lg:top-[5.125rem] text-center font-display font-normal uppercase leading-[0.98] lg:leading-none lg:whitespace-nowrap text-[length:var(--name)] will-change-transform">
        <span className="sr-only">Moch </span>
        <span className="block lg:inline">Dapa</span>{' '}
        <span className="block lg:inline">Adhari</span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute z-10 bottom-0 left-1/2 -translate-x-[58%] lg:-translate-x-1/2 aspect-square h-[min(140cqw,calc(100svh_-_5.875rem_-_var(--name)*1.9_+_3rem))] lg:h-[calc(100svh_-_var(--name)*0.925)]"
      >
        <motion.img
          style={{ y: portraitY }}
          src="/assets/images/profilebaru-cutout-1280.webp"
          srcSet="/assets/images/profilebaru-cutout-800.webp 800w, /assets/images/profilebaru-cutout-1280.webp 1280w"
          sizes="(min-width: 1024px) 70vh, 140vw"
          width="1280"
          height="1280"
          alt={t('hero_photo_alt', 'Foto Dapa Adhari')}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      {/* Intro, one-line layout */}
      <div className="hidden lg:block absolute z-20 left-10 bottom-12 w-52 xl:w-72">
        <p className="text-xl xl:text-2xl font-semibold tracking-tight mb-2.5">{t('hero_role', 'Fullstack Developer')}</p>
        <p className="text-[0.9375rem] leading-relaxed text-ink-soft mb-5">
          {t('hero_hook', 'Dari SD sampai SMA saya menghindari matematika. Lalu saya masuk Teknik Informatika.')}
        </p>
        <PillLink href="#story" variant="white">{startStory}</PillLink>
      </div>

      {/* Status and links, one-line layout */}
      <div className="hidden lg:flex absolute z-20 right-10 bottom-12 flex-col items-end gap-2.5">
        <p className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-beton px-[1.125rem] py-2.5 text-[0.8125rem] font-medium">
          {status}
        </p>
        <PillLink href={socialLinks.github} external variant="outline" className="bg-beton [@media(max-height:600px)]:hidden">GitHub</PillLink>
        <PillLink href={socialLinks.linkedin} external variant="outline" className="bg-beton [@media(max-height:600px)]:hidden">LinkedIn</PillLink>
        <PillLink href={socialLinks.instagram} external variant="outline" className="bg-beton [@media(max-height:600px)]:hidden">Instagram</PillLink>
      </div>

      {/* Status and start link, stacked layout */}
      <div className="lg:hidden absolute z-20 left-5 bottom-5 flex flex-col items-start gap-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-[1.125rem] py-2.5 text-[0.8125rem] font-medium">
          {status}
        </p>
        <PillLink href="#story">{startStory}</PillLink>
      </div>
    </section>
  );
};

export default Hero;
