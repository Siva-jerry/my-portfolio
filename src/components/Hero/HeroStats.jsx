import React from "react";
import { FaGraduationCap, FaFolderOpen, FaCertificate, FaCode } from "react-icons/fa";

function HeroStats() {
  const statItems = [
    {
      icon: <FaGraduationCap />,
      value: "B.Tech",
      label: "IT Student (Final Year)",
    },
    {
      icon: <FaFolderOpen />,
      value: "8+",
      label: "Featured Projects",
    },
    {
      icon: <FaCertificate />,
      value: "20+",
      label: "Certifications",
    },
    {
      icon: <FaCode />,
      value: "Full Stack & AI",
      label: "Developer Profile",
    },
  ];

  return (
    <div className="hero-stats-grid">
      {statItems.map((item, index) => (
        <div className="hero-stat-pill glass-panel" key={index}>
          <div className="hero-stat-icon-wrap">
            {item.icon}
          </div>
          <div className="hero-stat-text">
            <h3 className="hero-stat-val">
              {item.value}
            </h3>
            <p className="hero-stat-lbl">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;