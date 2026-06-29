import React, { useState } from 'react';
import { FiArrowUpRight, FiLock, FiMonitor, FiGithub, FiCpu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || 'en';
  const [showDrawer, setShowDrawer] = useState(false);

  // Neon-glow pills: dark pill + brand-colored border/text/logo with a soft outer glow that intensifies on hover.
  const frameworkIcons = {
    "React JS": { logo: "/assets/logos/react.svg", color: "text-[#61DAFB]", border: "border-[#61DAFB]/30", glow: "shadow-[0_0_6px_rgba(97,218,251,0.15)]", hoverGlow: "hover:shadow-[0_0_12px_rgba(97,218,251,0.35)]" },
    "Vite": { logo: "/assets/logos/vitejs.svg", color: "text-[#BD34FE]", border: "border-[#BD34FE]/30", glow: "shadow-[0_0_6px_rgba(189,52,254,0.15)]", hoverGlow: "hover:shadow-[0_0_12px_rgba(189,52,254,0.35)]" },
    "Laravel": { logo: "/assets/logos/laravel.svg", color: "text-[#F0513F]", border: "border-[#F0513F]/30", glow: "shadow-[0_0_6px_rgba(240,81,63,0.15)]", hoverGlow: "hover:shadow-[0_0_12px_rgba(240,81,63,0.35)]" },
    "Next JS": { logo: "/assets/logos/nextjs.svg", color: "text-white", border: "border-white/30", glow: "shadow-[0_0_6px_rgba(255,255,255,0.12)]", hoverGlow: "hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]" },
  };

  // Support both single `framework` (string) and `frameworks` (array)
  const frameworkList = project.frameworks || (project.framework ? [project.framework] : []);

  return (
    <div className="relative w-full flex flex-col h-auto md:flex-row bg-[#151B2B] rounded-2xl overflow-hidden shadow-xl border border-white/5 md:min-h-[450px] cursor-default">

      {/* Left Column (Text & Controls) */}
      <div className="relative z-10 w-full p-8 md:p-12 flex flex-col justify-center md:w-1/2">
        <h3 className="text-3xl md:text-4xl font-bold md:font-extrabold text-blue-500 mb-4 md:mb-2">{project.title}</h3>

        {/* Dynamic Framework Logo Badges */}
        {frameworkList.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
            {frameworkList.map((name) => {
              const f = frameworkIcons[name];
              if (!f) return null;
              return (
                <span
                  key={name}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-full border bg-[#0B0F19]/70 backdrop-blur-sm tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${f.border} ${f.color} ${f.glow} ${f.hoverGlow}`}
                >
                  <img src={f.logo} alt={`${name} logo`} className="w-4 h-4 object-contain" loading="lazy" />
                  {name}
                </span>
              );
            })}
          </div>
        )}

        {/* Full description */}
        <p className="text-neutral-400 text-base md:text-lg mb-4 md:mb-8 font-light leading-relaxed">
          {project.description[lang]}
        </p>

        {/* Technical Highlights Trigger (Mobile) */}
        {project.highlights && (
          <button
            onClick={() => setShowDrawer(true)}
            className="md:hidden text-blue-400 hover:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 text-left flex items-center gap-1.5 cursor-pointer active:text-blue-300 active:scale-98"
          >
            <FiCpu className="w-4 h-4" /> {t('project_details_btn', 'Technical Highlights')} &rarr;
          </button>
        )}

        {project.credentials && (
          <div className="inline-block bg-black/20 border border-white/5 rounded-lg px-4 py-2 mb-6 text-sm text-neutral-500 w-max">
            {project.credentials}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-6 md:gap-4 md:w-full">

          {project.status === 'live' ? (
             <a
               href={project.liveUrl}
               target="_blank"
               rel="noreferrer"
               className="flex items-center font-medium text-white hover:text-blue-400 transition-colors"
             >
               Preview <FiArrowUpRight className="ml-1 w-5 h-5" />
             </a>
          ) : (
             <span className="flex items-center font-medium text-neutral-600 cursor-not-allowed">
               {project.status === 'local' ? <><FiMonitor className="mr-2"/> Local Only</> : <><FiLock className="mr-2"/> Internal</>}
             </span>
          )}

          {project.githubUrl && (
            <a
               href={project.githubUrl}
               target="_blank"
               rel="noreferrer"
               className="flex items-center font-medium text-neutral-400 hover:text-white transition-colors"
               aria-label="Source Code"
             >
              <FiGithub className="mr-2 w-5 h-5" /> Source Code
            </a>
          )}

          {/* Details Toggle Button (Desktop Only) */}
          {project.highlights && (
            <button
              onClick={() => setShowDrawer(true)}
              className="hidden md:flex items-center font-semibold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
            >
              <FiCpu className="mr-1.5 w-5 h-5 text-blue-500" /> {t('project_details_btn', 'Technical Highlights')}
            </button>
          )}

        </div>
      </div>

      {/* Right Column (Image): normal block below text on mobile, side column on desktop */}
      <div className="relative w-full md:w-1/2 bg-[#0B0F19] min-h-[250px] md:min-h-full md:h-auto">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-left-top opacity-90 hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Slide-Up Technical Highlights Drawer */}
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="absolute inset-0 bg-[#0F1422]/98 backdrop-blur-md z-30 p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h4 className="text-lg font-bold text-blue-500 uppercase tracking-widest flex items-center gap-2">
                  <FiCpu className="w-5 h-5 text-blue-500 animate-pulse" />
                  {t('project_highlights_title', 'Key Engineering Highlights')}
                </h4>
                <button 
                  onClick={() => setShowDrawer(false)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-neutral-400 hover:text-white cursor-pointer active:bg-white/15 active:scale-95"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <ul className="space-y-4">
                {project.highlights[lang]?.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-neutral-300 text-sm md:text-base font-light leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setShowDrawer(false)}
                className="px-6 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer active:bg-white/15 active:scale-95"
              >
                {t('project_details_close', 'Back')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProjectCard;