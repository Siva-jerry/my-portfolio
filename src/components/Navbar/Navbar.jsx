import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiSun, FiMoon, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ["hero", "about", "projects", "skills", "achievements", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-pill">
        {/* Logo */}
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, "#hero")}>
          <span className="logo-script">Siva</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId || (item.href === "#hero" && activeSection === "hero");
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Theme Toggle & CTA */}
        <div className="navbar-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "Dark" : "Day"} mode`}
            title={`Switch to ${theme === "light" ? "Dark" : "Day"} mode`}
          >
            {theme === "light" ? <FiMoon className="theme-icon moon" /> : <FiSun className="theme-icon sun" />}
          </button>

          <a href="#contact" className="navbar-cta-btn" onClick={(e) => handleNavClick(e, "#contact")}>
            <span>Let's Talk</span>
            <FiArrowRight className="cta-arrow" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "drawer-open" : ""}`}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-actions">
            <button className="mobile-theme-btn" onClick={toggleTheme}>
              {theme === "light" ? <FiMoon /> : <FiSun />}
              <span>{theme === "light" ? "Dark Mode" : "Day Mode"}</span>
            </button>

            <a href="#contact" className="mobile-cta-btn" onClick={(e) => handleNavClick(e, "#contact")}>
              <span>Let's Talk</span>
              <FiArrowRight />
            </a>

            <div className="mobile-drawer-socials">
              <a href="https://github.com/Siva-jerry" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/siva-m-823698357" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com/example_of_innocent__" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;