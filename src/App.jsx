import { useState, lazy, Suspense } from 'react';
import CustomCursor from './components/atoms/CustomCursor';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import Footer from './components/organisms/Footer';
import ScrollProgress from './components/atoms/ScrollProgress';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

// Below-the-fold components lazy loaded for optimal initial page rendering
const Stats = lazy(() => import('./components/organisms/Stats'));
const Experience = lazy(() => import('./components/organisms/Experience'));
const Projects = lazy(() => import('./components/organisms/Projects'));
const Gallery = lazy(() => import('./components/organisms/Gallery'));
const Contact = lazy(() => import('./components/organisms/Contact'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

function App() {
  const [currentPath] = useState(window.location.pathname);

  if (currentPath !== '/') {
    return (
      <div className="relative min-h-screen bg-[#0B0F19] selection:bg-blue-500/30">
        <CustomCursor />
        <Suspense fallback={<div className="min-h-screen bg-[#0B0F19]" />}>
          <NotFound />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0B0F19] selection:bg-blue-500/30">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<div className="py-24 bg-[#0B0F19]" />}>
          <Stats />
          <Experience />
          <Projects />
          <Gallery />
          <Contact />
        </Suspense>
        <Footer />
      </main>

      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;