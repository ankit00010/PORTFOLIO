"use client";
import React, { useState } from "react";
import "./style.css";
// import { BiChevronDown, BiChevronRight } from "react-icons/bi";

// Define the folder names as a type
type FolderName = "bio" | "interests" | "education";

const SideBar = () => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFolderOpen, setIsFolderOpen] = useState<Record<FolderName, boolean>>(
    {
      bio: false,
      interests: false,
      education: false,
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const folderData = [
    {
      folders: [
        { name: "bio", subFolders: ["about-me.txt"] },
        { name: "interests", subFolders: ["goals.txt", "hobbies.txt"] },
        { name: "education", subFolders: ["high-school", "university"] },
      ],
    },
  ];

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleFolder = (folderName: FolderName) => {
    setIsFolderOpen((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return <div className="sidebar-container"></div>;
};

export default SideBar;
