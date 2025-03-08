import Image, { StaticImageData } from "next/image";
import React from "react";
interface ProjectCardProps {
  image: StaticImageData;
  description: string;
  btnlabel: string;
  project_no: number;
  title: string;
  project_link: string;
  icon:React.ReactNode;
}

import "./style.css";
import { useRouter } from "next/navigation";
const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  description,
  btnlabel,
  project_no,
  title,
  project_link,
  icon
}) => {
  const router = useRouter();
  const handleProjectClick = (link: string) => {
    router.push(`${link}`);
  };
  return (
    <div className="project-section">
      {/* Title Section */}
      <p className="project-title">
        <strong>Project {project_no}</strong> <span> {`//`} {title}</span>
      </p>

      <div className="project-card">
        {/* Image Section */}
        <div className="image-container">
          <Image
            src={image}
            alt="Project Thumbnail"
            width={300}
            height={200}
            className="project-image"
          />
          <div className="icon-badge">
           {icon}
          </div>
        </div>

        {/* Description  Section */}
        <div className="project-info">
          <p>{description}</p>
          <button
            className="project-button"
            onClick={() => handleProjectClick(project_link)}
          >
            {btnlabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
