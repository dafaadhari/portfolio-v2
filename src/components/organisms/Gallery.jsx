import React from 'react';
import { galleryItems } from '../../data/portfolioData';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal'; // Pastikan path ini sesuai

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';

  return (
    <section id="gallery" className="bg-[#0B0F19] pt-16 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          {/* Judul turun dari atas */}
          <ScrollReveal direction="down" delay={0}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t('gallery_title', 'Creative Media & AI')}
            </h2>
          </ScrollReveal>
          
          {/* Subjudul naik dari bawah */}
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg font-light text-gray-400">
              {t('gallery_subtitle', 'Exploring visual aesthetics through AI generation and cinematic production.')}
            </p>
          </ScrollReveal>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            /* direction="none" memberikan efek fade-in murni yang sangat estetik untuk gambar */
            <ScrollReveal key={item.id} direction="none" delay={0.4 + (index * 0.15)}>
              <div 
                className="group relative h-64 md:h-80 overflow-hidden rounded-xl bg-[#050505] shadow-lg border border-white/10 cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[10px] md:text-xs font-bold text-blue-500 tracking-widest uppercase mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {item.description[lang]} 
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;