import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, direction = "up", delay = 0, duration = 0.6, className = "" }) => {
  // Menentukan posisi awal bersembunyi berdasarkan arah (direction)
  const hiddenVariants = {
    up: { opacity: 0, y: 50, x: 0 },
    down: { opacity: 0, y: -50, x: 0 },
    left: { opacity: 0, y: 0, x: 50 },    // Datang dari kanan ke kiri
    right: { opacity: 0, y: 0, x: -50 },  // Datang dari kiri ke kanan
    none: { opacity: 0, y: 0, x: 0 }      // Hanya efek pudar (fade-in) biasa
  };

  const variants = {
    hidden: hiddenVariants[direction],
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeOut",
        delay: delay
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animasi jalan jika 20% elemen masuk layar
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;