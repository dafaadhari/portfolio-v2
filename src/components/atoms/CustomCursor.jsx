import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Pointer-based cursor only makes sense with a fine pointer and no reduced-motion preference.
const supportsCustomCursor = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(pointer: coarse)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CustomCursor = () => {
  // Motion values drive the cursor directly, so mouse movement never triggers a React re-render.
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring lags slightly behind the pointer for a smooth spring feel.
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  // Resolved once on mount so no state is written from inside the effect.
  const [enabled] = useState(supportsCustomCursor);

  useEffect(() => {
    if (!enabled) return;

    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* Ring that trails the pointer (desktop only) */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Dot pinned exactly to the pointer */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 bg-blue-500 rounded-full pointer-events-none z-[10000]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
};

export default CustomCursor;
