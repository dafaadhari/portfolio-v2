import { useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowDown } from 'react-icons/fi';
import InteractiveGrid from '../atoms/InteractiveGrid';
import PillLink from '../atoms/PillLink';
import { useIntro } from '../atoms/useIntro';
import { socialLinks } from '../../data/portfolioData';

const AFTER_INTRO = 'transition-opacity duration-500 intro-wait:opacity-0 intro-wait:pointer-events-none';
const PHOTO_EASE = [0.22, 1, 0.36, 1];

// --name is the font size that fits the name to the screen. The divisors are the width of
// "ADHARI" (2.666em, stacked) and "MOCH DAPA" (4.362em, two lines) in Anton, and the svh caps
// stop the name from taking over short screens.
// The section and h1 classes must match the static copy in index.html, which is what visitors
// see before this code loads. If they differ, the name jumps when React takes over.
const Hero = () => {
  const { t } = useTranslation();
  const { phase, skipped } = useIntro();
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [viewportHeight] = useState(() => window.innerHeight);
  const [startedInDone] = useState(phase === 'done');
  const reduceMotion = useReducedMotion();

  // The hero stays stuck while the first chapter slides over it.
  const { scrollY } = useScroll();
  const range = [0, viewportHeight];
  const nameY = useTransform(scrollY, range, [0, reduceMotion ? 0 : -50]);
  const photoY = useTransform(scrollY, range, [0, reduceMotion ? 0 : 70]);
  const dim = useTransform(scrollY, range, [0, reduceMotion ? 0 : 0.35]);

  // After the intro the photo still waits for its file, so on a slow connection it rises late
  // instead of popping in. Skipping shows it straight away.
  const showPhoto = startedInDone || skipped || (phase !== 'loading' && photoLoaded);

  const status = (
    <>
      <span aria-hidden="true" className="w-2 h-2 rounded-full bg-emerald-600" />
      {t('hero_status', 'Looking for a full-time onsite job')}
    </>
  );

  const startStory = (
    <>
      {t('hero_cta', 'Start the story')} <FiArrowDown aria-hidden="true" className="w-3.5 h-3.5" />
    </>
  );

  return (
    <section className="@container sticky top-0 z-0 h-svh overflow-hidden bg-beton text-ink [--name:min(calc((100cqw_-_2.5rem)/2.666),17svh)] lg:[--name:min(calc((100cqw_-_3.5rem)/4.362),34svh)]">
      <InteractiveGrid />

      {/* Role line (stacked layout) */}
      <p className={`lg:hidden absolute z-20 top-[4.25rem] inset-x-5 text-sm font-medium text-ink-soft ${AFTER_INTRO}`}>
        {t('hero_role', 'Fullstack Developer')}
      </p>

      <motion.h1
        style={{ y: nameY }}
        className="absolute z-[1] inset-x-0 top-[5.75rem] lg:top-[4.5rem] text-center font-display font-normal uppercase leading-[0.98] lg:whitespace-nowrap text-[length:var(--name)] will-change-transform"
      >
        <span className="block lg:inline">Moch</span>{' '}
        <span className="block lg:inline">Dapa</span>{' '}
        <span className="block">Adhari</span>
      </motion.h1>

      {/* The photo rises from below by moving, not fading, so it never replaces the name as the
          largest paint of the page. */}
      <motion.div
        initial={startedInDone ? false : { y: '110%' }}
        animate={{ y: showPhoto ? 0 : '110%' }}
        transition={{ duration: skipped ? 0.2 : 0.7, ease: PHOTO_EASE }}
        className="absolute z-10 bottom-0 left-1/2 -translate-x-[54%] aspect-square h-[70svh] lg:h-[78svh] [@media(max-height:480px)]:h-[50svh]"
      >
        <motion.img
          style={{ y: photoY }}
          src="/assets/images/profilebaru-cutout-1280.webp"
          srcSet="/assets/images/profilebaru-cutout-800.webp 800w, /assets/images/profilebaru-cutout-1280.webp 1280w"
          sizes="(min-width: 1024px) 78vh, 70vh"
          width="1280"
          height="1280"
          alt={t('hero_photo_alt', 'Photo of Dapa Adhari')}
          fetchPriority="high"
          decoding="async"
          onLoad={() => setPhotoLoaded(true)}
          onError={() => setPhotoLoaded(true)}
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      {/* Intro, wide screens */}
      <div className={`hidden lg:block absolute z-20 left-10 bottom-12 w-52 xl:w-64 ${AFTER_INTRO}`}>
        <p className="text-xl xl:text-2xl font-semibold tracking-tight mb-2.5">{t('hero_role', 'Fullstack Developer')}</p>
        <p className="text-[0.9375rem] leading-relaxed text-ink-soft mb-5">
          {t('hero_hook', 'Growing up, I did everything I could to avoid math. Then I signed up for Informatics Engineering.')}
        </p>
        <PillLink href="#story" variant="white">{startStory}</PillLink>
      </div>

      {/* Status and links, wide screens */}
      <div className={`hidden lg:flex absolute z-20 right-10 bottom-12 flex-col items-end gap-2.5 ${AFTER_INTRO}`}>
        <p className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-beton px-[1.125rem] py-2.5 text-[0.8125rem] font-medium">
          {status}
        </p>
        <PillLink href={socialLinks.github} external variant="outline" className="bg-beton [@media(max-height:600px)]:hidden">GitHub</PillLink>
        <PillLink href={socialLinks.linkedin} external variant="outline" className="bg-beton [@media(max-height:600px)]:hidden">LinkedIn</PillLink>
        <PillLink href={socialLinks.instagram} external variant="outline" className="bg-beton [@media(max-height:600px)]:hidden">Instagram</PillLink>
      </div>

      {/* Status and start link, stacked layout */}
      <div className={`lg:hidden absolute z-20 left-5 bottom-5 flex flex-col items-start gap-2 ${AFTER_INTRO}`}>
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-[1.125rem] py-2.5 text-[0.8125rem] font-medium [@media(max-height:480px)]:hidden">
          {status}
        </p>
        <PillLink href="#story">{startStory}</PillLink>
      </div>

      {/* Darkens the hero a little as the first chapter covers it. */}
      <motion.div aria-hidden="true" style={{ opacity: dim }} className="absolute inset-0 z-30 bg-ink pointer-events-none" />
    </section>
  );
};

export default Hero;
