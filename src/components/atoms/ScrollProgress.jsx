import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  // Mengambil nilai scroll dari layar (dari 0 hingga 1)
  const { scrollYProgress } = useScroll();
  
  // Menambahkan efek pegas (spring) agar pergerakannya sangat smooth dan tidak kaku
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-blue-500 origin-left z-[100]"
      // Efek neon/glow agar terlihat mahal
      style={{ 
        scaleX,
        boxShadow: "0px 0px 15px rgba(59,130,246,0.8)" 
      }}
    />
  );
};

export default ScrollProgress;