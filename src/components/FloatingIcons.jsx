import React from "react";
import "./FloatingIcons.css";
import {
  FaReact,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaAndroid,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { BsRobot, BsStars } from "react-icons/bs";

// Floating Tech Particle Logos moving bottom to top slowly with subtle opacity
const floatingTechLogos = [
  { icon: <FaReact />, size: "28px", left: "6%", duration: "26s", delay: "0s" },
  { icon: <FaJs />, size: "24px", left: "16%", duration: "30s", delay: "4s" },
  { icon: <FaPython />, size: "26px", left: "28%", duration: "28s", delay: "8s" },
  { icon: <SiFirebase />, size: "24px", left: "38%", duration: "34s", delay: "2s" },
  { icon: <FaAndroid />, size: "28px", left: "52%", duration: "27s", delay: "6s" },
  { icon: <BsRobot />, size: "24px", left: "64%", duration: "32s", delay: "10s" },
  { icon: <FaNodeJs />, size: "26px", left: "76%", duration: "29s", delay: "3s" },
  { icon: <FaJava />, size: "26px", left: "88%", duration: "31s", delay: "7s" },
  { icon: <FaGithub />, size: "24px", left: "10%", duration: "33s", delay: "12s" },
  { icon: <FaHtml5 />, size: "22px", left: "22%", duration: "28s", delay: "14s" },
  { icon: <FaCss3Alt />, size: "22px", left: "44%", duration: "30s", delay: "11s" },
  { icon: <FaGitAlt />, size: "24px", left: "58%", duration: "35s", delay: "15s" },
  { icon: <FaDatabase />, size: "22px", left: "70%", duration: "29s", delay: "9s" },
  { icon: <FaCode />, size: "22px", left: "82%", duration: "32s", delay: "5s" },
  { icon: <BsStars />, size: "18px", left: "94%", duration: "24s", delay: "1s" },
];

function FloatingIcons() {
  return (
    <div className="ambient-background-layer" aria-hidden="true">
      {/* Subtle Atmospheric Ambient Glows */}
      <div className="ambient-glow-orb glow-top-sky"></div>
      <div className="ambient-glow-orb glow-bottom-indigo"></div>

      {/* Floating Tech Logos moving bottom to top slowly with calm opacity */}
      <div className="floating-logos-track">
        {floatingTechLogos.map((item, index) => (
          <div
            key={index}
            className="floating-tech-logo"
            style={{
              left: item.left,
              fontSize: item.size,
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloatingIcons;