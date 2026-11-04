import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiGithub, FiLock } from 'react-icons/fi';
import ScrollReveal from '../atoms/ScrollReveal';
import PillLink from '../atoms/PillLink';
import { localize } from '../../data/portfolioData';

const ProjectProof = ({ project, lang }) => {
  const { t } = useTranslation();

  return (
    <ScrollReveal>
      <div>
        <img
          src={project.image}
          alt={t('project_screenshot', { title: project.title, defaultValue: 'Tampilan {{title}}' })}
          loading="lazy"
          decoding="async"
          className="w-full aspect-video object-cover object-top rounded-md border border-ink/20 bg-white"
        />

        <div className="mt-4 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 xl:gap-8">
          <div className="min-w-0">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-ink-soft max-w-2xl">{localize(project.description, lang)}</p>
            <p className="mt-1 text-sm text-ink-soft">{project.stack}</p>
            {project.credentials && (
              <p className="mt-1 text-sm text-ink-soft break-words">
                {t('project_demo_account', 'Akun demo')}: {project.credentials}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0">
            {project.status === 'live' ? (
              <PillLink href={project.liveUrl} external>
                {t('project_live', 'Lihat langsung')} <FiArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
              </PillLink>
            ) : (
              <span className="inline-flex items-center gap-2 px-[1.125rem] py-2.5 text-[0.8125rem] font-medium text-ink-soft">
                <FiLock aria-hidden="true" className="w-3.5 h-3.5" /> {t('project_internal', 'Internal')}
              </span>
            )}
            {project.githubUrl && (
              <PillLink href={project.githubUrl} external variant="outline">
                <FiGithub aria-hidden="true" className="w-3.5 h-3.5" /> {t('project_source', 'Kode sumber')}
              </PillLink>
            )}
          </div>
        </div>

        <details className="mt-4 border-t border-ink/20 pt-3">
          <summary className="cursor-pointer py-1 text-sm font-medium">{t('project_details', 'Detail teknis')}</summary>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[0.9375rem] leading-relaxed text-ink-soft max-w-2xl">
            {project.highlights[lang].map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </details>
      </div>
    </ScrollReveal>
  );
};

export default ProjectProof;
