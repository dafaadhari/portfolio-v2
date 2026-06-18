import React, { useState } from 'react';
import CustomCursor from './components/atoms/CustomCursor';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import Stats from './components/organisms/Stats';
import Experience from './components/organisms/Experience';
import Projects from './components/organisms/Projects';
import Gallery from './components/organisms/Gallery';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import ScrollProgress from './components/atoms/ScrollProgress';
import NotFound from './components/pages/NotFound';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [currentPath] = useState(window.location.pathname);

  if (currentPath !== '/') {
    return (
      <div className="relative min-h-screen bg-[#0B0F19] selection:bg-blue-500/30">
        <CustomCursor />
        <NotFound />
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
        <Stats />
        <Experience />
        <Projects />
        <Gallery />
        <Contact />
        <Footer />
      </main>

      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;