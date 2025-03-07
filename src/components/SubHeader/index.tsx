"use client";
import React, { useContext } from "react";
import "./style.css";
import { AdminContext, AdminContextType } from "@/context/admin_context";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const SubHeader = () => {
  const {
    currentPath,
    currentFile,
    isMainOpen,
    setisMainOpen,
    isCrossOpen,
    setIsCrossOpen,
  } = useContext(AdminContext) as AdminContextType;

  if (currentPath === "/") {
    return null;
  }

  return (
    <div className="sub-header-container">
      <div
        className="main-file"
        onClick={() => {
          setisMainOpen(!isMainOpen);
        }}
      >
        <span>{isMainOpen ? <FaChevronRight /> : <FaChevronDown />}</span>
        <span>personal-info</span>
      </div>

      {isCrossOpen && (
        <div className="sub-header-currentfile">
          <span>{currentFile}</span>

          <span onClick={() => setIsCrossOpen(!isCrossOpen)}>
            <RxCross1 />
          </span>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
