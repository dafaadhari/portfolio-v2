import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import ScrollReveal from '../atoms/ScrollReveal';
import PillLink from '../atoms/PillLink';
import { cvPath, experiences, localize, projects, tools } from '../../data/portfolioData';

const Summary = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';

  return (
    <section id="projects" className="bg-night text-paper border-t border-white/15">
      <div className="px-5 lg:px-10 py-16 lg:py-24">
        <ScrollReveal>
          <p className="text-[0.8125rem] font-medium text-mist">{t('summary_kicker', 'Lampiran')}</p>
          <h2 className="font-display font-normal uppercase text-6xl lg:text-8xl leading-[1.1] mt-1">
            {t('summary_title', 'Versi singkatnya')}
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className="text-mist">{t('summary_subtitle', 'Buat yang tidak sempat baca semuanya.')}</p>
            <PillLink href={cvPath(lang)} download variant="paper">
              {t('cv_download', 'Unduh CV')} <FiArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
            </PillLink>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-x-14 gap-y-12">
          <ScrollReveal>
            <h3 className="text-sm font-semibold border-b border-white/25 pb-3">
              {t('summary_experience', 'Pengalaman dan pendidikan')}
            </h3>
            <ul>
              {experiences.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row sm:justify-between gap-x-6 gap-y-0.5 border-b border-white/15 py-3">
                  <span>
                    <span className="block font-medium">{localize(item.role, lang)}</span>
                    <span className="block text-sm text-mist">{localize(item.org, lang)}</span>
                  </span>
                  <span className="text-sm text-mist sm:whitespace-nowrap">{localize(item.period, lang)}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-sm font-semibold">{t('summary_tools', 'Yang saya pakai di proyek-proyek ini')}</h3>
            <p className="mt-2 leading-relaxed text-mist">{tools.join(', ')}</p>
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="text-sm font-semibold border-b border-white/25 pb-3">{t('summary_projects', 'Proyek')}</h3>
            <ul>
              {projects.map((project) => (
                <li key={project.id} className="border-b border-white/15 py-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-x-6 gap-y-0.5">
                    <span className="font-medium">{project.title}</span>
                    <span className="text-sm text-mist sm:whitespace-nowrap">{localize(project.period, lang)}</span>
                  </div>
                  <p className="text-sm text-mist">{project.stack}</p>
                  <div className="mt-0.5 flex flex-wrap gap-x-5 text-sm font-medium">
                    <a href={`#${project.chapterId}`} className="py-1 underline underline-offset-4 hover:text-white">
                      {t('summary_read', 'Baca ceritanya')}
                    </a>
                    {project.status === 'live' && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="py-1 underline underline-offset-4 hover:text-white">
                        {t('project_live', 'Lihat langsung')}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Summary;
