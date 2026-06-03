import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-center py-10 border-t border-gray-800">
      <p className="text-gray-400 text-sm font-light tracking-wide">
        &copy; {currentYear} Mochamad Dapa Adhari. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;