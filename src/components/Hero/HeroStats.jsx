import React from "react";
import { FaGraduationCap, FaFolderOpen, FaCertificate, FaCode } from "react-icons/fa";

function HeroStats() {
  const statItems = [
    {
      icon: <FaGraduationCap />,
      value: "B.Tech",
      label: "IT Student (Final Year)",
      color: "#f59e0b",
    },
    {
      icon: <FaFolderOpen />,
      value: "8+",
      label: "Featured Projects",
      color: "#f97316",
    },
    {
      icon: <FaCertificate />,
      value: "20+",
      label: "Certifications",
      color: "#fbbf24",
    },
    {
      icon: <FaCode />,
      value: "MERN & AI",
      label: "Full Stack Developer",
      color: "#ea580c",
    },
  ];

  return (
    <div className="hero-stats-grid">
      {statItems.map((item, index) => (
        <div className="hero-stat-pill glass-panel" key={index}>
          <div
            className="hero-stat-icon-wrap"
            style={{
              color: item.color,
              background: `${item.color}15`,
            }}
          >
            {item.icon}
          </div>
          <div className="hero-stat-text">
            <h3 className="hero-stat-val">{item.value}</h3>
            <p className="hero-stat-lbl">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;