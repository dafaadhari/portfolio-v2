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
      // The difference blend keeps the bar visible on both the grey and the dark sections.
      className="fixed top-0 left-0 right-0 h-1 bg-white mix-blend-difference origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
