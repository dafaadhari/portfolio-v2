import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowDown } from 'react-icons/fi';
import ChapterPanel from '../molecules/ChapterPanel';
import ProjectProof from '../molecules/ProjectProof';
import ProofStack from '../molecules/ProofStack';
import StoryMap from '../molecules/StoryMap';
import PillLink from '../atoms/PillLink';
import { chapterCount, chapters, projects } from '../../data/portfolioData';

const Story = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'id' ? 'id' : 'en';
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} aria-label={t('nav_story', 'Story')} className="relative z-10">
      <span id="story" aria-hidden="true" className="block h-0" />
      <StoryMap chapters={chapters} lang={lang} containerRef={containerRef} />

      {chapters.map((chapter, index) => {
        const isLast = index === chapters.length - 1;

        return (
          <ChapterPanel
            key={chapter.id}
            chapter={chapter}
            number={chapter.number}
            total={chapterCount}
            lang={lang}
            dark={isLast}
            // The hero shows this line on wide screens only, and chapter 1 picks up right after it.
            lead={
              index === 0
                ? t('hero_hook', 'Growing up, I did everything I could to avoid math. Then I signed up for Informatics Engineering.')
                : undefined
            }
            footer={
              isLast ? (
                <PillLink href="#contact" variant="accent">
                  {t('chapter_cta', 'Get in touch')} <FiArrowDown aria-hidden="true" className="w-3.5 h-3.5" />
                </PillLink>
              ) : undefined
            }
          >
            {/* A single expression, so a chapter without proof really has no children. */}
            {chapter.projectIds.length > 0 ? (
              <ProofStack>
                {chapter.projectIds.map((id) => (
                  <ProjectProof key={id} project={projects.find((project) => project.id === id)} lang={lang} dark={isLast} />
                ))}
              </ProofStack>
            ) : null}
          </ChapterPanel>
        );
      })}
    </section>
  );
};

export default Story;
