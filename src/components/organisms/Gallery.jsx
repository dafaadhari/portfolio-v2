import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../../data/portfolioData';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal';
import { FiPlay } from 'react-icons/fi';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="bg-[#0B0F19] pt-16 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <ScrollReveal direction="down" delay={0}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t('gallery_title', 'Creative Media & AI')}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg font-light text-gray-400">
              {t('gallery_subtitle', 'Exploring visual aesthetics through AI generation and cinematic production.')}
            </p>
          </ScrollReveal>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="none" delay={0.4 + (index * 0.15)}>
              <div 
                onClick={() => setSelectedItem(item)}
                className="group relative h-64 md:h-80 overflow-hidden rounded-xl bg-[#050505] shadow-lg border border-white/10 cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity duration-500"></div>

                {/* Hover Play Button Overlay */}
                {item.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-14 h-14 rounded-full bg-blue-600/90 flex items-center justify-center text-white border border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.6)] transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <FiPlay className="w-6 h-6 ml-0.5" />
                    </div>
                  </div>
                )}

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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121826]/95 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.25)] flex flex-col md:flex-row cursor-default"
            >
              {/* Visual Section */}
              <div className="w-full md:w-3/5 bg-black/50 relative flex items-center justify-center min-h-[300px]">
                {selectedItem.videoUrl ? (
                  selectedItem.videoUrl.includes('youtube.com') || selectedItem.videoUrl.includes('youtu.be') ? (
                    <iframe
                      src={selectedItem.videoUrl.replace('watch?v=', 'embed/')}
                      title={selectedItem.title}
                      className="w-full h-full min-h-[300px] md:min-h-[400px] border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video 
                      src={selectedItem.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-contain max-h-[500px]"
                      poster={selectedItem.image}
                    />
                  )
                ) : (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-contain max-h-[500px]"
                  />
                )}
              </div>

              {/* Info Section */}
              <div className="w-full md:w-2/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] md:text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 block">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed">
                    {selectedItem.description[lang]}
                  </p>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] cursor-pointer active:bg-blue-500 active:scale-95 active:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    {t('gallery_close', 'Close')}
                  </button>
                </div>
              </div>

              {/* Close Button floating */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 text-white transition-all cursor-pointer active:bg-black/80 active:scale-95"
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;