import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="bg-[#0B0F19] py-32 text-center">
      <div data-aos="zoom-in" className="max-w-3xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get In Touch</h2>
        <p className="text-neutral-400 mb-16 text-lg font-light max-w-lg mx-auto">
          Feel free to reach out for collaboration, project discussion, or job opportunities.
        </p>
        
        <div className="flex justify-center gap-6 mb-20">
          <a href="https://github.com/dafaadhari" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 text-neutral-400 rounded-full flex items-center justify-center border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
            <FiGithub className="w-6 h-6" />
          </a>
          
          <a href="https://www.linkedin.com/in/dafa-adhari/" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 text-neutral-400 rounded-full flex items-center justify-center border border-white/10 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300">
            <FiLinkedin className="w-6 h-6" />
          </a>
          
          <a href="mailto:dafaadhari01@gmail.com" className="w-14 h-14 bg-white/5 text-neutral-400 rounded-full flex items-center justify-center border border-white/10 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
            <FiMail className="w-6 h-6" />
          </a>
          
          <a href="https://www.instagram.com/mochdafaadhari/" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 text-neutral-400 rounded-full flex items-center justify-center border border-white/10 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300">
            <FiInstagram className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-neutral-600 font-medium tracking-wide">
          &copy; {currentYear} Mochamad Dapa Adhari. All rights reserved.
        </p>

      </div>
    </section>
  );
};

export default Contact;