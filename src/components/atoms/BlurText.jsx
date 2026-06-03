import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BlurText = ({ text, delay = 0, className = '' }) => {
  const ref = useRef(null);
  // Animasi hanya berjalan sekali saat elemen terlihat di layar
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      // Mulai dari bawah (y: 15), blur tebal, dan transparan
      initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
      // Bergerak ke posisi asli, blur hilang, dan jelas
      animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default BlurText;