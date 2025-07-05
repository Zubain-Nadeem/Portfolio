import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Services from './Services';
import Footer from './Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#457b9d] flex flex-col items-center px-4 py-8">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
