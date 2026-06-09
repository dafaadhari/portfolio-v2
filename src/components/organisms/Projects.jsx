import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../molecules/ProjectCard';
import { projects } from '../../data/portfolioData';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack', 'Front-End'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-[#0B0F19] pt-24 pb-48 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 data-aos="fade-right" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-10">
          {t('projects_title', 'Featured Projects')}
        </h2>

        <div data-aos="fade-up" className="flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-blue-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
              key={project.id} 
              className="sticky transition-all duration-500"
              style={{ top: `calc(10vh + ${index * 40}px)`, marginBottom: '40px' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;