"use client";
import React from "react";
import "./style.css";
import prod1 from "@/public/prod1.jpg";
import prod2 from "@/public/prod29.jpg";
import ProjectCard from "@/components/ProjectCard";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";


const ProjectContainer = () => {
  const productInfo = [
    {
      image: prod1,
      product_des: "A logistics website connecting companies, clients, and owners. 🚀",
      btnlabel: "view-project",
      project_link: "https://aal-logistics-website.vercel.app/",
      title: "_logistic-website",
      icon: <FaReact size={30} />,
    },
    {
      image: prod2,
      product_des: "WhatsApp Chatbot for Efficient Customer Support & Engagement🤖📱",
      btnlabel: "view-project",

      project_link: "https://github.com/ankit00010/QuickAssist-Chatbot-Server/",
      title: "_quick-Assist-Chatbot",
      icon: <RiNextjsLine size={30} />,
    },
    // {
    //   image: prod1,
    //   product_des: "Here is My Description About the Project",
    //   btnlabel: "view-project",
    //   project_link: "https://aal-logistics-website.vercel.app/",
    //   title: "_quick-Assist-Chatbot",
    //   icon: <FaReact size={24} />,
    // },
  ];
  return (
    <div className="project-container">
      {productInfo.map((data, index) => (
        <div className="project-section" key={index}>
          <ProjectCard
            image={data.image}
            description={data.product_des}
            btnlabel={data.btnlabel}
            title={data.title}
            project_no={index + 1}
            project_link={data.project_link}
            icon={data.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
