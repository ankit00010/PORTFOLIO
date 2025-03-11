"use client";
import React, { useContext } from "react";
import "./style.css";

import AboutMeSidebar from "./AboutMeSidebar";
import { AdminContext, AdminContextType } from "@/context/admin_context";
import ProjectSidebar from "./ProjectSidebar";

const SideBar = () => {
  const { currentPath } = useContext(AdminContext) as AdminContextType;
  return (
    <div>
      {currentPath === "/about-me" ? <AboutMeSidebar /> : <ProjectSidebar />}
    </div>
  );
};

export default SideBar;
