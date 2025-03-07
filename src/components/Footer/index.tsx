import React from "react";
import "./style.css";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="footer-container">
      <div className="footer-text">
        <span>find me in : </span>
      </div>
      <div className="icons">
        <span>
          <FaXTwitter />
        </span>
      </div>
      <div
        className="icons"
        onClick={() =>
          router.push(
            "https://www.linkedin.com/in/ankit-ravindra-mishra-19050121a/"
          )
        }
      >
        <span>
          <FaLinkedinIn />
        </span>
      </div>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Footer;
