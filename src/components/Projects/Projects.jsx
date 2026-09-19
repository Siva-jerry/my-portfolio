import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Projects.css";
import libraryImg from "../../assets/projects/library.png";
import timetableImg from "../../assets/projects/timetable.png";
import farewellImg from "../../assets/projects/farewell.png";
import spiderverseImg from "../../assets/projects/spiderverse.png";
import ben10Img from "../../assets/projects/ben10.png";
import shopImg from "../../assets/projects/shop.png";
import portfolioImg from "../../assets/projects/portfolio.png";
import harryPotterImg from "../../assets/projects/harry-potter.png";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiLayers, FiCode } from "react-icons/fi";

const projects = [
  {
    id: "shopai",
    brandLogo: "SHOPAI",
    modelCode: "PROD // DISCOVERY",
    slogan: "DISCOVER SMARTER. BUY WITH CONFIDENCE.",
    subtitle: "AI-Powered Product Aggregation & Intelligent Comparison Engine",
    category: "Full Stack • AI",
    badge: "AI Powered",
    image: shopImg,
    description:
      "Engineered an intelligent multi-source product discovery engine integrating Gemini AI for real-time market sentiment, automated price-to-quality scoring, and streamlined shopping decisions.",
    specs: "CORE STACK: React 19 • Node.js • Express • Gemini AI • ARCHITECTURE: RESTful Microservices • DEPLOY: Vercel CDN • STATUS: 100% Online",
    tech: ["React", "Node.js", "Express", "Gemini AI", "REST APIs", "Vercel"],
    demo: "https://shop-ai-ten-zeta.vercel.app",
    github: "https://github.com/Siva-jerry/ShopAI",
  },
  {
    id: "library",
    brandLogo: "LIBRARY OS",
    modelCode: "SYSTEM // NATIVE",
    slogan: "ENTERPRISE POWER AT STUDENT FINGERTIPS.",
    subtitle: "Native Android & Cloud-Synced Academic Resource Hub",
    category: "Android Native",
    badge: "Android App",
    image: libraryImg,
    description:
      "Developed a robust native Android library management ecosystem with real-time cloud book reservations, fine tracking, QR issue logging, AI study assistant, and Firebase Cloud Messaging alerts.",
    specs: "PLATFORM: Native Android (Java) • DATABASE: Firebase Firestore • CLOUD: FCM Push Alerts • ARCHITECTURE: Modular MVC • STATUS: Production Verified",
    tech: ["Java", "Android Studio", "Firebase", "Firestore", "Cloud Messaging"],
    demo: "https://drive.google.com/drive/folders/1evlwQ-18_IuM3JKiu3TBtAoCRGB5-t-l",
    github: "https://github.com/Siva-jerry",
  },
  {
    id: "timetable",
    brandLogo: "TIMETABLE AI",
    modelCode: "ENGINE // ALGORITHMIC",
    slogan: "CONFLICT-FREE SCHEDULING AT LIGHTSPEED.",
    subtitle: "Automated Academic Scheduling & Faculty Allocation Engine",
    category: "Full Stack • AI",
    badge: "Full Stack AI",
    image: timetableImg,
    description:
      "Created an algorithmic academic timetable generator utilizing intelligent constraint-solving logic for conflict-free classroom allocation, faculty workload distribution, and instant PDF exports.",
    specs: "ENGINE: Constraint Satisfaction Algorithm • STACK: React & Node.js • STORAGE: Cloud Firestore • EXPORTS: PDF & Excel Telemetry • STATUS: Deployed",
    tech: ["React", "Node.js", "Firebase", "Firestore", "AI Scheduling"],
    demo: "https://drive.google.com/drive/folders/1LnqB4LVU2rIy8RQPnxHedKOz-SPeFJz3",
    github: "https://github.com/Siva-jerry",
  },
  {
    id: "portfolio-cms",
    brandLogo: "PORTFOLIO CMS",
    modelCode: "HEADLESS // PLATFORM",
    slogan: "HEADLESS POWER. ZERO CODE UPDATES.",
    subtitle: "Dynamic Dual-Portal Content Architecture & Admin Console",
    category: "Full Stack CMS",
    badge: "Full Stack CMS",
    image: portfolioImg,
    description:
      "Engineered a full-featured Headless Portfolio CMS with a dedicated secure Admin Console allowing live project, skill, and certification updates with instant client synchronization.",
    specs: "ARCHITECTURE: Decoupled Headless CMS • DATABASE: Supabase & Firestore • BUILD: Vite Fast Bundler • DEPLOY: Vercel Cloud • STATUS: Live Multi-Client",
    tech: ["React", "Firebase", "Firestore", "Supabase", "Vite", "Vercel"],
    clientDemo: "https://client-portfolio-inky.vercel.app",
    adminDemo: "https://drive.google.com/drive/folders/1-bDXgIOdw_rO-htoP8fJb-08Hqv61Sh9",
    clientGithub: "https://github.com/Siva-jerry/Client-Portfolio",
    adminGithub: "https://github.com/Siva-jerry/Admin-Portfolio",
  },
  {
    id: "harry-potter",
    brandLogo: "WIZARDING HUB",
    modelCode: "CINEMATIC // IMMERSIVE",
    slogan: "STEP INTO THE WIZARDING WORLD.",
    subtitle: "Interactive Multi-Media Magical Encyclopedia & Database",
    category: "Cinematic Web",
    badge: "Cinematic Web",
    image: harryPotterImg,
    description:
      "Built an atmospheric wizarding portal featuring Hogwarts house sorting, interactive potion brewing laboratory, real-time spell compendium, and rich spatial audio effects.",
    specs: "EXPERIENCE: Spatial Audio & Motion • FRAMEWORK: React 19 • STORAGE: Firebase Cloud Media • STYLING: Glassmorphic Dark • STATUS: Active",
    tech: ["React", "Vite", "JavaScript", "CSS3", "Firebase Storage"],
    demo: "https://harry-potter-encyclopedia-eosin.vercel.app",
    github: "https://github.com/Siva-jerry/harry-potter-encyclopedia",
  },
  {
    id: "ben10",
    brandLogo: "OMNITRIX HUB",
    modelCode: "UNIVERSE // ARCHIVE",
    slogan: "HERO TIME REDEFINED IN REACT.",
    subtitle: "Complete Alien Database & Omnitrix Simulator Portal",
    category: "Interactive Fan Hub",
    badge: "Fan Experience",
    image: ben10Img,
    description:
      "Constructed a high-fidelity Ben 10 fan portal documenting canon lore across 4 generations, including interactive alien transformations, species biology, and Framer Motion micro-interactions.",
    specs: "LANGUAGE: Modern TypeScript • MOTION: Framer Motion • DATABASE: 100+ Alien Records • BUNDLER: Vite Engine • STATUS: Production Ready",
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "CSS3"],
    demo: "https://siva-jerry.github.io/ben10-universe/",
    github: "https://github.com/Siva-jerry/ben10-universe",
  },
  {
    id: "spiderverse",
    brandLogo: "SPIDER-VERSE",
    modelCode: "MULTIVERSE // 3D WEB",
    slogan: "ACROSS DIMENSIONS. INTERACTIVE CINEMA.",
    subtitle: "Dimensional Variant Showcase & Web Experience",
    category: "Interactive Hub",
    badge: "Interactive Hub",
    image: spiderverseImg,
    description:
      "Designed a visually striking multiverse web portal exploring alternative Spider-Man characters, iconic suits, interactive comic audio soundscapes, and movie trailer highlights.",
    specs: "MULTIMEDIA: HTML5 Video Engine • STYLING: Cyberpunk Neon CSS3 • ASSETS: Cloud Streamed • HOSTING: GitHub Pages • STATUS: Active",
    tech: ["React", "CSS3", "JavaScript", "Multimedia", "GitHub Pages"],
    demo: "https://siva-jerry.github.io/spiderverse/",
    github: "https://github.com/Siva-jerry/spiderverse",
  },
  {
    id: "farewell",
    brandLogo: "BATCH MEMORIES",
    modelCode: "COMMUNITY // ARCHIVE",
    slogan: "MEMORIES PRESERVED FOR A LIFETIME.",
    subtitle: "Celebration Milestone Platform & Graduating Yearbook",
    category: "Web Platform",
    badge: "Web Application",
    image: farewellImg,
    description:
      "Created an interactive memory and tribute platform for graduating college seniors, complete with multimedia photo archives, video well-wishes, faculty messages, and event timelines.",
    specs: "STANDARDS: Semantic HTML5 • LOGIC: Modern ES6+ • ASSETS: Compressed Responsive Media • HOSTING: GitHub Pages • STATUS: Archived",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "GitHub Pages"],
    demo: "https://siva-jerry.github.io/Batch_2022-2026_/",
    github: "https://github.com/Siva-jerry/Batch_2022-2026_",
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = projects.length;
  const currentProject = projects[currentIndex];

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning, total]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning, total]);

  // Keyboard Arrow Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  return (
    <section id="projects" className="projects-section lambo-showcase-section">
      <div className="container lambo-container">
        {/* Section Header Badge */}
        <div className="section-header">
          <div className="section-badge">🏎️ Performance Engineered • Showcase</div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
        </div>

        {/* 1. TOP CONTROLS: Left Hex Button, Model Brand Logo, Right Hex Button */}
        <div className="lambo-top-nav-row">
          {/* Left Hexagonal Arrow Button */}
          <button
            className="lambo-hex-btn"
            onClick={handlePrev}
            aria-label="Previous Project Model"
          >
            <svg viewBox="0 0 54 62" className="lambo-hex-svg" aria-hidden="true">
              <polygon
                points="27,2 51,16 51,46 27,60 3,46 3,16"
                className="lambo-hex-polygon"
              />
            </svg>
            <span className="lambo-hex-arrow">&lsaquo;</span>
          </button>

          {/* Centered Project Brand Logo & Racing Accent Strip */}
          <div className="lambo-brand-header">
            <h3 className="lambo-brand-title">{currentProject.brandLogo}</h3>
            <div className="lambo-racing-stripe">
              <span className="stripe-cyan"></span>
              <span className="stripe-white"></span>
              <span className="stripe-indigo"></span>
            </div>
            <span className="lambo-model-code">{currentProject.modelCode}</span>
          </div>

          {/* Right Hexagonal Arrow Button */}
          <button
            className="lambo-hex-btn"
            onClick={handleNext}
            aria-label="Next Project Model"
          >
            <svg viewBox="0 0 54 62" className="lambo-hex-svg" aria-hidden="true">
              <polygon
                points="27,2 51,16 51,46 27,60 3,46 3,16"
                className="lambo-hex-polygon"
              />
            </svg>
            <span className="lambo-hex-arrow">&rsaquo;</span>
          </button>
        </div>

        {/* 2. HERO CONDENSED STATEMENT / SLOGAN */}
        <div className="lambo-headline-wrap">
          <h2 className="lambo-hero-slogan">{currentProject.slogan}</h2>
          <p className="lambo-hero-subtitle">{currentProject.subtitle}</p>
        </div>

        {/* 3. CENTER 3D PROJECT SHOWCASE STAGE (CINEMATIC NO-BOX SHOWROOM) */}
        <div
          className="lambo-stage-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Peek Project (Previous Vehicle/Project) */}
          <div
            className="lambo-stage-vehicle vehicle-prev"
            onClick={handlePrev}
            title={`View ${projects[prevIndex].brandLogo}`}
          >
            <img
              src={projects[prevIndex].image}
              alt={projects[prevIndex].brandLogo}
              className="lambo-vehicle-img"
            />
            <div className="lambo-vehicle-ground-shadow"></div>
          </div>

          {/* Center Active Hero Project */}
          <div className="lambo-stage-vehicle vehicle-active">
            <div className="lambo-active-vehicle-wrap">
              <div className="lambo-vehicle-spotlight"></div>
              <img
                src={currentProject.image}
                alt={currentProject.brandLogo}
                className="lambo-vehicle-img"
              />
              {/* Realistic Ground Floor Shadow */}
              <div className="lambo-vehicle-ground-shadow hero-shadow"></div>
            </div>
          </div>

          {/* Right Peek Project (Next Vehicle/Project) */}
          <div
            className="lambo-stage-vehicle vehicle-next"
            onClick={handleNext}
            title={`View ${projects[nextIndex].brandLogo}`}
          >
            <img
              src={projects[nextIndex].image}
              alt={projects[nextIndex].brandLogo}
              className="lambo-vehicle-img"
            />
            <div className="lambo-vehicle-ground-shadow"></div>
          </div>
        </div>

        {/* 4. SUB-MODEL TABS SELECTOR (Lamborghini Variant Switcher) */}
        <div className="lambo-variant-tabs-strip">
          <div className="lambo-variant-tabs-list">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                className={`lambo-variant-tab ${currentIndex === idx ? "is-active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              >
                <span>{proj.brandLogo}</span>
                {currentIndex === idx && <span className="tab-active-indicator"></span>}
              </button>
            ))}
          </div>
        </div>

        {/* 5. PROJECT DESCRIPTION & ARCHITECTURE SUMMARY */}
        <div className="lambo-description-block">
          <p className="lambo-desc-text">{currentProject.description}</p>

          {/* Tech Badges */}
          <div className="lambo-tech-chips">
            <span className="chips-label">
              <FiLayers /> Stack:
            </span>
            {currentProject.tech.map((t, i) => (
              <span className="lambo-chip" key={i}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 6. HYPERCAR ACTION BUTTONS ROW (Lamborghini CTA Bar) */}
        <div className="lambo-action-cta-row">
          {currentProject.clientDemo ? (
            <>
              <a
                href={currentProject.clientDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="lambo-btn-primary"
              >
                <span>EXPLORE CLIENT DEMO</span>
                <FiArrowUpRight className="lambo-btn-arrow" />
              </a>

              <a
                href={currentProject.adminDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="lambo-btn-secondary"
              >
                <FiCode />
                <span>ADMIN DEMO</span>
              </a>

              <a
                href={currentProject.clientGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="lambo-btn-secondary"
              >
                <FaGithub />
                <span>CLIENT CODE</span>
              </a>

              <a
                href={currentProject.adminGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="lambo-btn-secondary"
              >
                <FaGithub />
                <span>ADMIN CODE</span>
              </a>
            </>
          ) : (
            <>
              <a
                href={currentProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="lambo-btn-primary"
              >
                <span>EXPLORE LIVE DEMO</span>
                <FiArrowUpRight className="lambo-btn-arrow" />
              </a>

              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="lambo-btn-secondary"
              >
                <FaGithub />
                <span>SOURCE CODE</span>
              </a>
            </>
          )}
        </div>

        {/* 7. BOTTOM TELEMETRY SPECIFICATIONS STRIP (Lamborghini Energy/Specs Line) */}
        <div className="lambo-specs-telemetry-bar">
          <p className="lambo-specs-text">{currentProject.specs}</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;