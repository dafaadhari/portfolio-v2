import React from 'react';

const techStack = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', bg: 'bg-white p-1 rounded' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const Stats = () => {
  return (
    <section className="py-24 bg-[#0B0F19] border-b border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* TECH STACK SECTION */}
        <div className="mb-24">
          <h2 data-aos="fade-up" className="text-sm font-bold text-neutral-500 mb-10 uppercase tracking-[0.2em]">Tech Stack & Tools</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techStack.map((tech, index) => (
              <div 
                key={index} data-aos="fade-up" data-aos-delay={index * 50} 
                className="flex flex-col items-center gap-3 group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-105"
              >
                <div className="relative">
                   <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                   <img src={tech.icon} alt={tech.name} className={`relative w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-700 ${tech.bg || ''}`} />
                </div>
                <span className="text-xs font-medium text-neutral-500 group-hover:text-white transition-colors duration-500">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GITHUB ACTIVITY SECTION */}
        <div>
          <h2 data-aos="fade-up" className="text-sm font-bold text-neutral-500 mb-10 uppercase tracking-[0.2em]">GitHub Activity</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            
            {/* Card Profile Minimalis */}
            <div data-aos="fade-right" className="w-full md:w-[400px] flex items-center #18181b rounded-xl border border-white/10 p-6 hover:border-white/30 transition-colors h-[170px]">
              <div className="flex items-center gap-6 w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
                  <img src="https://avatars.githubusercontent.com/dafaadhari" alt="Dafa's Avatar" className="relative w-20 h-20 rounded-full border border-white/20 p-1 object-cover" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Dafa Adhari</h3>
                  <p className="text-sm text-blue-400 mb-4">@dafaadhari</p>
                  <a href="https://github.com/dafaadhari" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-lg border border-white/10 transition-colors">
                    Follow & View
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="w-full md:w-[400px] bg-[#050505] rounded-xl border border-white/10 p-4 transition-colors flex items-center justify-center h-[170px] relative overflow-hidden group hover:border-blue-500/50">
              
              <div className="absolute -inset-4 bg-blue-600/10 blur-2xl rounded-full animate-pulse group-hover:bg-blue-600/20 transition-all duration-500"></div>
              
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=dafaadhari&background=05050500&hide_border=true&title_color=FFFFFF&text_color=A3A3A3&sideNums=FFFFFF&sideLabels=A3A3A3&ring=3B82F6&fire=3B82F6&currStreakLabel=3B82F6&currStreakNum=FFFFFF" 
                alt="GitHub Streak" 
                className="w-full h-full object-contain relative z-10"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;