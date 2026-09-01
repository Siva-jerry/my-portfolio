import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import profileImg from "../../assets/images/profile.jpeg";
import profileBackImg from "../../assets/images/profile-back.jpg";
import HeroStats from "./HeroStats";
import CursorMaskReveal from "./CursorMaskReveal";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Hero Text Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-wave">👋</span>
              <span>Hello, I'm</span>
            </div>

            <h1 className="hero-title">
              Siva <span className="hero-title-accent">M</span>
            </h1>

            <div className="hero-typing-wrap">
              <span className="typing-prefix">Final year |</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2200,
                  "Android App Developer",
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
              Crafting modern, scalable and beautiful digital experiences using modern frontend & full stack technologies.
              Passionate about solving real-world problems through clean code, elegant UI and high-performance applications.
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
          </div>

          {/* Right Hero Glass Card with Interactive Cursor Mask Reveal Photo */}
          <div className="hero-visual">
            <div className="hero-orbital-ring"></div>
            <div className="hero-glow-mesh"></div>

            <div className="hero-card-container glass-panel">
              {/* Corner Sparkle Stars */}
              <div className="sparkle-star star-top-left">
                <BsStars />
              </div>
              <div className="sparkle-star star-bottom-right">
                <BsStars />
              </div>

              {/* Cursor Mask Reveal Spotlight Frame */}
              <div className="hero-photo-wrapper">
                <CursorMaskReveal
                  mainImage={profileImg}
                  revealImage={profileBackImg}
                  mainAlt="Siva M - Full Stack Developer"
                  revealAlt="Siva M - Childhood Photo"
                  spotlightRadius={125}
                />
              </div>

              {/* Status Badge floating at bottom of card */}
              <div className="hero-card-status-badge">
                <span className="status-dot"></span>
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Stats Cards matching reference screenshot */}
        <HeroStats />
      </div>
    </section>
  );
}

export default Hero;