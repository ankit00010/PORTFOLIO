import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MyProfile from "@/public/myprofile.jpg";
import "./style.css";

const HomeContainer = () => {
  return (
    <div className="home-container">
      <div className="home-info">
        <p className="intro-text">
          <span>{`// Hi all. I am`}</span>
        </p>

        <h1 className="name-text">Ankit Mishra</h1>

        <div className="field-text-container">
          <MdOutlineKeyboardArrowRight size={24} className="field-icon" />
          <span className="field-text">FullStack Developer</span>
        </div>

        <div className="home-info-sub">
          <p className="comment">
            <span>{`// find my profile on GitHub:`}</span>
          </p>

          <div>
            <span className="scope-text">const </span>
            <span className="variable-text">githubLink </span>=
            <span className="url-text">
              <a
                href="https://github.com/ankit00010"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>&quot;https://github.com/ankit00010&quot;</u>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="circular-glow">
        <Image
          src={MyProfile}
          alt="Ankit Mishra Profile Picture"
          width={400}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default HomeContainer;
