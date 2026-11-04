import { useTranslation } from 'react-i18next';
import { FiArrowDown } from 'react-icons/fi';
import ChapterBlock from '../molecules/ChapterBlock';
import ProjectProof from '../molecules/ProjectProof';
import StoryMedia from '../molecules/StoryMedia';
import StoryRail from '../molecules/StoryRail';
import PillLink from '../atoms/PillLink';
import { chapters, localize, projects } from '../../data/portfolioData';

const RAIL_COLUMNS = 'lg:grid lg:grid-cols-[22.5rem_minmax(0,1fr)] lg:gap-14';
const pastChapters = chapters.slice(0, -1);
const lastChapter = chapters[chapters.length - 1];

const Story = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';

  return (
    <>
      <section id="story" className="bg-beton text-ink">
        <div className="px-5 lg:px-10 pt-14 lg:pt-16 pb-10">
          {/* The hero shows this line on wide screens. */}
          <p className="lg:hidden font-story text-[1.75rem] leading-snug">
            {t('hero_hook', 'Dari SD sampai SMA saya menghindari matematika. Lalu saya masuk Teknik Informatika.')}
          </p>

          <div className={RAIL_COLUMNS}>
            <StoryRail chapters={chapters} trackedChapters={pastChapters} lang={lang} />

            <div className="min-w-0">
              {pastChapters.map((chapter, index) => (
                <ChapterBlock key={chapter.id} chapter={chapter} number={index + 1} total={chapters.length} lang={lang}>
                  {chapter.hasMedia && <StoryMedia lang={lang} />}
                  {chapter.projectIds.length > 0 && (
                    <div className="space-y-12 max-w-4xl">
                      {chapter.projectIds.map((id) => (
                        <ProjectProof key={id} project={projects.find((project) => project.id === id)} lang={lang} />
                      ))}
                    </div>
                  )}
                </ChapterBlock>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From "now" onward the page turns dark. */}
      <section className="bg-night text-paper">
        <div className={`px-5 lg:px-10 pt-10 lg:pt-20 pb-6 ${RAIL_COLUMNS}`}>
          <div aria-hidden="true" className="hidden lg:block pt-4">
            <p className="text-[0.8125rem] font-medium">
              {t('chapter_of', { n: chapters.length, total: chapters.length, defaultValue: 'Bab {{n}} dari {{total}}' })}
            </p>
            <p className="font-display uppercase text-[5.25rem] leading-[1.1] mt-1.5">{localize(lastChapter.numeral, lang)}</p>
          </div>

          <ChapterBlock chapter={lastChapter} number={chapters.length} total={chapters.length} lang={lang}>
            <PillLink href="#contact" variant="paper">
              {t('contact_title', 'Hubungi saya')} <FiArrowDown aria-hidden="true" className="w-3.5 h-3.5" />
            </PillLink>
          </ChapterBlock>
        </div>
      </section>
    </>
  );
};

export default Story;
