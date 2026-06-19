import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../atoms/ScrollReveal';

const techStack = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 88 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', bg: 'bg-white p-1 rounded', level: 82 },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', level: 92 },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 80 },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', level: 85 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 80 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 88 },
];

const Stats = () => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-24 bg-[#0B0F19] border-b border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* TECH STACK SECTION */}
        <div className="mb-24">
          <ScrollReveal direction="up">
            <h2 className="text-sm font-bold text-neutral-500 mb-6 uppercase tracking-[0.2em]">Tech Stack & Tools</h2>
          </ScrollReveal>

          {/* Toggle Button for Details */}
          <ScrollReveal direction="up" delay={0.1}>
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="mb-12 px-6 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 font-semibold border border-blue-500/30 hover:border-blue-500/50 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] cursor-pointer active:bg-blue-600/30 active:shadow-[0_0_25px_rgba(37,99,235,0.3)] active:scale-98"
            >
              {showDetails ? t('stats_hide_expertise') : t('stats_show_expertise')}
            </button>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techStack.map((tech, index) => {
              const radius = 33;
              const dashArray = 2 * Math.PI * radius; // ~207.3
              const dashOffset = dashArray - (dashArray * tech.level) / 100;

              return (
                <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                  <div 
                    className="flex flex-col items-center gap-3 group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-105"
                  >
                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                       {/* Glow Background */}
                       <div className="absolute inset-0 bg-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                       
                       {/* Progress Ring */}
                       <AnimatePresence>
                         {showDetails && (
                           <motion.svg 
                             initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                             animate={{ opacity: 1, scale: 1, rotate: -90 }}
                             exit={{ opacity: 0, scale: 0.8 }}
                             transition={{ duration: 0.5, ease: "easeOut" }}
                             className="absolute w-full h-full z-10 pointer-events-none drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                             viewBox="0 0 80 80"
                           >
                             <circle
                               cx="40"
                               cy="40"
                               r={radius}
                               className="stroke-neutral-800/40"
                               strokeWidth="3.5"
                               fill="transparent"
                             />
                             <motion.circle
                               cx="40"
                               cy="40"
                               r={radius}
                               className="stroke-blue-500"
                               strokeWidth="3.5"
                               fill="transparent"
                               strokeDasharray={dashArray}
                               initial={{ strokeDashoffset: dashArray }}
                               animate={{ strokeDashoffset: dashOffset }}
                               transition={{ duration: 1.2, delay: index * 0.05 + 0.1, ease: "easeOut" }}
                               strokeLinecap="round"
                             />
                           </motion.svg>
                         )}
                       </AnimatePresence>

                       {/* Icon inside */}
                       <img 
                         src={tech.icon} 
                         alt={tech.name} 
                         className={`relative z-20 w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-700 ${tech.bg || ''}`} 
                       />
                       
                       {/* Level Badge */}
                       <AnimatePresence>
                         {showDetails && (
                           <motion.span 
                             initial={{ opacity: 0, y: 5 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: 5 }}
                             className="absolute -top-1 -right-1 z-30 bg-blue-600 text-white font-bold text-[9px] px-1.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.6)]"
                           >
                             {tech.level}%
                           </motion.span>
                         )}
                       </AnimatePresence>
                    </div>
                    <span className="text-xs font-medium text-neutral-500 group-hover:text-white transition-colors duration-500">{tech.name}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* GITHUB ACTIVITY SECTION */}
        <div>
          <ScrollReveal direction="up">
            <h2 className="text-sm font-bold text-neutral-500 mb-10 uppercase tracking-[0.2em]">GitHub Activity</h2>
          </ScrollReveal>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            
            {/* Card Profile Minimalis */}
            <ScrollReveal direction="right" delay={0.2} className="w-full md:w-[400px]">
              <div className="w-full flex items-center bg-[#18181b] rounded-xl border border-white/10 p-6 hover:border-white/30 transition-colors h-[170px]">
                <div className="flex items-center gap-6 w-full">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
                    <img src="https://avatars.githubusercontent.com/dafaadhari" alt="Dafa's Avatar" className="relative w-20 h-20 rounded-full border border-white/20 p-1 object-cover" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">Dafa Adhari</h3>
                    <p className="text-sm text-blue-400 mb-4">@dafaadhari</p>
                    <a href="https://github.com/dafaadhari" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-lg border border-white/10 transition-colors active:bg-white/20 active:scale-95">
                      Follow & View
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* GitHub Streak Card */}
            <ScrollReveal direction="left" delay={0.2} className="w-full md:w-[400px]">
              <div className="w-full bg-[#050505] rounded-xl border border-white/10 p-4 transition-colors flex items-center justify-center h-[170px] relative overflow-hidden group hover:border-blue-500/50">
                <div className="absolute -inset-4 bg-blue-600/10 blur-2xl rounded-full animate-pulse group-hover:bg-blue-600/20 transition-all duration-500"></div>
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=dafaadhari&background=05050500&hide_border=true&title_color=FFFFFF&text_color=A3A3A3&sideNums=FFFFFF&sideLabels=A3A3A3&ring=3B82F6&fire=3B82F6&currStreakLabel=3B82F6&currStreakNum=FFFFFF" 
                  alt="GitHub Streak" 
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;