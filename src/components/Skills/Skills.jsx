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

const skillCategories = [
  { id: "all", label: "All Skills", count: 22 },
  { id: "frontend", label: "Frontend & UI/UX", count: 6 },
  { id: "backend", label: "Backend & Mobile", count: 5 },
  { id: "tools", label: "AI & Tools", count: 5 },
  { id: "softskills", label: "Soft Skills", count: 6 },
];

const allSkills = [
  // Frontend
  { name: "React JS", category: "frontend", icon: <FaReact />, color: "#00e5ff", level: "Advanced", percent: 90 },
  { name: "JavaScript", category: "frontend", icon: <FaJs />, color: "#f7df1e", level: "Advanced", percent: 88 },
  { name: "HTML5", category: "frontend", icon: <FaHtml5 />, color: "#e34f26", level: "Expert", percent: 95 },
  { name: "CSS3", category: "frontend", icon: <FaCss3Alt />, color: "#38bdf8", level: "Expert", percent: 92 },
  { name: "Responsive UI", category: "frontend", icon: <MdDevices />, color: "#8b5cf6", level: "Expert", percent: 95 },
  { name: "UI/UX Design", category: "frontend", icon: <FaPaintBrush />, color: "#7c3aed", level: "Proficient", percent: 85 },

  // Backend & Mobile
  { name: "Android Studio", category: "backend", icon: <SiAndroidstudio />, color: "#3ddc84", level: "Advanced", percent: 88 },
  { name: "Firebase", category: "backend", icon: <SiFirebase />, color: "#ffca28", level: "Advanced", percent: 90 },
  { name: "Python", category: "backend", icon: <SiPython />, color: "#38bdf8", level: "Intermediate", percent: 80 },
  { name: "REST APIs", category: "backend", icon: <MdApi />, color: "#00e5ff", level: "Advanced", percent: 88 },
  { name: "Postman", category: "backend", icon: <SiPostman />, color: "#ff6c37", level: "Proficient", percent: 82 },

  // AI & Tools
  { name: "AI Fundamentals", category: "tools", icon: <BsRobot />, color: "#8b5cf6", level: "Advanced", percent: 86 },
  { name: "Git", category: "tools", icon: <FaGitAlt />, color: "#f05032", level: "Advanced", percent: 88 },
  { name: "GitHub", category: "tools", icon: <FaGithub />, color: "#00e5ff", level: "Advanced", percent: 90 },
  { name: "Video Editing", category: "tools", icon: <FaVideo />, color: "#a855f7", level: "Creative", percent: 85 },
  { name: "Vibe Coding", category: "tools", icon: <FaBolt />, color: "#f59e0b", level: "Modern", percent: 92 },

  // Soft Skills
  { name: "Problem Solving", category: "softskills", icon: <FaBrain />, color: "#00e5ff", level: "Core Strength", percent: 95 },
  { name: "Team Collaboration", category: "softskills", icon: <FaUsers />, color: "#10b981", level: "Core Strength", percent: 92 },
  { name: "Communication", category: "softskills", icon: <FaComments />, color: "#8b5cf6", level: "Core Strength", percent: 90 },
  { name: "Quick Learning", category: "softskills", icon: <FaLightbulb />, color: "#fbbf24", level: "Core Strength", percent: 96 },
  { name: "Time Management", category: "softskills", icon: <FaClock />, color: "#38bdf8", level: "Core Strength", percent: 88 },
  { name: "Critical Thinking", category: "softskills", icon: <FaBullseye />, color: "#ef4444", level: "Core Strength", percent: 92 },
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
              style={{ "--skill-accent": skill.color }}
            >
              <div className="skill-card-glow"></div>

              {/* Card Top: Elevated Icon & Level Tag */}
              <div className="skill-card-top">
                <div
                  className="skill-elevated-icon"
                  style={{
                    color: skill.color,
                    background: `${skill.color}15`,
                    borderColor: `${skill.color}35`,
                  }}
                >
                  {skill.icon}
                </div>

                <span className="skill-level-chip">{skill.level}</span>
              </div>

              {/* Card Middle: Skill Name */}
              <div className="skill-card-info">
                <h3 className="skill-card-name">{skill.name}</h3>
              </div>

              {/* Card Bottom: Glowing Proficiency Bar */}
              <div className="skill-progress-wrap">
                <div className="skill-progress-track">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${skill.percent}%`,
                      background: `linear-gradient(90deg, ${skill.color}, #7c3aed)`,
                    }}
                  ></div>
                </div>
                <span className="skill-percent-label">{skill.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;