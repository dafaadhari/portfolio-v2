import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal';
import { localize } from '../../data/portfolioData';

const ChapterBlock = ({ chapter, number, total, lang, children }) => {
  const { t } = useTranslation();
  const numeral = localize(chapter.numeral, lang);
  const period = localize(chapter.period, lang);
  const titleId = `${chapter.id}-title`;

  return (
    <article id={chapter.id} aria-labelledby={titleId} className="py-14 lg:py-20 lg:first:pt-4">
      <ScrollReveal>
        {/* On wide screens the sticky rail shows this, so it stays for screen readers only. */}
        <p className="text-[0.8125rem] font-medium lg:sr-only">
          {t('chapter_of', { n: number, total, defaultValue: 'Bab {{n}} dari {{total}}' })}
          {period !== numeral && ` · ${period}`}
        </p>
        <p
          aria-hidden="true"
          className={`lg:hidden font-display uppercase leading-[1.05] mt-1 mb-4 ${
            numeral.length > 4 ? 'text-[clamp(4rem,20vw,7rem)]' : 'text-[7.5rem]'
          }`}
        >
          {numeral}
        </p>
        <h2 id={titleId} className="text-3xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.14] mb-5 max-w-3xl">
          {localize(chapter.title, lang)}.
        </h2>
        <div className="font-story text-xl lg:text-[1.4375rem] leading-[1.48] max-w-[44rem] space-y-3.5">
          {chapter.paragraphs[lang].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </ScrollReveal>

      {children && <div className="mt-9">{children}</div>}
    </article>
  );
};

export default ChapterBlock;
