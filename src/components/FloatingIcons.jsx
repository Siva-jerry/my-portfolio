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

// 18 Floating Tech Logos moving bottom to top slowly with low opacity
const floatingTechLogos = [
  { icon: <FaReact />, size: "32px", left: "6%", duration: "24s", delay: "0s", color: "#facc15" },
  { icon: <FaJs />, size: "26px", left: "16%", duration: "28s", delay: "4s", color: "#fbbf24" },
  { icon: <FaPython />, size: "30px", left: "28%", duration: "26s", delay: "8s", color: "#f97316" },
  { icon: <SiFirebase />, size: "28px", left: "38%", duration: "32s", delay: "2s", color: "#ffca28" },
  { icon: <FaAndroid />, size: "34px", left: "52%", duration: "25s", delay: "6s", color: "#f59e0b" },
  { icon: <BsRobot />, size: "28px", left: "64%", duration: "30s", delay: "10s", color: "#ea580c" },
  { icon: <FaNodeJs />, size: "32px", left: "76%", duration: "27s", delay: "3s", color: "#fb923c" },
  { icon: <FaJava />, size: "30px", left: "88%", duration: "29s", delay: "7s", color: "#f89820" },
  { icon: <FaGithub />, size: "28px", left: "10%", duration: "31s", delay: "12s", color: "#facc15" },
  { icon: <FaHtml5 />, size: "26px", left: "22%", duration: "26s", delay: "14s", color: "#e34f26" },
  { icon: <FaCss3Alt />, size: "26px", left: "44%", duration: "28s", delay: "11s", color: "#f59e0b" },
  { icon: <FaGitAlt />, size: "28px", left: "58%", duration: "33s", delay: "15s", color: "#f05032" },
  { icon: <FaDatabase />, size: "24px", left: "70%", duration: "27s", delay: "9s", color: "#d97706" },
  { icon: <FaCode />, size: "26px", left: "82%", duration: "30s", delay: "5s", color: "#facc15" },
  { icon: <BsStars />, size: "22px", left: "94%", duration: "22s", delay: "1s", color: "#fb923c" },
  { icon: <FaReact />, size: "30px", left: "34%", duration: "29s", delay: "17s", color: "#f59e0b" },
  { icon: <BsRobot />, size: "26px", left: "48%", duration: "31s", delay: "13s", color: "#f97316" },
  { icon: <FaAndroid />, size: "28px", left: "80%", duration: "26s", delay: "16s", color: "#fbbf24" },
];

function FloatingIcons() {
  return (
    <div className="ambient-background-layer" aria-hidden="true">
      {/* Yellow & Orange Ambient Glow Mesh Orbs */}
      <div className="ambient-glow-orb orb-sky-top-left"></div>
      <div className="ambient-glow-orb orb-purple-top-right"></div>
      <div className="ambient-glow-orb orb-purple-center"></div>
      <div className="ambient-glow-orb orb-sky-bottom-left"></div>
      <div className="ambient-glow-orb orb-purple-bottom-right"></div>

      {/* Floating Tech Logos moving bottom to top slowly with low opacity */}
      <div className="floating-logos-track">
        {floatingTechLogos.map((item, index) => (
          <div
            key={index}
            className="floating-tech-logo"
            style={{
              left: item.left,
              fontSize: item.size,
              color: item.color,
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