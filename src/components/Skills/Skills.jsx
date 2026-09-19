import React, { useState } from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaPaintBrush,
  FaVideo,
  FaBrain,
  FaBolt,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
  FaBullseye,
} from "react-icons/fa";
import { SiFirebase, SiAndroidstudio, SiPython, SiPostman } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { MdDevices, MdApi } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const skillCategories = [
  { id: "all", label: "All Skills", count: 22 },
  { id: "frontend", label: "Frontend & UI/UX", count: 6 },
  { id: "backend", label: "Backend & Mobile", count: 5 },
  { id: "tools", label: "AI & Tools", count: 5 },
  { id: "softskills", label: "Soft Skills", count: 6 },
];

const allSkills = [
  // Frontend
  { name: "React JS", category: "frontend", tag: "Frontend", icon: <FaReact />, color: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)" },
  { name: "JavaScript", category: "frontend", tag: "Language", icon: <FaJs />, color: "#facc15", bg: "rgba(250, 204, 21, 0.12)" },
  { name: "HTML5", category: "frontend", tag: "Structure", icon: <FaHtml5 />, color: "#ea580c", bg: "rgba(234, 88, 12, 0.12)" },
  { name: "CSS3", category: "frontend", tag: "Styling", icon: <FaCss3Alt />, color: "#3b82f6", bg: "rgba(59, 130, 246, 0.12)" },
  { name: "Responsive UI", category: "frontend", tag: "Design", icon: <MdDevices />, color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)" },
  { name: "UI/UX Design", category: "frontend", tag: "Design", icon: <FaPaintBrush />, color: "#ec4899", bg: "rgba(236, 72, 153, 0.12)" },

  // Backend & Mobile
  { name: "Android Studio", category: "backend", tag: "Mobile OS", icon: <SiAndroidstudio />, color: "#10b981", bg: "rgba(16, 185, 129, 0.12)" },
  { name: "Firebase", category: "backend", tag: "Cloud DB", icon: <SiFirebase />, color: "#f97316", bg: "rgba(249, 115, 22, 0.12)" },
  { name: "Python", category: "backend", tag: "Language", icon: <SiPython />, color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
  { name: "REST APIs", category: "backend", tag: "Integration", icon: <MdApi />, color: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)" },
  { name: "Postman", category: "backend", tag: "API Testing", icon: <SiPostman />, color: "#f97316", bg: "rgba(249, 115, 22, 0.12)" },

  // AI & Tools
  { name: "AI Fundamentals", category: "tools", tag: "Intelligence", icon: <BsRobot />, color: "#c084fc", bg: "rgba(192, 132, 252, 0.12)" },
  { name: "Git", category: "tools", tag: "VCS", icon: <FaGitAlt />, color: "#f43f5e", bg: "rgba(244, 63, 94, 0.12)" },
  { name: "GitHub", category: "tools", tag: "Collaboration", icon: <FaGithub />, color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)" },
  { name: "Video Editing", category: "tools", tag: "Media", icon: <FaVideo />, color: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { name: "Vibe Coding", category: "tools", tag: "Workflow", icon: <FaBolt />, color: "#fbbf24", bg: "rgba(251, 191, 36, 0.12)" },

  // Soft Skills
  { name: "Problem Solving", category: "softskills", tag: "Analytical", icon: <FaBrain />, color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
  { name: "Team Collaboration", category: "softskills", tag: "Teamwork", icon: <FaUsers />, color: "#34d399", bg: "rgba(52, 211, 153, 0.12)" },
  { name: "Communication", category: "softskills", tag: "Interpersonal", icon: <FaComments />, color: "#f472b6", bg: "rgba(244, 114, 182, 0.12)" },
  { name: "Quick Learning", category: "softskills", tag: "Adaptability", icon: <FaLightbulb />, color: "#facc15", bg: "rgba(250, 204, 21, 0.12)" },
  { name: "Time Management", category: "softskills", tag: "Productivity", icon: <FaClock />, color: "#818cf8", bg: "rgba(129, 140, 248, 0.12)" },
  { name: "Critical Thinking", category: "softskills", tag: "Cognitive", icon: <FaBullseye />, color: "#f87171", bg: "rgba(248, 113, 113, 0.12)" },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all" ? allSkills : allSkills.filter((s) => s.category === activeTab);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">⚡ Technical Repertoire</div>
          <h2 className="section-title">
            Skills & <span>Expertise</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, developer toolchains, and soft skills honed through continuous building and real-world projects.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="skills-category-tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-cat-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="cat-count-badge">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-modern-grid">
          {filteredSkills.map((skill, index) => (
            <div
              className="skill-modern-card glass-panel"
              key={index}
            >
              <div className="skill-card-glow"></div>

              {/* Card Top: Elevated Icon & Category Tag */}
              <div className="skill-card-top">
                <div className="skill-elevated-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>

                <span className="skill-category-tag">
                  {skill.tag}
                </span>
              </div>

              {/* Card Bottom: Skill Name & Corner Indicator */}
              <div className="skill-card-body">
                <h3 className="skill-card-name">{skill.name}</h3>
                <div className="skill-hover-arrow">
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;