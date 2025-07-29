import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur shadow flex justify-between rounded-2xl mb-5 items-center px-4 sm:px-6 py-3">
      <div className="flex items-center gap-2">
        <span className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">ZN</span>
        <span className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">Zubain Nadeem</span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </nav>
      {/* Hamburger Icon */}
      <button
        className="md:hidden text-2xl text-blue-700 focus:outline-none ml-2"
        onClick={handleMenuToggle}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="fixed inset-0 bg-black/60 z-50 flex flex-col items-end md:hidden">
          <div className="bg-white w-3/4 max-w-xs h-full p-8 flex flex-col gap-8 shadow-2xl animate-slide-in">
            <button
              className="self-end text-2xl text-blue-700 mb-6 focus:outline-none"
              onClick={handleMenuToggle}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col gap-6 text-gray-700 font-semibold text-lg">
              <li><a href="#hero" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#about" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#skills" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors">Skills</a></li>
              <li><a href="#projects" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#services" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#contact" onClick={handleLinkClick} className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

// Tailwind animation for slide-in (add to global CSS if not present):
// @keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
// .animate-slide-in { animation: slide-in 0.3s ease-out; } 