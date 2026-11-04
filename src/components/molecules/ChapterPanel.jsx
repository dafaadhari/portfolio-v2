import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal';
import StickyBlock from '../atoms/StickyBlock';
import { localize } from '../../data/portfolioData';

const ChapterPanel = ({ chapter, number, total, lang, dark = false, lead, footer, children }) => {
  const { t } = useTranslation();
  const numeral = localize(chapter.numeral, lang);
  const numeralTag = chapter.numeralTag && localize(chapter.numeralTag, lang);
  const period = localize(chapter.period, lang);
  const titleId = `${chapter.id}-title`;

  // Sizes keep each numeral on one line down to 320px, in both languages.
  let numeralSize = 'text-[7.5rem] xl:text-[9rem]';
  if (chapter.isPart) numeralSize = 'text-[clamp(2.75rem,14vw,4rem)]';
  else if (numeralTag) numeralSize = 'text-[min(7.5rem,30.5vw)] xl:text-[9rem]';
  else if (numeral.length > 4) numeralSize = 'text-[clamp(4rem,20vw,7rem)] lg:text-[5.25rem] xl:text-[7rem]';

  const story = (
    <>
      <div className="font-story text-xl xl:text-[1.375rem] leading-[1.5] max-w-[44rem] space-y-3.5">
        {chapter.paragraphs[lang].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {footer && <div className="mt-8">{footer}</div>}
    </>
  );

  return (
    <>
      {/* Links jump to this marker. A sticky element would not give them a stable position. */}
      <span id={chapter.id} aria-hidden="true" className="block h-0" />

      {/* The panel scrolls until its bottom is visible, then stays while the next one covers it. */}
      <StickyBlock
        as="article"
        data-chapter={chapter.id}
        aria-labelledby={titleId}
        className={`sticky min-h-svh rounded-t-3xl border-t shadow-[0_-10px_30px_-22px_rgba(13,15,18,0.45)] ${
          dark ? 'bg-night text-paper border-white/15' : 'bg-beton text-ink border-ink/15'
        }`}
      >
        <div className="px-5 lg:px-10 pt-[6.75rem] lg:pt-[8.25rem] pb-16 lg:pb-24 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 xl:gap-20">
          {/* The story text stays in place while the project cards move past it. */}
          <StickyBlock offset="8.25rem" gap="1rem" className="lg:sticky self-start">
            <ScrollReveal direction="right">
              {lead && <p className="lg:hidden font-story text-[1.75rem] leading-snug mb-10">{lead}</p>}
              {/* On phones the bar under the navbar already shows this. */}
              <p className="sr-only lg:not-sr-only text-[0.8125rem] font-medium">
                {t('chapter_of', { n: number, total, defaultValue: 'Chapter {{n}} of {{total}}' })}
                {period !== numeral && ` · ${period}`}
              </p>
              <p
                aria-hidden="true"
                className={`font-display uppercase whitespace-nowrap leading-[1.05] mt-1 mb-4 ${numeralSize}`}
              >
                {numeral}
                {numeralTag && <span className="ml-[0.3em] text-[0.3em]">{numeralTag}</span>}
              </p>
              <h2 id={titleId} className="text-3xl xl:text-[2.5rem] font-semibold tracking-tight leading-[1.14] mb-5 max-w-3xl">
                {localize(chapter.title, lang)}.
              </h2>
              {children && story}
            </ScrollReveal>
          </StickyBlock>

          <div className="mt-2 lg:mt-0 min-w-0">
            {children ? (
              <div className="mt-8 lg:mt-0">{children}</div>
            ) : (
              <ScrollReveal direction="left">
                <div className="lg:pt-6">{story}</div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </StickyBlock>
    </>
  );
};

export default ChapterPanel;
