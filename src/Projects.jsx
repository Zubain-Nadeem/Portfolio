import React from 'react';

const projects = [
 {
  title: 'Green Protocol',
  description: 'A simple React-based website created to test and demonstrate my frontend development skills using React.',
  link: 'https://my-first-react-project-omega-three.vercel.app/',
},
{
  title: 'Mein Profilbild',
  description: 'A photo gallery-style website built with React, inspired by modern graphic design principles.',
  link: 'https://meinprofilbild-react-clone.vercel.app/',
},
{
  title: 'Weather App',
  description: 'A dynamic weather application built with JavaScript that displays real-time weather data.',
  link: 'https://20-java-script-challenges.vercel.app/',
}

];

const Projects = () => (
  <section id="projects" className="max-w-4xl w-full bg-white/90 rounded-2xl shadow-xl p-10 mx-auto mb-12 border border-blue-100">
    <h2 className="text-3xl font-bold text-blue-800 mb-8">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 shadow hover:shadow-2xl transition group">
          <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:underline">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a href={project.link} className="text-blue-600 hover:underline font-medium">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 