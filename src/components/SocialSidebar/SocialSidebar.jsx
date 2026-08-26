import React from "react";
import "./SocialSidebar.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Siva-jerry",
    color: "#7c3aed",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/siva-m-823698357",
    color: "#0a66c2",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/example_of_innocent__",
    color: "#e1306c",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:sivajerry1433@gmail.com",
    color: "#ea4335",
  },
];

function SocialSidebar() {
  return (
    <aside className="social-sidebar" aria-label="Social Links">
      <div className="social-sidebar-container">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-sidebar-btn"
            aria-label={item.name}
            title={item.name}
          >
            <span className="social-sidebar-icon">{item.icon}</span>
            <span className="social-tooltip">{item.name}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default SocialSidebar;
