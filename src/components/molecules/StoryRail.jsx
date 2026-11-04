import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { localize } from '../../data/portfolioData';

// Keeps the active-chapter state here, so scrolling only re-renders the rail, not the story text.
const StoryRail = ({ chapters, trackedChapters, lang }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveIndex(chapters.findIndex((chapter) => chapter.id === entry.target.id));
        });
      },
      // A thin band across the middle of the screen decides which chapter is being read.
      { rootMargin: '-45% 0px -50% 0px' }
    );

    trackedChapters.forEach((chapter) => {
      const element = document.getElementById(chapter.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [chapters, trackedChapters]);

  const active = chapters[activeIndex];

  return (
    <div className="hidden lg:flex sticky top-20 h-[calc(100svh-6rem)] flex-col justify-between pt-4">
      <div aria-hidden="true">
        <p className="text-[0.8125rem] font-medium">
          {t('chapter_of', { n: activeIndex + 1, total: chapters.length, defaultValue: 'Bab {{n}} dari {{total}}' })}
        </p>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={localize(active.numeral, lang)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="font-display text-[10rem] leading-[1.02] mt-1.5"
          >
            {localize(active.numeral, lang)}
          </motion.p>
        </AnimatePresence>
      </div>

      <nav aria-label={t('story_map', 'Peta cerita')} className="[@media(max-height:520px)]:hidden">
        <ol className="border-t border-ink/20 text-sm">
          {chapters.map((chapter, index) => (
            <li key={chapter.id} className="border-b border-ink/20">
              <a
                href={`#${chapter.id}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={`flex justify-between gap-4 py-2.5 hover:underline underline-offset-4 ${
                  index === activeIndex ? 'font-semibold text-ink' : 'text-ink-soft'
                }`}
              >
                <span>{localize(chapter.mapLabel, lang)}</span>
                <span className="font-normal whitespace-nowrap text-[0.8125rem]">{localize(chapter.period, lang)}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default StoryRail;
