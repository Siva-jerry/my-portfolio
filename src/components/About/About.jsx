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
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import mainProfileImg from "../../assets/images/Main-profile.jpeg";
import profileBackImg from "../../assets/images/profile-back.jpg";
import CursorMaskReveal from "../Hero/CursorMaskReveal";

const pillars = [
  {
    icon: <FaCode />,
    title: "Full Stack Web Engineering",
    desc: "React.js, Node.js, Express, RESTful APIs, and modern responsive design.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Native Android Development",
    desc: "Java, Android Studio, Firebase Firestore, and real-time push notifications.",
  },
  {
    icon: <FaRobot />,
    title: "Artificial Intelligence & LLMs",
    desc: "Gemini AI integration, prompt engineering, intelligent search, and automation.",
  },
  {
    icon: <FaBolt />,
    title: "Clean Code & UI/UX Craft",
    desc: "Maintainable architectures, micro-interactions, high performance, and accessibility.",
  },
];

const highlights = [
  {
    icon: <FaGraduationCap className="h-icon" />,
    title: "B.Tech Information Technology",
    subtitle: "Batch 2023 — 2027 (Final Year)",
  },
  {
    icon: <FaTrophy className="h-icon" />,
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

        {/* Main Content Flow */}
        <div className="about-content-flow">
          {/* Top 2-Column Split: Visual Interactive Card + Story Narrative */}
          <div className="about-intro-grid">
            {/* Left Column: Interactive Portrait Visual Card */}
            <div className="about-visual-col">
              <div className="about-card-wrapper">
                <div className="about-orbital-ring"></div>
                <div className="about-glow-mesh"></div>

                <div className="about-card-container glass-panel">
                  {/* Corner Sparkle Stars */}
                  <div className="sparkle-star star-top-left">
                    <BsStars />
                  </div>
                  <div className="sparkle-star star-bottom-right">
                    <BsStars />
                  </div>

                  {/* Interactive Cursor Mask Reveal Photo (Main-profile.jpeg) */}
                  <div className="about-photo-wrapper">
                    <CursorMaskReveal
                      mainImage={mainProfileImg}
                      revealImage={profileBackImg}
                      mainAlt="Siva M - Full Stack Developer"
                      revealAlt="Siva M - Childhood Photo"
                      spotlightRadius={75}
                    />
                  </div>

                  {/* Status / Batch Badge floating at bottom of card */}
                  <div className="about-card-status-badge">
                    <span className="status-dot"></span>
                    <span>Batch 2023–2027 • Final Year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Headline & Narrative */}
            <div className="about-lead-col">
              <div className="about-lead-header-block">
                <h3 className="about-main-headline">
                  Hi, I'm <span className="highlight-text">Siva M</span> — a developer driven by curiosity, clean code, and purposeful innovation.
                </h3>
              </div>

              <div className="about-narrative-text">
                <p>
                  I am a passionate Information Technology undergraduate (<strong>Batch 2023–2027</strong>) dedicated to building 
                  robust web applications, native Android software, and intelligent AI-powered digital products.
                </p>
                <p>
                  My development journey is fueled by a relentless desire to solve real-world challenges through elegant software. 
                  Whether designing complex library management systems, AI timetable engines, or interactive media hubs, I prioritize 
                  high performance, modular architecture, and exceptional user experiences.
                </p>
                <p>
                  Beyond standard coursework, I actively challenge myself in competitive hackathons and hands-on projects, earning 
                  <strong> 1st Place in APPATHON 2026</strong> (SNS College of Technology) and <strong>1st Place in Techathon 2026</strong> (J.P. College of Engineering), 
                  with <strong>20+ verified certifications</strong> across modern engineering domains.
                </p>
              </div>

              {/* Quick Highlight Strips */}
              <div className="about-highlights-strip">
                {highlights.map((item, index) => (
                  <div className="highlight-item glass-panel" key={index}>
                    <div className="h-icon-box">
                      {item.icon}
                    </div>
                    <div className="h-text-box">
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Technical Pillars (Open Grid) */}
          <div className="about-pillars-section">
            <h4 className="sub-section-title">
              <FaBolt className="sub-title-icon" style={{ color: "var(--primary)" }} />
              <span>Core Technical Pillars</span>
            </h4>

            <div className="pillars-flow-grid">
              {pillars.map((pillar, idx) => (
                <div className="pillar-flow-item glass-panel" key={idx}>
                  <div className="pillar-flow-icon">
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
          <div className="about-editorial-quote glass-panel">
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