import React from 'react';

const Hero = () => (
  <section id="hero" className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-[#a8dadc] via-white to-[#457b9d] text-center mb-12 rounded-xl shadow-lg relative overflow-hidden">
    <div className="mb-6">
      <div className="mx-auto w-28 h-28 rounded-full bg-blue-200 flex items-center justify-center shadow-lg border-4 border-white">
        <span className="text-5xl font-bold text-blue-700">ZN</span>
      </div>
    </div>
    <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4 drop-shadow">Hi, I'm Zubain Nadeem</h1>
    <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">Frontend Developer</p>
    <a href="#projects" className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200">View My Work</a>
  </section>
);

export default Hero; 