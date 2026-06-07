import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // Dikurangi setengah ukuran (32/2) agar pas di tengah
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }
    }
  };

  return (
    <>
      {/* Kursor lingkaran yang mengikuti mouse dengan efek spring (hanya tampil di Desktop) */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate="default"
      />
      {/* Titik kecil tepat di tengah pointer asli */}
      <div 
        className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 bg-blue-500 rounded-full pointer-events-none z-[10000]"
        style={{ 
          transform: `translate(${mousePosition.x - 3}px, ${mousePosition.y - 3}px)` 
        }}
      />
    </>
  );
};

export default CustomCursor;