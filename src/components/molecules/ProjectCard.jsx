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
    <div className="relative w-full flex flex-col md:flex-row bg-[#151B2B] rounded-2xl overflow-hidden shadow-xl border border-white/5 h-auto md:min-h-[450px]">
      
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{project.title}</h3>
        
        {/* Dynamic Framework Logo Badge */}
        {fw && FwIcon && (
          <div className="flex items-center gap-2 mb-6">
            <span 
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full border ${fw.bg} ${fw.border} ${fw.color} ${fw.glow} tracking-wider`}
            >
              <FwIcon className="w-4.5 h-4.5" />
              {project.framework}
            </span>
          </div>
        )}
        
        <p className="text-neutral-400 text-base md:text-lg mb-8 font-light leading-relaxed">
          {project.description[lang]}
        </p>

        {project.credentials && (
          <div className="inline-block bg-black/20 border border-white/5 rounded-lg px-4 py-2 mb-6 text-sm text-neutral-500 w-max">
            {project.credentials}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-6">
          
          {project.status === 'live' ? (
             <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center font-medium text-white hover:text-blue-400 transition-colors">
               Preview <FiArrowUpRight className="ml-1 w-5 h-5" />
             </a>
          ) : (
             <span className="flex items-center font-medium text-neutral-600 cursor-not-allowed">
               {project.status === 'local' ? <><FiMonitor className="mr-2"/> Local Only</> : <><FiLock className="mr-2"/> Internal</>}
             </span>
          )}

          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center font-medium text-neutral-400 hover:text-white transition-colors">
              <FiGithub className="mr-2 w-5 h-5" /> Source Code
            </a>
          )}

          {/* Details Toggle Button */}
          {project.highlights && (
            <button 
              onClick={() => setShowDrawer(true)} 
              className="flex items-center font-semibold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
            >
              <FiCpu className="mr-1.5 w-5 h-5 text-blue-500" /> {t('project_details_btn', 'Technical Highlights')}
            </button>
          )}

        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#0B0F19] relative min-h-[250px]">
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
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-neutral-400 hover:text-white cursor-pointer"
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
                className="px-6 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
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