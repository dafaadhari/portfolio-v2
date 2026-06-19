import React, { useState } from 'react';
import { FiArrowUpRight, FiLock, FiMonitor, FiGithub, FiCpu, FiX } from 'react-icons/fi';
import { SiReact, SiLaravel, SiNextdotjs } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || 'en';
  const [showDrawer, setShowDrawer] = useState(false);

  const frameworkIcons = {
    "React JS": { icon: SiReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", border: "border-[#61DAFB]/20", glow: "shadow-[0_0_15px_rgba(97,218,251,0.25)]" },
    "Laravel": { icon: SiLaravel, color: "text-[#FF2D20]", bg: "bg-[#FF2D20]/10", border: "border-[#FF2D20]/20", glow: "shadow-[0_0_15px_rgba(255,45,32,0.25)]" },
    "Next JS": { icon: SiNextdotjs, color: "text-white", bg: "bg-white/10", border: "border-white/20", glow: "shadow-[0_0_15px_rgba(255,255,255,0.15)]" },
  };

  const fw = project.framework ? frameworkIcons[project.framework] : null;
  const FwIcon = fw ? fw.icon : null;

  return (
    <div className="relative w-full flex flex-col justify-end min-h-[500px] md:flex-row bg-[#151B2B] rounded-2xl overflow-hidden shadow-xl border border-white/5 md:min-h-[450px] cursor-default">
      
      {/* Left Column (Text & Controls) */}
      <div className="relative z-10 w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-end md:justify-center bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/90 to-[#0B0F19]/20 md:bg-none min-h-[300px] md:min-h-0">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white md:text-blue-500 mb-1 md:mb-2">{project.title}</h3>
        
        {/* Dynamic Framework Logo Badge */}
        {fw && FwIcon && (
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span 
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full border ${fw.bg} ${fw.border} ${fw.color} ${fw.glow} tracking-wider`}
            >
              <FwIcon className="w-4.5 h-4.5" />
              {project.framework}
            </span>
          </div>
        )}
        
        {/* Description clamped on mobile, full on desktop */}
        <p className="text-neutral-300 md:text-neutral-400 text-sm md:text-lg mb-3 md:mb-8 font-light leading-relaxed line-clamp-2 md:line-clamp-none">
          {project.description[lang]}
        </p>

        {/* Read More Trigger on Mobile */}
        <button 
          onClick={() => setShowDrawer(true)} 
          className="md:hidden text-blue-400 hover:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 text-left flex items-center gap-1 cursor-pointer active:text-blue-300 active:scale-98"
        >
          {t('project_details_btn', 'Technical Highlights')} &rarr;
        </button>

        {project.credentials && (
          <div className="inline-block bg-black/40 border border-white/5 rounded-lg px-4 py-2 mb-6 text-sm text-neutral-400 w-max md:bg-black/20 md:text-neutral-500">
            {project.credentials}
          </div>
        )}

        <div className="mt-2 md:mt-auto flex items-center gap-4 w-full">
          
          {project.status === 'live' ? (
             <a 
               href={project.liveUrl} 
               target="_blank" 
               rel="noreferrer" 
               className="flex-1 md:flex-none flex justify-center items-center py-3.5 px-8 bg-white hover:bg-neutral-200 text-[#0B0F19] md:bg-transparent md:text-white md:hover:text-blue-400 font-bold md:font-medium rounded-full md:rounded-none md:p-0 md:shadow-none shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 text-sm active:bg-neutral-300 active:scale-98 active:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
             >
               Preview <FiArrowUpRight className="ml-1 w-5 h-5 md:w-4.5 md:h-4.5" />
             </a>
          ) : (
             <span className="flex-1 md:flex-none flex justify-center items-center py-3.5 px-8 bg-neutral-800 text-neutral-400 md:bg-transparent md:text-neutral-600 font-bold md:font-medium rounded-full md:rounded-none md:p-0 cursor-not-allowed text-sm">
               {project.status === 'local' ? <><FiMonitor className="mr-2"/> Local Only</> : <><FiLock className="mr-2"/> Internal</>}
             </span>
          )}

          {project.githubUrl && (
            <a 
               href={project.githubUrl} 
               target="_blank" 
               rel="noreferrer" 
               className="w-12 h-12 md:w-auto md:h-auto rounded-full md:rounded-none bg-white/10 border border-white/10 md:border-none flex items-center justify-center text-white md:text-neutral-400 md:hover:text-white hover:bg-white/20 md:hover:bg-transparent transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] md:shadow-none cursor-pointer active:bg-white/30 active:scale-95 active:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
               aria-label="Source Code"
             >
              <FiGithub className="w-5 h-5 md:w-5 md:h-5 md:mr-2" />
              <span className="hidden md:inline font-medium">Source Code</span>
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

      {/* Right Column (Image container): Absolute behind text on mobile, normal block layout on desktop */}
      <div className="absolute inset-0 z-0 w-full h-full md:relative md:inset-auto md:z-10 md:w-1/2 md:h-auto min-h-[250px] md:min-h-full">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy" 
          className="absolute inset-0 w-full h-full object-cover object-center md:object-left-top opacity-70 md:opacity-90 hover:opacity-100 transition-opacity duration-500" 
        />
        {/* Dark overlay grid for mobile layout so background details blend nicely */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/40 via-transparent to-[#0B0F19]/90 md:hidden" />
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