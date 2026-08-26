import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

/* Hardware-accelerated SVG Cyber Orbit Tech Animation */
function CyberOrbitAnimation() {
  return (
    <div className="cyber-orbit-animation" aria-hidden="true">
      <svg
        viewBox="0 0 160 160"
        className="cyber-orbit-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
          </radialGradient>
          <filter id="glowEffect" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Rotating Dashed Ring */}
        <circle
          cx="80"
          cy="80"
          r="68"
          fill="none"
          stroke="#00e5ff"
          strokeWidth="1.8"
          strokeDasharray="8 8"
          className="orbit-ring-outer"
        />

        {/* Inner Counter-Rotating Dashed Ring */}
        <circle
          cx="80"
          cy="80"
          r="48"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2.2"
          strokeDasharray="6 6"
          className="orbit-ring-inner"
        />

        {/* Satellite Orbiting Dot 1 */}
        <g className="satellite-group-1">
          <circle cx="80" cy="12" r="5.5" fill="#00e5ff" filter="url(#glowEffect)" />
        </g>

        {/* Satellite Orbiting Dot 2 */}
        <g className="satellite-group-2">
          <circle cx="80" cy="148" r="4.5" fill="#a855f7" filter="url(#glowEffect)" />
        </g>

        {/* Center Pulsating 4-Point Star */}
        <path
          d="M80 56 Q80 80 56 80 Q80 80 80 104 Q80 80 104 80 Q80 80 80 56 Z"
          fill="url(#starGlow)"
          filter="url(#glowEffect)"
          className="orbit-center-star"
        />
      </svg>
    </div>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const techBadges = ["React 19", "Vite", "Node.js", "Android Studio", "Firebase", "Gemini AI", "CSS3"];

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Callout CTA Strip with Integrated Animation */}
        <div className="footer-cta-strip glass-panel">
          <div className="footer-cta-lottie-wrap">
            <CyberOrbitAnimation />
          </div>

          <div className="footer-cta-text">
            <div className="cta-live-badge">
              <span className="live-pulse-dot"></span>
              <span>Open for New Opportunities</span>
            </div>
            <h3 className="footer-cta-heading">Ready to start a project or hire a builder?</h3>
          </div>

          <div className="footer-cta-actions">
            <a href="#contact" className="footer-cta-btn">
              <span>Let's Talk</span>
              <FiArrowUpRight className="cta-arrow-ico" />
            </a>
          </div>
        </div>

        {/* Main Footer Container */}
        <div className="footer-main-panel glass-panel">
          <div className="footer-grid">
            {/* Column 1: Brand & Bio */}
            <div className="footer-col-brand">
              <a href="#hero" className="footer-brand-logo">
                <span className="logo-script-text">Siva</span>
                <span className="logo-dot-accent">.</span>
              </a>

              <p className="footer-brand-bio">
                Final Year B.Tech Information Technology student engineering modern, scalable digital products across 
                Full Stack Web, Native Android, and Artificial Intelligence.
              </p>

              <div className="footer-location-tag">
                <FaMapMarkerAlt className="loc-pin-ico" />
                <span>Rajapalayam, Tamil Nadu, India</span>
              </div>

              {/* Social Channels Squircle Row */}
              <div className="footer-social-squircles">
                <a
                  href="https://github.com/Siva-jerry"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="squircle-social-btn"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/siva-m-823698357"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="squircle-social-btn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://instagram.com/example_of_innocent__"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="squircle-social-btn"
                >
                  <FaInstagram />
                </a>

                <a
                  href="mailto:sivajerry1433@gmail.com"
                  aria-label="Email"
                  className="squircle-social-btn"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://maps.app.goo.gl/WtkNXQ5noKeAGXz8A?g_st=awb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Location"
                  className="squircle-social-btn"
                >
                  <FaMapMarkerAlt />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="footer-col-nav">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links-grid">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link-anchor">
                      <span className="link-hover-dash">›</span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Tech Stack & Back to Top */}
            <div className="footer-col-tech">
              <h4 className="footer-col-title">Core Ecosystem</h4>
              <div className="footer-tech-cloud">
                {techBadges.map((tech, idx) => (
                  <span className="footer-tech-pill" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="footer-scroll-top-wrap">
                <button
                  onClick={scrollToTop}
                  className="footer-scroll-top-btn"
                  aria-label="Scroll back to top"
                >
                  <span>Back to Top</span>
                  <div className="top-arrow-circle">
                    <FaArrowUp />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom-bar">
            <div className="footer-copyright-text">
              © {new Date().getFullYear()} <strong>Siva M</strong>. Crafted with clean code & modern aesthetics.
            </div>

            <div className="footer-status-indicator">
              <span className="status-indicator-dot"></span>
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;