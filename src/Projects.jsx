import React from 'react';

const projects = [
  {
    title: 'Green Protocol Landing',
    description: 'A single-page React + Tailwind landing page for a fictional eco-blockchain startup. Fully responsive layout with clean UI and fast performance.',
    live: 'https://my-first-react-project-omega-three.vercel.app/',
    code: 'https://github.com/Zubain-Nadeem/Green-Protocol', 
  },
  {
    title: 'Mein Profilbild Clone',
    description: 'A modern photo gallery clone built in React. Inspired by clean graphic design trends, with responsive layout and subtle animations.',
    live: 'https://meinprofilbild-react-clone.vercel.app/',
    code: 'https://github.com/Zubain-Nadeem/Meinprofilbild-React',
  },
  {
    title: 'WeatherNow App',
    description: 'A JavaScript weather app that fetches live weather data using OpenWeatherMap API. Supports location-based lookup and unit toggle.',
    live: 'https://20-java-script-challenges.vercel.app/',
    code: 'https://github.com/Zubain-Nadeem/20-JavaScript-Challenges/tree/main/Level-04-Weatherapp',
  }
];

const Projects = () => (
  <section id="projects" className="max-w-4xl w-full bg-white/90 rounded-2xl shadow-xl p-10 mx-auto mb-12 border border-blue-100">
    <h2 className="text-3xl font-bold text-blue-800 mb-8">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 shadow hover:shadow-2xl transition group"
        >
          <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:underline">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex flex-col gap-1">
            <a href={project.live} target="_blank" className="text-blue-600 hover:underline font-medium">🔗 Live Demo</a>
            <a href={project.code} target="_blank" className="text-blue-600 hover:underline font-medium">💻 GitHub Code</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
