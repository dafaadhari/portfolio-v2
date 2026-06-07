import React from 'react';
import ProjectCard from '../molecules/ProjectCard';
import { projects } from '../../data/portfolioData';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="bg-[#0B0F19] pt-24 pb-48 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 data-aos="fade-right" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {t('projects_title', 'Featured Projects')}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="sticky transition-all duration-500"
            style={{ top: `calc(10vh + ${index * 40}px)`, marginBottom: '40px' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;