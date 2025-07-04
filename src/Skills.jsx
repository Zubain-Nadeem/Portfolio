import React from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub />   },
  { name: 'React', icon: <FaReact /> },
];

const Skills = () => (
  <section id="skills" className="max-w-2xl w-full bg-white/90 rounded-2xl shadow-xl p-10 mx-auto mb-12 border border-blue-100">
    <h2 className="text-3xl font-bold text-blue-800 mb-6">Skills</h2>
    <ul className="flex flex-wrap gap-5 justify-center">
      {skills.map(skill => (
        <li key={skill.name} className="flex flex-col items-center gap-2 bg-blue-50 px-6 py-4 rounded-xl shadow hover:shadow-lg transition">
          <span className="text-3xl">{skill.icon}</span>
          <span className="text-blue-800 font-semibold text-lg">{skill.name}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills; 