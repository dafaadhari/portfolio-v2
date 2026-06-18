import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import InteractiveGrid from '../atoms/InteractiveGrid';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
         <img 
            src="/assets/images/profil2.jpg" 
            alt="Background" 
            className="w-full h-full object-cover object-center grayscale opacity-40"
         />
         <div className="absolute inset-0 bg-[#0B0F19]/35 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/20 via-transparent to-[#0B0F19]"></div>
         <InteractiveGrid />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-start md:items-center text-left md:text-center mt-12"
      >
         
         {/* Nama Utama (Dibiarkan statis karena nama orang tidak diterjemahkan) */}
         <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-2 drop-shadow-lg leading-[1.05]">
           Moch Dapa Adhari
         </motion.h1>
         
         {/* Subtitle */}
         <motion.h2 variants={itemVariants} className="text-lg sm:text-xl md:text-2xl tracking-[.25em] text-blue-500 font-bold mb-4 drop-shadow-md">
           {t('hero_subtitle', 'Junior Software Engineer')}
         </motion.h2>
         
         {/* Deskripsi */}
         <motion.p variants={itemVariants} className="max-w-2xl text-neutral-300 text-sm md:text-base font-light leading-relaxed mb-12 drop-shadow-md">
           {t('hero_description')}
         </motion.p>
         
         {/* Tombol Resume */}
         <motion.a variants={itemVariants} href="/assets/docs/CV_MOCHAMAD DAPA ADHARI_EN.pdf" download className="group w-full md:w-auto inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
           {t('hero_button', 'Resume')}
         </motion.a>

      </motion.div>
    </section>
  );
};

export default Hero;