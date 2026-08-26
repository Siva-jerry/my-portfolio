import React, { useState } from "react";
import "./Certifications.css";
import {
  FaCertificate,
  FaRobot,
  FaLaptopCode,
  FaChartLine,
  FaAward,
  FaShieldAlt,
  FaBuilding,
  FaExternalLinkAlt,
  FaLayerGroup,
} from "react-icons/fa";

const certCategories = [
  { id: "all", label: "All Credentials", count: 23 },
  { id: "ai", label: "Artificial Intelligence", count: 7, icon: <FaRobot /> },
  { id: "dev", label: "Web & Software", count: 5, icon: <FaLaptopCode /> },
  { id: "data", label: "Data & DevOps", count: 6, icon: <FaChartLine /> },
  { id: "industry", label: "Industry Programs", count: 5, icon: <FaAward /> },
];

const allCertificates = [
  // AI
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    color: "#a855f7",
    tag: "LLMs & GenAI",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    color: "#00e5ff",
    tag: "Core AI",
  },
  {
    title: "Artificial Intelligence MasterClass",
    issuer: "NoviTech R&D Pvt. Ltd.",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    color: "#8b5cf6",
    tag: "AI Architecture",
  },
  {
    title: "Computer Vision 101",
    issuer: "Infosys Springboard",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    color: "#38bdf8",
    tag: "Vision Systems",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    color: "#7c3aed",
    tag: "Foundational AI",
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    color: "#a855f7",
    tag: "Neural Networks",
  },
  {
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys Springboard",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    color: "#00e5ff",
    tag: "NLP & Text",
  },

  // Web & Software
  {
    title: "Full Stack Development MasterClass",
    issuer: "NoviTech R&D Pvt. Ltd.",
    category: "dev",
    categoryLabel: "Web & Software",
    color: "#00e5ff",
    tag: "MERN Stack",
  },
  {
    title: "UI/UX Design MasterClass",
    issuer: "NoviTech R&D Pvt. Ltd.",
    category: "dev",
    categoryLabel: "Web & Software",
    color: "#ec4899",
    tag: "Design Systems",
  },
  {
    title: "Hands-on React.js Training (React + Vite)",
    issuer: "Campus Connection",
    category: "dev",
    categoryLabel: "Web & Software",
    color: "#38bdf8",
    tag: "Frontend Dev",
  },
  {
    title: "Android App Development",
    issuer: "CADD Expert Training Institution",
    category: "dev",
    categoryLabel: "Web & Software",
    color: "#10b981",
    tag: "Mobile Apps",
  },
  {
    title: "Android App Development",
    issuer: "Vinsup Academy / Vinsup Infotech",
    category: "dev",
    categoryLabel: "Web & Software",
    color: "#8b5cf6",
    tag: "Native Android",
  },

  // Data & DevOps
  {
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    category: "data",
    categoryLabel: "Data & DevOps",
    color: "#38bdf8",
    tag: "Data Analytics",
  },
  {
    title: "Introduction to Robotic Process Automation",
    issuer: "Infosys Springboard",
    category: "data",
    categoryLabel: "Data & DevOps",
    color: "#00e5ff",
    tag: "RPA Automation",
  },
  {
    title: "Continuous Integration & Delivery (DevOps)",
    issuer: "Infosys Springboard",
    category: "data",
    categoryLabel: "Data & DevOps",
    color: "#10b981",
    tag: "CI/CD Pipelines",
  },
  {
    title: "Introduction to Agile Methodology",
    issuer: "Infosys Springboard",
    category: "data",
    categoryLabel: "Data & DevOps",
    color: "#f59e0b",
    tag: "Agile & Scrum",
  },
  {
    title: "Problem Solving & Process Controls",
    issuer: "IBM SkillsBuild",
    category: "data",
    categoryLabel: "Data & DevOps",
    color: "#7c3aed",
    tag: "Critical Analysis",
  },
  {
    title: "Communication & Personality Dynamics",
    issuer: "IBM SkillsBuild",
    category: "data",
    categoryLabel: "Data & DevOps",
    color: "#ec4899",
    tag: "Professionalism",
  },

  // Industry Programs
  {
    title: "Zoho Creator Student Training",
    issuer: "Young Creators Program",
    category: "industry",
    categoryLabel: "Industry Program",
    color: "#f59e0b",
    tag: "Low-Code Apps",
  },
  {
    title: "Green Skills & AI Foundation Course",
    issuer: "Edunet Foundation",
    category: "industry",
    categoryLabel: "Industry Program",
    color: "#10b981",
    tag: "Sustainable Tech",
  },
  {
    title: "AICTE & Shell Skills4Future Program",
    issuer: "Shell & AICTE",
    category: "industry",
    categoryLabel: "Industry Program",
    color: "#38bdf8",
    tag: "Energy & Tech",
  },
  {
    title: "Professional Industry Training Programs",
    issuer: "Industry Partners",
    category: "industry",
    categoryLabel: "Industry Program",
    color: "#8b5cf6",
    tag: "Industry Ready",
  },
  {
    title: "Practical Project-Based Learning Workshops",
    issuer: "Institutional Training",
    category: "industry",
    categoryLabel: "Industry Program",
    color: "#00e5ff",
    tag: "Hands-on Building",
  },
];

function Certifications() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCerts =
    activeCategory === "all"
      ? allCertificates
      : allCertificates.filter((c) => c.category === activeCategory);

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">📜 Verified Credentials</div>
          <h2 className="section-title">
            Certifications & <span>Specializations</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized certifications awarded by global tech leaders like IBM, Infosys, NoviTech, and Outskill.
          </p>
        </div>

        {/* Top Metric Bar */}
        <div className="cert-metrics-bar glass-panel">
          <div className="cert-metric-col">
            <span className="metric-digit">23+</span>
            <span className="metric-name">Verified Certificates</span>
          </div>

          <div className="metric-divider"></div>

          <div className="cert-metric-col">
            <span className="metric-digit">6+</span>
            <span className="metric-name">Global Issuers (IBM, Infosys)</span>
          </div>

          <div className="metric-divider"></div>

          <div className="cert-metric-col">
            <span className="metric-digit">4</span>
            <span className="metric-name">Domain Tracks</span>
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="cert-filter-pills">
          {certCategories.map((cat) => (
            <button
              key={cat.id}
              className={`cert-pill-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon && <span className="pill-ico">{cat.icon}</span>}
              <span>{cat.label}</span>
              <span className="pill-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Unique Certificate Badge Passport Grid */}
        <div className="cert-passport-grid">
          {filteredCerts.map((cert, index) => (
            <div
              className="cert-passport-card glass-panel"
              key={index}
              style={{ "--cert-glow": cert.color }}
            >
              <div className="cert-card-accent-bar" style={{ background: cert.color }}></div>

              {/* Card Top: Issuer & Verified Seal */}
              <div className="cert-card-topbar">
                <div className="cert-issuer-badge">
                  <FaBuilding className="issuer-icon" />
                  <span>{cert.issuer}</span>
                </div>

                <div className="cert-verified-seal">
                  <FaShieldAlt className="shield-ico" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Card Middle: Certificate Title */}
              <div className="cert-body">
                <h3 className="cert-title-heading">{cert.title}</h3>
              </div>

              {/* Card Bottom: Domain Tag & Category Pill */}
              <div className="cert-card-footer">
                <span className="cert-category-tag">{cert.categoryLabel}</span>
                <span className="cert-skill-pill" style={{ color: cert.color, borderColor: `${cert.color}40` }}>
                  {cert.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;