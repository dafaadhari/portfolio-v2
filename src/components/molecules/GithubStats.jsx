import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal';
import PillLink from '../atoms/PillLink';
import { socialLinks } from '../../data/portfolioData';

const HANDLE = 'dafaadhari';
const AVATAR_URL = `https://avatars.githubusercontent.com/${HANDLE}?s=160`;
const CARD_CLASS =
  'min-h-[170px] h-full rounded-lg border border-white/15 bg-white/[0.03] transition-colors duration-300 hover:border-white/40';

// Colors match the dark section, and the labels follow the site language.
const streakUrl = (lang) => {
  const params = new URLSearchParams({
    user: HANDLE,
    locale: lang,
    background: '00000000',
    hide_border: 'true',
    // Its numbers fade in over 2 seconds, so a visitor scrolling past would see a half-empty card.
    disable_animations: 'true',
    stroke: 'FFFFFF33',
    ring: 'F4F5F6',
    fire: 'F4F5F6',
    currStreakNum: 'F4F5F6',
    sideNums: 'F4F5F6',
    currStreakLabel: 'F4F5F6',
    sideLabels: 'C9CDD3',
    dates: 'C9CDD3',
  });
  return `https://streak-stats.demolab.com/?${params}`;
};

const GithubStats = ({ lang }) => {
  const { t } = useTranslation();
  // The streak comes from a free outside service, so the card needs a fallback for when it's down.
  const [streakFailed, setStreakFailed] = useState(false);

  return (
    <div data-github className="mt-12">
      <ScrollReveal direction="up">
        <h3 className="text-sm font-semibold border-b border-white/25 pb-3">{t('github_title', 'GitHub Activity')}</h3>
      </ScrollReveal>

      <div className="mt-5 grid md:grid-cols-2 gap-5">
        <ScrollReveal direction="right">
          <div className={`${CARD_CLASS} flex items-center gap-4 sm:gap-6 p-5 sm:p-6`}>
            <img
              src={AVATAR_URL}
              alt=""
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
              className="w-20 h-20 shrink-0 rounded-full border border-white/20 p-1 object-cover"
            />
            <div className="min-w-0">
              <p className="text-xl font-semibold">Dapa Adhari</p>
              <p className="text-sm text-mist mb-3.5">@{HANDLE}</p>
              <PillLink href={socialLinks.github} external variant="outlineDark">
                {t('github_follow', 'Follow & View')}
              </PillLink>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className={`${CARD_CLASS} flex items-center justify-center p-4`}>
            {streakFailed ? (
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="py-1 text-sm font-medium underline underline-offset-4 hover:text-white">
                {t('github_streak_fallback', 'See my activity on GitHub')}
              </a>
            ) : (
              <img
                src={streakUrl(lang)}
                alt={t('github_streak_alt', { handle: HANDLE, defaultValue: 'GitHub contribution streak for @{{handle}}' })}
                width="495"
                height="195"
                loading="lazy"
                decoding="async"
                onError={() => setStreakFailed(true)}
                className="w-full max-w-[495px] h-auto"
              />
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default GithubStats;
