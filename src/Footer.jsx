import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer id='contact' className="w-full py-8 bg-white/80 text-center text-gray-700 mt-8 rounded-t-xl shadow-inner">
    <div className="flex flex-col items-center gap-4 mb-4">
      <span className="text-lg font-semibold">Connect with me</span>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/zubain-nadeem" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 text-3xl transition-colors" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/zubain-nadeem-5b67852b2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 text-3xl transition-colors" title="LinkedIn"><FaLinkedin /></a>
      </div>
    </div>
    <div className="font-medium">&copy; {new Date().getFullYear()} Zubain Nadeem. All rights reserved.</div>
  </footer>
);

export default Footer; 