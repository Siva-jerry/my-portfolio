import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaAndroid, FaFire } from "react-icons/fa";
import { SiMongodb, SiGooglecloud } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import HeroStats from "./HeroStats";
import DepthText from "./DepthText";

function Hero() {
  const quickTechs = [
    { name: "React.js", icon: <FaReact />, color: "#06b6d4" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#22c55e" },
    { name: "Android Java", icon: <FaAndroid />, color: "#10b981" },
    { name: "Firebase", icon: <FaFire />, color: "#f97316" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4ade80" },
    { name: "Gemini AI", icon: <SiGooglecloud />, color: "#c084fc" },
  ];

  return (
    <section className="hero-section" id="hero">
      {/* Luminous Ambient Background Glows */}
      <div className="hero-ambient-glow glow-top"></div>
      <div className="hero-ambient-glow glow-bottom"></div>

      <div className="container hero-container">
        {/* Main Hero Header / Content Flow */}
        <div className="hero-content-centered">
          {/* Top Pill Status Badge */}
          <div className="hero-badge-wrap">
            <div className="hero-badge">
              <span className="badge-wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Opportunities</span>
            </div>
          </div>

          <h1 className="hero-title">
            <DepthText
              text="Siva M"
              layers={32}
              depth={2.8}
              faceColor="#ffffff"
              depthColor="#7c3aed"
              tilt={7.5}
              pointerTracking
              smoothing={0.16}
              perspective={1100}
              autoOrbit
              orbitSpeed={0.3}
              fontSize="clamp(2.4rem, 8.5vw, 6.4rem)"
              fontWeight={900}
              shadow
            />
          </h1>

          <div className="hero-typing-wrap">
            <span className="typing-prefix">Final year |</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2200,
                "Native Android Developer",
                2200,
                "AI Enthusiast & Builder",
                2200,
                "UI/UX Craftsperson",
                2200,
              ]}
              wrapper="span"
              className="typing-animated"
              repeat={Infinity}
            />
          </div>

          <p className="hero-description">
            Crafting scalable, high-performance web applications and native Android software.
            Passionate about merging modern full stack architectures with intelligent AI models
            to build delightful digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn-primary">
              <span>View Projects</span>
              <FiArrowRight className="btn-arrow" />
            </a>

            <a href="./resume.pdf" download className="hero-btn-secondary">
              <span>Download CV</span>
              <FiDownload />
            </a>
          </div>

          {/* Quick Tech Highlights Pills */}
          <div className="hero-tech-strip">
            <span className="tech-strip-label">
              <BsStars className="tech-label-star" /> Tech Stack:
            </span>
            <div className="tech-pills-list">
              {quickTechs.map((tech, idx) => (
                <span className="hero-tech-pill" key={idx}>
                  <span className="tech-pill-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Hero Stats Cards */}
        <HeroStats />
      </div>
    </section>
  );
}

export default Hero;