import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal';
import StickyBlock from '../atoms/StickyBlock';
import ExperienceItem from '../molecules/ExperienceItem';
import { background, experiences, localize } from '../../data/portfolioData';

const Experience = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'id' ? 'id' : 'en';

  return (
    <section id="experience" className="relative z-10 bg-night text-paper border-t border-white/15">
      <div className="px-5 lg:px-10 pt-24 pb-16 lg:pb-24 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 xl:gap-20">
        {/* Same columns as the story, and it stays in place while the timeline moves past it. */}
        <StickyBlock offset="6rem" gap="1rem" className="lg:sticky self-start mb-10 lg:mb-0">
          <ScrollReveal direction="right">
            {/* Scales with the screen, since "PENGALAMAN" is about 5em wide in this font. */}
            <h2 className="font-display font-normal uppercase whitespace-nowrap text-[min(3.75rem,17.5vw)] lg:text-[min(6rem,calc((100vw_-_10rem)/12))] leading-[1.1]">
              {t('exp_title', 'Experience')}
            </h2>
            <p className="mt-4 text-lg text-mist">{t('exp_subtitle', "Where I've worked, newest first.")}</p>
          </ScrollReveal>
        </StickyBlock>

        <div className="min-w-0">
          <ol>
            {experiences.map((item, index) => (
              <li key={item.id}>
                <ScrollReveal direction="up">
                  <ExperienceItem item={item} lang={lang} isLast={index === experiences.length - 1} />
                </ScrollReveal>
              </li>
            ))}
          </ol>

          <ScrollReveal direction="up">
            <h3 className="mt-4 text-sm font-semibold border-b border-white/25 pb-3">
              {t('exp_background', 'Education and organization')}
            </h3>
            <ul>
              {background.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row sm:justify-between gap-x-6 gap-y-0.5 border-b border-white/15 py-3">
                  <span>
                    <span className="block font-medium">{localize(item.role, lang)}</span>
                    <span className="block text-sm text-mist">{localize(item.org, lang)}</span>
                  </span>
                  <span className="text-sm text-mist sm:whitespace-nowrap">{localize(item.period, lang)}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
