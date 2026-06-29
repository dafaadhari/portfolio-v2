import { useState } from 'react';
import ExperienceItem from '../molecules/ExperienceItem';
import { experiences } from '../../data/portfolioData';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal'; // Pastikan path ini sesuai

const Experience = () => {
  const { t } = useTranslation();
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <section id="experience" className="bg-[#0B0F19] pt-24 pb-16 border-b border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          {/* Judul turun dari atas (delay 0) */}
          <ScrollReveal direction="down" delay={0}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t('exp_title', 'Experience')}
            </h2>
          </ScrollReveal>
          
          {/* Subjudul naik dari bawah (delay 0.2) */}
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg font-light text-gray-400">
              {t('exp_subtitle', 'My professional journey and technical growth.')}
            </p>
          </ScrollReveal>
        </div>

        {/* Container Mapping Data */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            /* Rumus index * 0.2 menciptakan efek muncul bergantian secara berurutan */
            <ScrollReveal key={exp.id} direction="up" delay={index * 0.1}>
              <ExperienceItem 
                exp={exp} 
                isLast={index === experiences.length - 1} 
                isActive={activeExperience === index}
                onSelect={() => setActiveExperience(index)}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
