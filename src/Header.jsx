import React from 'react';

const Header = () => (
  <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur shadow flex justify-between rounded-2xl mb-5 items-center px-6 py-3">
    <div className="flex items-center gap-2">
      <span className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">ZN</span>
      <span className="text-2xl font-bold text-blue-700 tracking-tight">Zubain Nadeem</span>
    </div>
    <nav>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#hero" className="hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
        <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
        <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header; 