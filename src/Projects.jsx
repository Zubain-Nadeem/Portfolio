import React from 'react';

const projects = [
  {
    title: 'Green Protocol ',
    description: 'My First React website to Test my skills .',
    link: '#',
  },
  {
    title: 'Mein Profilbild',
    description: 'Photo Gragic website built with React.',
    link: 'https://meinprofilbild-react-clone.vercel.app/',
  },
  {
    title: 'Weather app',
    description: 'Make Weather App by using Javascript',
    link: '#',
  },
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