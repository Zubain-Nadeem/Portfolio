import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => (
  <footer id='contact' className="w-full py-8 bg-white/80 text-center text-gray-700 mt-8 rounded-t-xl shadow-inner px-2 sm:px-0">
    <div className="flex flex-col items-center gap-4 mb-4">
      <span className="text-base sm:text-lg font-semibold">Connect with me</span>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none">
        <a href="https://github.com/zubain-nadeem" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 text-2xl sm:text-3xl transition-colors" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/zubain-nadeem-5b67852b2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 text-2xl sm:text-3xl transition-colors" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://x.com/theZubain" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 text-2xl sm:text-3xl transition-colors" title="X / Twitter"><FaSquareXTwitter /></a>
        <a href="mailto:zubainali678@gmail.com" className="hover:text-blue-700 transition-colors text-2xl sm:text-3xl font-medium" title="Email">
          <IoMail />
        </a>
      </div>
    </div>
    <div className="font-medium text-xs sm:text-base">&copy; {new Date().getFullYear()} Zubain Nadeem. All rights reserved.</div>
  </footer>
);

export default Footer; 