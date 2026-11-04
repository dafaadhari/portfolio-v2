import { useEffect, useRef, useState } from 'react';

const DOT_COLOR = 'rgba(13, 15, 18, 0.35)';
const lineColor = (opacity) => `rgba(13, 15, 18, ${opacity})`;
const MOUSE_RADIUS = 150;

// Desktop only: it responds to the pointer, and it would cost phones battery for little in return.
const supportsGrid = () =>
  window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const InteractiveGrid = () => {
  const canvasRef = useRef(null);
  const [enabled] = useState(supportsGrid);

  useEffect(() => {
    if (!enabled) return undefined;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const parent = canvas.parentElement;
    const mouse = { x: null, y: null };
    let width = 0;
    let height = 0;
    let particles = [];
    let frameId;
    let running = false;

    const createParticles = () => {
      const count = Math.min(Math.floor((width * height) / 22000), 60);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: Math.random() * 0.4 - 0.2,
        dy: Math.random() * 0.4 - 0.2,
        size: Math.random() * 1.6 + 0.8,
      }));
    };

    const handleResize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createParticles();
    };

    const line = (fromX, fromY, toX, toY, opacity) => {
      context.strokeStyle = lineColor(opacity);
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(fromX, fromY);
      context.lineTo(toX, toY);
      context.stroke();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = DOT_COLOR;

      particles.forEach((particle, index) => {
        if (particle.x > width || particle.x < 0) particle.dx = -particle.dx;
        if (particle.y > height || particle.y < 0) particle.dy = -particle.dy;

        if (mouse.x !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
            particle.x -= (dx / distance) * force * 1.5;
            particle.y -= (dy / distance) * force * 1.5;
            line(particle.x, particle.y, mouse.x, mouse.y, force * 0.25);
          }
        }

        particle.x += particle.dx;
        particle.y += particle.dy;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        for (let other = index + 1; other < particles.length; other++) {
          const distance = Math.hypot(particle.x - particles[other].x, particle.y - particles[other].y);
          if (distance < 110) line(particle.x, particle.y, particles[other].x, particles[other].y, (1 - distance / 110) * 0.12);
        }
      });
    };

    // The hero stays stuck behind the story, so an IntersectionObserver would never report it as
    // hidden. Scroll position tells us when it is covered, and the loop stops there.
    const shouldRun = () => !document.hidden && window.scrollY < window.innerHeight;

    const loop = () => {
      if (!shouldRun()) {
        running = false;
        return;
      }
      draw();
      frameId = requestAnimationFrame(loop);
    };

    const startIfNeeded = () => {
      if (running || !shouldRun()) return;
      running = true;
      loop();
    };

    const handleMouseMove = (event) => {
      const box = canvas.getBoundingClientRect();
      mouse.x = event.clientX - box.left;
      mouse.y = event.clientY - box.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    handleResize();
    startIfNeeded();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', startIfNeeded, { passive: true });
    document.addEventListener('visibilitychange', startIfNeeded);
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', startIfNeeded);
      document.removeEventListener('visibilitychange', startIfNeeded);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 intro-wait:opacity-0"
    />
  );
};

export default InteractiveGrid;
