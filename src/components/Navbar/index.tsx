"use client";
import React, { useState } from "react";
import "./style.css";
import { useRouter } from "next/navigation";
import { navbarData } from "./constants";
const Navbar = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="navbar-container">
      {navbarData.map((data, index) => (
        <div
          className={` boxes ${data.className} ${
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
