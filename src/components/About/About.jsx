import React from "react";
import "./About.css";
import {
  FaGraduationCap,
  FaCode,
  FaMobileAlt,
  FaRobot,
  FaTrophy,
  FaQuoteLeft,
  FaCompass,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";

const pillars = [
  {
    icon: <FaCode />,
    title: "Full Stack Web Engineering",
    desc: "React.js, Node.js, Express, RESTful APIs, and modern responsive design.",
    color: "#f59e0b",
  },
  {
    icon: <FaMobileAlt />,
    title: "Native Android Development",
    desc: "Java, Android Studio, Firebase Firestore, and real-time push notifications.",
    color: "#f97316",
  },
  {
    icon: <FaRobot />,
    title: "Artificial Intelligence & LLMs",
    desc: "Gemini AI integration, prompt engineering, intelligent search, and automation.",
    color: "#fbbf24",
  },
  {
    icon: <FaBolt />,
    title: "Clean Code & UI/UX Craft",
    desc: "Maintainable architectures, micro-interactions, high performance, and accessibility.",
    color: "#ea580c",
  },
];

const highlights = [
  {
    icon: <FaGraduationCap className="h-icon" />,
    title: "B.Tech Information Technology",
    subtitle: "Batch 2023 — 2027 (Undergraduate)",
  },
  {
    icon: <FaTrophy className="h-icon gold" />,
    title: "2x Hackathon Champion",
    subtitle: "Appathon & Techathon 1st Place",
  },
  {
    icon: <FaCompass className="h-icon" />,
    title: "Rajapalayam, Tamil Nadu",
    subtitle: "Open for Remote & On-site Roles",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">✨ My Story & Vision</div>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className="section-subtitle">
            A deep dive into my background, engineering philosophy, and technical passions as a developer.
          </p>
        </div>

        {/* Pure Content Flow (Cardless, Image-free, No Timeline) */}
        <div className="about-content-flow">
          {/* Main Headline & Narrative */}
          <div className="about-lead-block">
            <h3 className="about-main-headline">
              Hi, I'm <span className="highlight-text">Siva M</span> — a developer driven by curiosity, clean code, and purposeful innovation.
            </h3>

            <div className="about-narrative-columns">
              <div className="narrative-col">
                <p>
                  I am a passionate Information Technology undergraduate (<strong>Batch 2023–2027</strong>) dedicated to building 
                  robust web applications, native Android software, and intelligent AI-powered digital products.
                </p>
                <p>
                  My development journey is fueled by a relentless desire to solve real-world challenges through elegant software. 
                  Whether designing complex library management systems, AI timetable engines, or interactive media hubs, I prioritize 
                  high performance, modular architecture, and exceptional user experiences.
                </p>
              </div>

              <div className="narrative-col">
                <p>
                  Beyond standard coursework, I actively challenge myself in competitive hackathons and hands-on projects, earning 
                  <strong> 1st Place in APPATHON 2026</strong> (SNS College of Technology) and <strong>1st Place in Techathon 2026</strong> (J.P. College of Engineering).
                </p>
                <p>
                  With <strong>20+ verified certifications</strong> spanning AI, Full Stack, Data Science, and DevOps, I am continuously 
                  expanding my technical repertoire to stay at the cutting edge of modern engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Highlight Strips */}
          <div className="about-highlights-strip">
            {highlights.map((item, index) => (
              <div className="highlight-item" key={index}>
                {item.icon}
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Technical Pillars (Open Grid) */}
          <div className="about-pillars-section">
            <h4 className="sub-section-title">
              <FaBolt className="sub-title-icon" />
              <span>Core Technical Pillars</span>
            </h4>

            <div className="pillars-flow-grid">
              {pillars.map((pillar, idx) => (
                <div className="pillar-flow-item" key={idx}>
                  <div
                    className="pillar-flow-icon"
                    style={{ color: pillar.color, background: `${pillar.color}15` }}
                  >
                    {pillar.icon}
                  </div>
                  <div className="pillar-flow-body">
                    <h5>{pillar.title}</h5>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy & Personal Motto */}
          <div className="about-editorial-quote">
            <FaQuoteLeft className="quote-icon-mark" />
            <p className="quote-statement">
              "Technology is not just what I study — it's the creative craft I enjoy exercising every day to build meaningful, accessible solutions."
            </p>
            <span className="quote-author-tag">— Siva M, Full Stack & AI Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;