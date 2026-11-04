import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiCpu, FiGithub, FiLock } from 'react-icons/fi';
import ScrollReveal from '../atoms/ScrollReveal';
import PillLink from '../atoms/PillLink';
import { pillClass } from '../atoms/pillStyles';
import { localize } from '../../data/portfolioData';

const ProjectProof = ({ project, lang }) => {
  const { t } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);
  const openRef = useRef(null);
  const closeRef = useRef(null);
  const wasOpen = useRef(false);

  // Runs after the commit: the open button can't take focus while the card behind is still inert.
  useEffect(() => {
    if (showDrawer) closeRef.current?.focus();
    else if (wasOpen.current) openRef.current?.focus();
    wasOpen.current = showDrawer;
  }, [showDrawer]);

  const closeDrawer = () => setShowDrawer(false);

  return (
    <ScrollReveal direction="up">
      <div className="relative overflow-hidden rounded-lg border border-ink/20 bg-beton">
        {/* Hidden from keyboards and screen readers while the drawer covers it. */}
        <div inert={showDrawer}>
          <img
            src={project.image}
            alt={t('project_screenshot', { title: project.title, defaultValue: 'Screenshot of {{title}}' })}
            loading="lazy"
            decoding="async"
            className="w-full aspect-video object-cover object-top bg-white"
          />

          <div className="p-4 lg:p-5">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{localize(project.description, lang)}</p>
            <p className="mt-1 text-sm text-ink-soft">{project.stack}</p>
            {project.credentials && (
              <p className="mt-1 text-sm text-ink-soft break-words">
                {t('project_demo_account', 'Demo account')}: {project.credentials}
              </p>
            )}

            <div className="mt-3.5 flex flex-wrap gap-2.5">
              {project.status === 'live' ? (
                <PillLink href={project.liveUrl} external>
                  {t('project_live', 'View live')} <FiArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
                </PillLink>
              ) : (
                <span className="inline-flex items-center gap-2 px-[1.125rem] py-2.5 text-[0.8125rem] font-medium text-ink-soft">
                  <FiLock aria-hidden="true" className="w-3.5 h-3.5" /> {t('project_internal', 'Internal')}
                </span>
              )}
              {project.githubUrl && (
                <PillLink href={project.githubUrl} external variant="outline">
                  <FiGithub aria-hidden="true" className="w-3.5 h-3.5" /> {t('project_source', 'Source code')}
                </PillLink>
              )}
              <button
                ref={openRef}
                type="button"
                onClick={() => setShowDrawer(true)}
                aria-expanded={showDrawer}
                className={pillClass('outline')}
              >
                <FiCpu aria-hidden="true" className="w-3.5 h-3.5" /> {t('project_details_btn', 'Technical Highlights')}
              </button>
            </div>
          </div>
        </div>

        {/* Slide-up drawer */}
        <AnimatePresence>
          {showDrawer && (
            <motion.div
              data-drawer
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') closeDrawer();
              }}
              className="absolute inset-0 z-10 flex flex-col overflow-y-auto bg-ink text-paper p-5 lg:p-8"
            >
              {/* An h3 because the project title behind it is inert while this is open. */}
              <h3 className="text-lg font-semibold border-b border-white/20 pb-3 mb-4">
                {t('project_highlights_title', 'Technical Highlights')}
              </h3>
              <ul className="space-y-3 mb-5">
                {project.highlights[lang].map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-mist"
                  >
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-paper mt-2.5 shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
              <button ref={closeRef} type="button" onClick={closeDrawer} className={`${pillClass('paper')} mt-auto self-start`}>
                {t('project_details_close', 'Back')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
};

export default ProjectProof;
