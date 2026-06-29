import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, direction = "up", delay = 0, duration = 0.5, className = "" }) => {
  // Menentukan posisi awal bersembunyi berdasarkan arah (direction)
  const hiddenVariants = {
    up: { opacity: 0, y: 20, x: 0 },
    down: { opacity: 0, y: -20, x: 0 },
    left: { opacity: 0, y: 0, x: 20 },    // Datang dari kanan ke kiri
    right: { opacity: 0, y: 0, x: -20 },  // Datang dari kiri ke kanan
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
      // Trigger lebih awal: cukup 10% elemen masuk + margin -80px di bawah viewport
      // agar konten mulai muncul tepat saat di-scroll, tidak menunggu lama.
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -70px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;