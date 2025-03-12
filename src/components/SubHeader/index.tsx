"use client";
import React, { useContext } from "react";
import "./style.css";
import { AdminContext, AdminContextType } from "@/context/admin_context";
import { RxCross1 } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";
import { VscCollapseAll } from "react-icons/vsc";

const SubHeader = () => {
  const {
    currentPath,
    currentFile,
    isCrossOpen,
    setIsCrossOpen,
    setCollapseAll,
  } = useContext(AdminContext) as AdminContextType;

  if (currentPath === "/") {
    return null;
  }

  return (
    <div className="sub-header-container">
      <div className="main-file">
        <span>
          <FaChevronRight />
        </span>
        <span>
          {currentPath === "/projects"
            ? "projects"
            : currentPath === "/contact-me"
            ? "contacts"
            : "personal-info"}
        </span>
        <span onClick={() => setCollapseAll(true)}>
          {currentPath === "/about-me" && <VscCollapseAll size={18} />}
        </span>
      </div>

      {isCrossOpen &&
      currentPath !== "/projects" &&
      currentPath !== "/contact-me" ? (
        <div className="sub-header-currentfile">
          <span>{currentFile}</span>

          <span
            onClick={() => setIsCrossOpen(!isCrossOpen)}
            className="cross-icon"
          >
            <RxCross1 />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default SubHeader;
