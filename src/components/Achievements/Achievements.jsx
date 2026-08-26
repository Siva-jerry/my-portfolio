import React from "react";
import "./Achievements.css";
import { FaTrophy, FaAward, FaRocket, FaCertificate, FaMedal } from "react-icons/fa";

const stats = [
  { value: "2+", label: "Hackathon & Expo Awards", icon: <FaTrophy /> },
  { value: "20+", label: "Certificates Earned", icon: <FaCertificate /> },
  { value: "8+", label: "Real-world Projects", icon: <FaRocket /> },
  { value: "1+", label: "Industry Internship", icon: <FaMedal /> },
];

const achievements = [
  {
    icon: <FaTrophy />,
    badge: "1st Place Winner",
    prize: "₹5,000 Cash Prize",
    title: "APPATHON 2026",
    institution: "SNS College of Technology",
    description:
      "Secured 1st Place in state-level APPATHON 2026 for building an innovative high-impact mobile & cloud software solution.",
    theme: "gold",
  },
  {
    icon: <FaAward />,
    badge: "1st Place Winner",
    prize: "₹3,000 Cash Prize",
    title: "Techathon 2026",
    institution: "J.P. College of Engineering",
    description:
      "Won 1st Place in the IT Department Project Expo with an outstanding demonstration of real-time application architecture.",
    theme: "violet",
  },
  {
    icon: <FaRocket />,
    badge: "Honorable Showcase",
    prize: "National Level",
    title: "Project Expo Participant",
    institution: "National Level Symposium",
    description:
      "Presented innovative software solutions, engaging in live technical defenses and demonstrating full-stack engineering principles.",
    theme: "cyan",
  },
  {
    icon: <FaCertificate />,
    badge: "Continuous Learning",
    prize: "Global Portals",
    title: "20+ Professional Certifications",
    institution: "IBM • Infosys • NoviTech • Edunet",
    description:
      "Completed rigorous certified coursework across Artificial Intelligence, React.js, Full Stack, Data Science, and DevOps.",
    theme: "emerald",
  },
];

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">🏆 Honors & Recognition</div>
          <h2 className="section-title">
            Achievements & <span>Awards</span>
          </h2>
          <p className="section-subtitle">
            Recognitions and milestones earned through hackathons, technical symposia, and consistent project innovation.
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div className="achievement-stats-row">
          {stats.map((item, index) => (
            <div className="stat-capsule glass-panel" key={index}>
              <div className="stat-capsule-icon">{item.icon}</div>
              <div className="stat-capsule-info">
                <span className="stat-capsule-num">{item.value}</span>
                <span className="stat-capsule-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Cards Grid */}
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className={`achievement-card glass-panel theme-${item.theme}`} key={index}>
              <div className="achievement-card-top">
                <div className="achievement-icon-box">{item.icon}</div>
                <div className="achievement-badges">
                  <span className="ach-badge-primary">{item.badge}</span>
                  <span className="ach-badge-prize">{item.prize}</span>
                </div>
              </div>

              <div className="achievement-card-body">
                <h3 className="achievement-title">{item.title}</h3>
                <h4 className="achievement-institution">{item.institution}</h4>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;