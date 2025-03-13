import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin,FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

import { SiGmail } from "react-icons/si";

const ContactMeSideBar = () => {
  const router = useRouter();
  const contact_me = [
    {
      name: "ankitmishra.dev11@gmail.com",
      icon: <SiGmail color="#D14836" size={20} />,
      link: "mailto:ankitmishra.dev11@gmail.com",
    },
    {
      name: "+91 9326413041",
      icon: <FaPhoneAlt color="#E5E5E5" size={20} />,
      link: "tel:+919326413041",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin color="#0077B5" size={20} />,
      link: "https://www.linkedin.com/in/ankit-ravindra-mishra-19050121a/",
    },
    {
      name: "GitHub",
      icon: <FaGithub color="#E5E5E5" size={20} />,
      link: "https://github.com/ankit00010",
    },
    {
        name: "Twitter",
        icon: <FaXTwitter color="#E5E5E5" size={20} />,
        link: "https://x.com/dev11_ankit",
      },
  ];

  return (
    <div className="contact-sidebar-container">
      <ul className="contact-skills-list">
        {contact_me.map((contact, index) => (
          <li
            key={index}
            className="contact-item"
            onClick={() => router.push(contact.link)}
          >
            <span className="contact-icons">{contact.icon}</span>
            <span className="contact-names">{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactMeSideBar;
