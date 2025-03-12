"use client";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { useRouter } from "next/navigation";
import { navbarData } from "./constants";
import { AdminContext, AdminContextType } from "@/context/admin_context";
const Navbar = () => {
  const router = useRouter();
  const { currentPath } = useContext(AdminContext) as AdminContextType;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const pathName = currentPath;
    const index = navbarData.findIndex((item) => item.link === pathName);

    setActiveIndex(index !== -1 ? index : null);
  }, [currentPath]);

  return (
    <div className="navbar-container">
      {navbarData.map((data, index) => (
        <div
          className={`boxes ${data.className} ${
            activeIndex === index ? "active" : ""
          }`}
          key={index}
          onClick={() => {
            router.push(`${data.link}`);
            setActiveIndex(index);
          }}
        >
          <span>{data.navBarname}</span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
