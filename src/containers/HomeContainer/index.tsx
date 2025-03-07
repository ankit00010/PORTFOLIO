import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MyProfile from "@/public/myprofile.jpg";
import "./style.css";

const HomeContainer = () => (
  <div className="home-container">
    <div className="home-info">
      <p className="intro-text">// Hi all. I am</p>
      <h1 className="name-text">Ankit Mishra</h1>

      <div className="field-text-container">
        <MdOutlineKeyboardArrowRight size={40} className="field-icon" />
        <span className="field-text">Backend Developer</span>
      </div>

      <div className="home-info-sub">
        <p className="comment">// find my profile on Github :</p>

        <div>
          <span className="scope-text">const </span>
          <span className="variable-text">githubLink </span>=
          <span className="url-text">
            <a
              href="https://github.com/ankit00010"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <u>"https://github.com/ankit00010"</u>
            </a>
          </span>
        </div>

        {/* <div>
          <span className="scope-text">const </span>
          <span className="variable-text">linkedinLink </span>=
          <span className="url-text">
            <a
              href="https://www.linkedin.com/in/ankit-ravindra-mishra-19050121a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              "https://www.linkedin.com/in/ankit-ravindra-mishra-19050121a/"
            </a>
          </span>
        </div> */}
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

export default HomeContainer;
