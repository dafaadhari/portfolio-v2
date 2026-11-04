import { useState, lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import CustomCursor from './components/atoms/CustomCursor';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import Footer from './components/organisms/Footer';
import ScrollProgress from './components/atoms/ScrollProgress';
import ScrollToHash from './components/atoms/ScrollToHash';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

// Below-the-fold components lazy loaded for optimal initial page rendering
const Story = lazy(() => import('./components/organisms/Story'));
const Experience = lazy(() => import('./components/organisms/Experience'));
const Summary = lazy(() => import('./components/organisms/Summary'));
const Contact = lazy(() => import('./components/organisms/Contact'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

function App() {
  const [currentPath] = useState(window.location.pathname);

  if (currentPath !== '/') {
    return (
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen bg-beton selection:bg-ink selection:text-paper">
          <CustomCursor />
          <Suspense fallback={<div className="min-h-screen bg-beton" />}>
            <NotFound />
          </Suspense>
        </div>
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-beton selection:bg-ink selection:text-paper">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <Suspense fallback={<div className="relative z-10 py-24 bg-beton" />}>
            <Story />
            <Experience />
            <Summary />
            <Contact />
            <ScrollToHash />
          </Suspense>
        </main>

        <Footer />

        <Analytics />
        <SpeedInsights />
      </div>
    </MotionConfig>
  );
}

export default App;
