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
  { name: "React JS", category: "frontend", tag: "Frontend", icon: <FaReact />, color: "#00e5ff" },
  { name: "JavaScript", category: "frontend", tag: "Language", icon: <FaJs />, color: "#f7df1e" },
  { name: "HTML5", category: "frontend", tag: "Structure", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "CSS3", category: "frontend", tag: "Styling", icon: <FaCss3Alt />, color: "#38bdf8" },
  { name: "Responsive UI", category: "frontend", tag: "Design", icon: <MdDevices />, color: "#8b5cf6" },
  { name: "UI/UX Design", category: "frontend", tag: "Design", icon: <FaPaintBrush />, color: "#7c3aed" },

  // Backend & Mobile
  { name: "Android Studio", category: "backend", tag: "Mobile OS", icon: <SiAndroidstudio />, color: "#3ddc84" },
  { name: "Firebase", category: "backend", tag: "Cloud DB", icon: <SiFirebase />, color: "#ffca28" },
  { name: "Python", category: "backend", tag: "Language", icon: <SiPython />, color: "#38bdf8" },
  { name: "REST APIs", category: "backend", tag: "Integration", icon: <MdApi />, color: "#00e5ff" },
  { name: "Postman", category: "backend", tag: "API Testing", icon: <SiPostman />, color: "#ff6c37" },

  // AI & Tools
  { name: "AI Fundamentals", category: "tools", tag: "Intelligence", icon: <BsRobot />, color: "#8b5cf6" },
  { name: "Git", category: "tools", tag: "VCS", icon: <FaGitAlt />, color: "#f05032" },
  { name: "GitHub", category: "tools", tag: "Collaboration", icon: <FaGithub />, color: "#00e5ff" },
  { name: "Video Editing", category: "tools", tag: "Media", icon: <FaVideo />, color: "#a855f7" },
  { name: "Vibe Coding", category: "tools", tag: "Workflow", icon: <FaBolt />, color: "#f59e0b" },

  // Soft Skills
  { name: "Problem Solving", category: "softskills", tag: "Analytical", icon: <FaBrain />, color: "#00e5ff" },
  { name: "Team Collaboration", category: "softskills", tag: "Teamwork", icon: <FaUsers />, color: "#10b981" },
  { name: "Communication", category: "softskills", tag: "Interpersonal", icon: <FaComments />, color: "#8b5cf6" },
  { name: "Quick Learning", category: "softskills", tag: "Adaptability", icon: <FaLightbulb />, color: "#fbbf24" },
  { name: "Time Management", category: "softskills", tag: "Productivity", icon: <FaClock />, color: "#38bdf8" },
  { name: "Critical Thinking", category: "softskills", tag: "Cognitive", icon: <FaBullseye />, color: "#ef4444" },
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

              {/* Card Top: Elevated Icon & Category Tag */}
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

                <span className="skill-category-tag">{skill.tag}</span>
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