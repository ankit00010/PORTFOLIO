import React from "react";
import "./style.css";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";

const ProjectSidebar = () => {
  const skills = [
    { name: "React", icon: <FaReact color="#61DBFB" size={20} /> },
    { name: "NextJs", icon: <SiNextdotjs color="#E5E5E5" size={20} /> },
    { name: "Nodejs", icon: <FaNodeJs color="#3C873A" size={20} /> },
    { name: "Express Js", icon: <SiExpress color="#E5E5E5" size={20} /> },
    { name: "Mongodb", icon: <SiMongodb color="#47A248" size={20} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={20} /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={20} /> },
  ];

  return (
    <div className="project-sidebar-container">
      <ul className="project-skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-icons">{skill.icon}</span>
            <span className="skill-names">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSidebar;
