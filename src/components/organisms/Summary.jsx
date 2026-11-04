import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import ScrollReveal from '../atoms/ScrollReveal';
import PillLink from '../atoms/PillLink';
import StickyBlock from '../atoms/StickyBlock';
import GithubStats from '../molecules/GithubStats';
import { cvPath, localize, projectCategories, projects, tools } from '../../data/portfolioData';

const ALL = 'All';

const Summary = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'id' ? 'id' : 'en';
  const [filter, setFilter] = useState(ALL);

  const categories = [
    { value: ALL, label: t('projects_filter_all', 'All') },
    ...projectCategories.map((category) => ({ value: category, label: category })),
  ];
  const visibleProjects = filter === ALL ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative z-10 bg-night text-paper border-t border-white/15">
      <div className="px-5 lg:px-10 pt-24 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-x-14 gap-y-12">
          {/* Stays in place while the project list moves past it. */}
          <StickyBlock offset="6rem" gap="1rem" className="lg:sticky self-start">
            <ScrollReveal direction="right">
              <h2 className="font-display font-normal uppercase text-6xl lg:text-8xl leading-[1.1]">
                {t('summary_title', 'The quick version')}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                <p className="text-mist">{t('summary_subtitle', 'In a hurry? Here are my projects at a glance.')}</p>
                <PillLink href={cvPath(lang)} download variant="paper">
                  {t('cv_download', 'Download CV')} <FiArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
                </PillLink>
              </div>

              <h3 className="mt-10 text-sm font-semibold">{t('summary_tools', 'What I used in these projects')}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm text-mist transition-[translate,color,border-color] duration-300 hover:-translate-y-0.5 hover:text-paper hover:border-white/50"
                  >
                    {tool.logo && (
                      <img
                        src={tool.logo}
                        alt=""
                        loading="lazy"
                        className="w-4 h-4 object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                      />
                    )}
                    {tool.name}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </StickyBlock>

          <ScrollReveal direction="left">
            <h3 className="text-sm font-semibold border-b border-white/25 pb-3">{t('summary_projects', 'Projects')}</h3>
            <div role="group" aria-label={t('projects_filter_label', 'Filter projects')} className="mt-3 mb-1 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setFilter(category.value)}
                  aria-pressed={filter === category.value}
                  className={`rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-medium transition-colors duration-200 ${
                    filter === category.value
                      ? 'bg-paper text-night border-paper'
                      : 'border-white/25 text-paper hover:bg-white/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <ul>
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleProjects.map((project) => (
                  <motion.li
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
                    transition={{ duration: 0.45, type: 'spring', bounce: 0.25 }}
                    className="border-b border-white/15 py-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-x-6 gap-y-0.5">
                      <span className="font-medium">{project.title}</span>
                      <span className="text-sm text-mist sm:whitespace-nowrap">{localize(project.period, lang)}</span>
                    </div>
                    <p className="text-sm text-mist">{project.stack}</p>
                    <div className="mt-0.5 flex flex-wrap gap-x-5 text-sm font-medium">
                      <a href={`#${project.chapterId}`} className="py-1 underline underline-offset-4 hover:text-white">
                        {t('summary_read', 'Read the story')}
                      </a>
                      {project.status === 'live' && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="py-1 underline underline-offset-4 hover:text-white">
                          {t('project_live', 'View live')}
                        </a>
                      )}
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </ScrollReveal>
        </div>

        <GithubStats lang={lang} />
      </div>
    </section>
  );
};

export default Summary;
