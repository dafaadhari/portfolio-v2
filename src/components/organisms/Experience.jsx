import React from 'react';
import ExperienceItem from '../molecules/ExperienceItem';
import { experiences } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0B0F19] pt-24 pb-16 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 data-aos="fade-down" className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience
          </h2>
          <p data-aos="fade-up" className="text-lg font-light text-gray-400">
            My professional journey and technical growth.
          </p>
        </div>

        {/* Container Mapping Data */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={exp.id} 
              exp={exp} 
              isLast={index === experiences.length - 1} 
              isActive={index === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;