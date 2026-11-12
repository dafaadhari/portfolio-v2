import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { chapterCount, localize } from '../../data/portfolioData';

// Holds the active chapter here, so scrolling only re-renders this bar, not the story text.
const StoryMap = ({ chapters, lang, containerRef }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  // The bar sits on the top edge of the story, so it fades in as that edge reaches the navbar.
  const { scrollYProgress: arrival } = useScroll({ target: containerRef, offset: ['start 25%', 'start start'] });
  const pointerEvents = useTransform(arrival, (value) => (value > 0.5 ? 'auto' : 'none'));

  useEffect(() => {
    // Stacked chapters overlap, so several can cross the middle of the screen at once.
    // The one on top is always the last in the list.
    const crossing = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = chapters.findIndex((chapter) => chapter.id === entry.target.dataset.chapter);
          if (entry.isIntersecting) crossing.add(index);
          else crossing.delete(index);
        });
        if (crossing.size) setActiveIndex(Math.max(...crossing));
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    document.querySelectorAll('[data-chapter]').forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <motion.div style={{ opacity: arrival, pointerEvents }} className="sticky top-[3.75rem] lg:top-16 z-20 h-0">
      <div className="absolute inset-x-0 top-0 bg-beton/95 backdrop-blur-md border-b border-ink/10 text-ink">
        {/* Stacked layout: only the current chapter fits. */}
        <p aria-hidden="true" className="lg:hidden flex justify-between gap-4 px-5 py-2 text-xs font-medium">
          <span>{t('chapter_of', { n: chapters[activeIndex].number, total: chapterCount, defaultValue: 'Chapter {{n}} of {{total}}' })}</span>
          <span>{localize(chapters[activeIndex].period, lang)}</span>
        </p>

        <nav aria-label={t('story_map', 'Story map')} className="hidden lg:block px-10">
          <ol className="grid grid-cols-6 gap-5 text-[0.8125rem]">
            {chapters.map((chapter, index) => (
              <li key={chapter.id} className="min-w-0">
                <a
                  href={`#${chapter.id}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  className={`flex items-baseline justify-between gap-2 py-2.5 hover:underline underline-offset-4 ${
                    index === activeIndex ? 'font-semibold text-ink shadow-[inset_0_-2px_0_var(--color-accent)]' : 'text-ink-soft'
                  }`}
                >
                  <span className="truncate">{localize(chapter.mapLabel, lang)}</span>
                  <span className="hidden 2xl:inline font-normal whitespace-nowrap">{localize(chapter.period, lang)}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </motion.div>
  );
};

export default StoryMap;
