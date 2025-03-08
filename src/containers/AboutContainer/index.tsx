"use client";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { AdminContext, AdminContextType } from "@/context/admin_context";
import { folders } from "@/components/SideBar/AboutMeSidebar/constants";

const AboutMeContainer = () => {
  const { currentIndex, currentFile, isCrossOpen } = useContext(
    AdminContext
  ) as AdminContextType;

  const newContent =
    folders[currentIndex.folderIndex]?.context?.[currentIndex.subFolderIndex] ||
    null;

  const isValidFile =
    currentFile ===
    folders[currentIndex.folderIndex]?.subFolders[currentIndex.subFolderIndex];

  // State to store content that persists even when the index changes
  const [storedContent, setStoredContent] = useState(newContent);

  // Update storedContent only if newContent is valid (prevents disappearance)
  useEffect(() => {
    if (isValidFile && newContent !== "No content available") {
      setStoredContent(newContent);
    }
  }, [newContent, isValidFile]);

  console.log("Current File name", currentFile);
  console.log("File Name", folders[currentIndex.folderIndex].name);

  return (
    <div className="content-container">
      <div className="content-display">{isCrossOpen && storedContent}</div>
    </div>
  );
};

export default AboutMeContainer;
