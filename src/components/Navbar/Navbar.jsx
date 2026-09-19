import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import {
  FiHome,
  FiUser,
  FiCpu,
  FiGrid,
  FiAward,
  FiCheckCircle,
  FiMail,
  FiSun,
  FiMoon,
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// Image Previews for Navigation 8 (16:9 High-Resolution Assets)
import heroPreviewImg from "../../assets/nav-previews/home.jpg";
import aboutPreviewImg from "../../assets/nav-previews/about.jpg";
import skillsPreviewImg from "../../assets/nav-previews/skills.jpg";
import projectsPreviewImg from "../../assets/nav-previews/projects.jpg";
import achievePreviewImg from "../../assets/nav-previews/achievements.jpg";
import certPreviewImg from "../../assets/nav-previews/certifications.jpg";
import contactPreviewImg from "../../assets/nav-previews/contact.jpg";

const navItems = [
  {
    id: "hero",
    name: "Home",
    href: "#hero",
    icon: <FiHome />,
    badge: "Overview",
    title: "Siva M",
    subtitle: "Full Stack & AI Engineer",
    image: heroPreviewImg,
  },
  {
    id: "about",
    name: "About",
    href: "#about",
    icon: <FiUser />,
    badge: "Profile",
    title: "About Me",
    subtitle: "CS Undergrad & Problem Solver",
    image: aboutPreviewImg,
  },
  {
    id: "skills",
    name: "Skills",
    href: "#skills",
    icon: <FiCpu />,
    badge: "15+ Techs",
    title: "Tech Stack",
    subtitle: "React, Node, Gemini AI, Cloud",
    image: skillsPreviewImg,
  },
  {
    id: "projects",
    name: "Projects",
    href: "#projects",
    icon: <FiGrid />,
    badge: "Showcase",
    title: "Hypercar Showcase",
    subtitle: "8+ Production-Grade Systems",
    image: projectsPreviewImg,
  },
  {
    id: "achievements",
    name: "Honors",
    href: "#achievements",
    icon: <FiAward />,
    badge: "2+ Awards",
    title: "Achievements",
    subtitle: "Appathon & Techathon 1st Place",
    image: achievePreviewImg,
  },
  {
    id: "certifications",
    name: "Certs",
    href: "#certifications",
    icon: <FiCheckCircle />,
    badge: "20+ Verified",
    title: "Certifications",
    subtitle: "IBM • Infosys • Global Portals",
    image: certPreviewImg,
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
    icon: <FiMail />,
    badge: "Open to Work",
    title: "Get in Touch",
    subtitle: "Let's build something epic",
    image: contactPreviewImg,
  },
];

function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isTopScrolled, setIsTopScrolled] = useState(false);
  const hoverTimeoutRef = useRef(null);

  // Scroll Spy for Active Section
  useEffect(() => {
    const handleScroll = () => {
      setIsTopScrolled(window.scrollY > 40);

      const sectionIds = ["hero", "about", "skills", "projects", "achievements", "certifications", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (item) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 120);
  };

  const handleNavClick = (e, href) => {
    setHoveredItem(null);
    if (href === "#hero") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. TOP MINIMAL BRAND HEADER BAR */}
      <header className={`top-header-wrapper ${isTopScrolled ? "top-scrolled" : ""}`}>
        <div className="top-header-container">
          {/* Brand Logo & Status */}
          <a
            href="#hero"
            className="top-brand-logo"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <span className="brand-name">Siva</span>
            <span className="brand-dot">.</span>
            <div className="brand-status-chip">
              <span className="status-indicator-dot"></span>
              <span className="status-label">Available for Projects</span>
            </div>
          </a>

          {/* Top Quick Actions */}
          <div className="top-header-actions">
            <a
              href="https://github.com/Siva-jerry"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-btn"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/siva-m-823698357"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-btn"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>

            <button
              className="top-theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
            >
              {theme === "light" ? <FiMoon className="theme-icon moon" /> : <FiSun className="theme-icon sun" />}
            </button>

            <a
              href="#contact"
              className="top-cta-btn"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              <span>Let's Talk</span>
              <FiArrowRight className="top-cta-arrow" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. REACT BITS PRO NAVIGATION 8: FLOATING BOTTOM DOCK WITH BLURRED BG & IMAGE PREVIEWS */}
      <nav
        className="nav8-bottom-wrapper"
        role="navigation"
        aria-label="Bottom Navigation Dock"
      >
        <div className="nav8-dock-container">
          {/* Dynamic Image Preview Popup Tooltip */}
          {hoveredItem && (
            <div
              className="nav8-preview-popup"
              key={hoveredItem.id}
              style={{
                left: `${
                  navItems.findIndex((i) => i.id === hoveredItem.id) * (100 / navItems.length) +
                  50 / navItems.length
                }%`,
              }}
            >
              <div className="nav8-preview-card">
                {/* Image Wrap */}
                <div className="nav8-preview-media">
                  <img
                    src={hoveredItem.image}
                    alt={hoveredItem.title}
                    className="nav8-preview-img"
                  />
                  <span className="nav8-preview-badge">{hoveredItem.badge}</span>
                  <div className="nav8-preview-gradient"></div>
                </div>

                {/* Content Details */}
                <div className="nav8-preview-info">
                  <h4 className="nav8-preview-title">
                    {hoveredItem.title}
                    <FiArrowUpRight className="nav8-preview-arrow" />
                  </h4>
                  <p className="nav8-preview-subtitle">{hoveredItem.subtitle}</p>
                </div>

                {/* Downward Notch */}
                <div className="nav8-preview-notch"></div>
              </div>
            </div>
          )}

          {/* Navigation Items Pill List */}
          <div className="nav8-items-strip">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`nav8-item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-label={item.title}
                >
                  <span className="nav8-icon-wrap">{item.icon}</span>
                  <span className="nav8-label">{item.name}</span>

                  {/* Active Glowing Dot Indicator */}
                  {isActive && <span className="nav8-active-dot"></span>}
                </a>
              );
            })}

            {/* Quick Dock Theme Switcher */}
            <div className="nav8-divider"></div>

            <button
              className="nav8-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
            >
              {theme === "light" ? (
                <FiMoon className="dock-theme-icon moon" />
              ) : (
                <FiSun className="dock-theme-icon sun" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;