import React from 'react';
import { FiArrowUpRight, FiLock, FiMonitor } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#151B2B] rounded-2xl overflow-hidden shadow-xl border border-white/5 h-auto md:h-[450px]">
      
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">{project.title}</h3>
        <p className="text-neutral-400 text-base md:text-lg mb-8 font-light leading-relaxed">
          {project.description}
        </p>

        {project.credentials && (
          <div className="inline-block bg-black/20 border border-white/5 rounded-lg px-4 py-2 mb-6 text-sm text-neutral-500 w-max">
            {project.credentials}
          </div>
        )}

        <div className="mt-auto flex gap-6">
          {project.status === 'live' ? (
             <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center font-medium text-white hover:text-blue-400 transition-colors">
               Preview <FiArrowUpRight className="ml-1 w-5 h-5" />
             </a>
          ) : (
             <span className="flex items-center font-medium text-neutral-600 cursor-not-allowed">
               {project.status === 'local' ? <><FiMonitor className="mr-2"/> Local Only</> : <><FiLock className="mr-2"/> Internal</>}
             </span>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#0B0F19] relative min-h-[250px]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover object-left-top opacity-90 hover:opacity-100 transition-opacity duration-500" 
        />
      </div>

    </div>
  );
};

export default ProjectCard;