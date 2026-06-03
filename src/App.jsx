import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import Stats from './components/organisms/Stats';
import Experience from './components/organisms/Experience';
import Projects from './components/organisms/Projects';
import Gallery from './components/organisms/Gallery';
import Contact from './components/organisms/Contact'; 

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] selection:bg-blue-500/30">
      <Navbar /> {/* Navigasi Kaca */}

      <main>
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;