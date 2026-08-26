import React, { useState } from "react";
import "./Projects.css";
import libraryImg from "../../assets/projects/library.png";
import timetableImg from "../../assets/projects/timetable.png";
import farewellImg from "../../assets/projects/farewell.png";
import spiderverseImg from "../../assets/projects/spiderverse.png";
import ben10Img from "../../assets/projects/ben10.png";
import shopaiImg from "../../assets/projects/shopai.png";
import portfolioImg from "../../assets/projects/portfolio.avif";
import harryPotterImg from "../../assets/projects/harry-potter.png";
import { FaGithub, FaExternalLinkAlt, FaFolder, FaLayerGroup } from "react-icons/fa";
import { FiArrowUpRight, FiGlobe, FiCode, FiSmartphone } from "react-icons/fi";

const projectCategories = [
  { id: "all", label: "All Projects", count: 8 },
  { id: "fullstack", label: "Full Stack & Web", count: 3 },
  { id: "android", label: "Android & Mobile", count: 1 },
  { id: "interactive", label: "Interactive & AI", count: 4 },
];

const projects = [
  {
    image: shopaiImg,
    title: "ShopAI – AI-Powered Product Discovery",
    category: "interactive",
    badge: "AI Powered",
    typeIcon: <FiGlobe />,
    slug: "shop-ai.vercel.app",
    description:
      "Intelligent product discovery and comparison engine with Gemini AI insights, multi-source product aggregation, and automated price-to-quality recommendations.",
    tech: ["React", "Node.js", "Express", "Gemini AI", "REST APIs", "Vercel"],
    demo: "https://shop-ai-ten-zeta.vercel.app",
    github: "https://github.com/Siva-jerry/ShopAI",
  },
  {
    image: libraryImg,
    title: "Library & Student Resource System",
    category: "android",
    badge: "Android App",
    typeIcon: <FiSmartphone />,
    slug: "library-system.app",
    description:
      "Enterprise-grade Library Management Android application and Admin Dashboard with real-time book reservations, issue tracking, AI assistant, and push alerts.",
    tech: ["Java", "Android Studio", "Firebase", "Firestore", "Cloud Messaging"],
    demo: "https://drive.google.com/drive/folders/1evlwQ-18_IuM3JKiu3TBtAoCRGB5-t-l",
    github: "https://github.com/Siva-jerry",
  },
  {
    image: timetableImg,
    title: "AI Timetable Generation System",
    category: "fullstack",
    badge: "Full Stack AI",
    typeIcon: <FiGlobe />,
    slug: "timetable-ai.app",
    description:
      "Intelligent academic scheduling platform with conflict detection algorithms, automated classroom allocation, faculty management, and instant export.",
    tech: ["React", "Node.js", "Firebase", "Firestore", "AI Scheduling"],
    demo: "https://drive.google.com/drive/folders/1LnqB4LVU2rIy8RQPnxHedKOz-SPeFJz3",
    github: "https://github.com/Siva-jerry",
  },
  {
    image: portfolioImg,
    title: "Portfolio CMS & Admin Management",
    category: "fullstack",
    badge: "Full Stack CMS",
    typeIcon: <FiCode />,
    slug: "portfolio-cms.vercel.app",
    description:
      "Dynamic Headless Content Management System with a specialized Admin Dashboard for real-time portfolio data updates without editing code.",
    tech: ["React", "Firebase", "Firestore", "Supabase", "Vite", "Vercel"],
    clientDemo: "https://client-portfolio-inky.vercel.app",
    adminDemo: "https://drive.google.com/drive/folders/1-bDXgIOdw_rO-htoP8fJb-08Hqv61Sh9",
    clientGithub: "https://github.com/Siva-jerry/Client-Portfolio",
    adminGithub: "https://github.com/Siva-jerry/Admin-Portfolio",
  },
  {
    image: harryPotterImg,
    title: "Harry Potter – Wizarding Encyclopedia",
    category: "interactive",
    badge: "Cinematic Web",
    typeIcon: <FiGlobe />,
    slug: "harry-potter.vercel.app",
    description:
      "Immersive Harry Potter fan encyclopedia featuring Hogwarts houses, interactive potion brewing, spell databases, magical creatures, and audio soundscapes.",
    tech: ["React", "Vite", "JavaScript", "CSS3", "Firebase Storage"],
    demo: "https://harry-potter-encyclopedia-eosin.vercel.app",
    github: "https://github.com/Siva-jerry/harry-potter-encyclopedia",
  },
  {
    image: ben10Img,
    title: "Ben 10 Universe Fan Experience",
    category: "interactive",
    badge: "Fan Universe",
    typeIcon: <FiGlobe />,
    slug: "ben10-universe.github.io",
    description:
      "Interactive fan web application covering Original Series to Omniverse with alien encyclopedia, Omnitrix transformations, villain lore, and motion animations.",
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "CSS3"],
    demo: "https://siva-jerry.github.io/ben10-universe/",
    github: "https://github.com/Siva-jerry/ben10-universe",
  },
  {
    image: spiderverseImg,
    title: "Spider-Verse Interactive Experience",
    category: "interactive",
    badge: "Interactive Hub",
    typeIcon: <FiGlobe />,
    slug: "spiderverse.github.io",
    description:
      "Cinematic Spider-Man fan portal exploring multidimensional Spidey variants, villains, allies, iconic suits, movie trailer integration, and background audio.",
    tech: ["React", "CSS3", "JavaScript", "Multimedia", "GitHub Pages"],
    demo: "https://siva-jerry.github.io/spiderverse/",
    github: "https://github.com/Siva-jerry/spiderverse",
  },
  {
    image: farewellImg,
    title: "Senior Farewell Memories Platform",
    category: "fullstack",
    badge: "Web Application",
    typeIcon: <FiGlobe />,
    slug: "farewell-batch.github.io",
    description:
      "Interactive memory platform for graduating students featuring photo galleries, video messages, faculty wishes, celebration timelines, and yearbooks.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "GitHub Pages"],
    demo: "https://siva-jerry.github.io/Batch_2022-2026_/",
    github: "https://github.com/Siva-jerry/Batch_2022-2026_",
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab || (activeTab === "fullstack" && p.category === "interactive"));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">🚀 Featured Work</div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world software engineered with modern web frameworks, native Android tooling, and artificial intelligence.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="project-category-tabs">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              className={`project-cat-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="p-count-pill">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Responsive Card Grid with Strict Fixed-Size Preview Viewport */}
        <div className="projects-showcase-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-showcase-card glass-panel" key={index}>
              {/* Browser Window Device Mockup with Fixed Viewport */}
              <div className="project-viewport-window">
                <div className="viewport-header-bar">
                  <div className="viewport-traffic-dots">
                    <span className="v-dot dot-close"></span>
                    <span className="v-dot dot-min"></span>
                    <span className="v-dot dot-max"></span>
                  </div>

                  <div className="viewport-address-slug">
                    {project.typeIcon}
                    <span>{project.slug}</span>
                  </div>

                  <div className="viewport-status-badge">
                    <span className="v-live-dot"></span>
                    <span>{project.badge}</span>
                  </div>
                </div>

                {/* STRICT FIXED-SIZE CANVAS WITH OBJECT-FIT CONTAIN (100% FULL IMAGE VISIBILITY) */}
                <div className="project-viewport-canvas">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-mockup-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Meta & Info */}
              <div className="project-content-block">
                <div className="project-headline-row">
                  <span className="project-number-tag">0{index + 1}</span>
                  <h3 className="project-title-text">{project.title}</h3>
                </div>

                <p className="project-summary-text">{project.description}</p>

                {/* Tech Badges */}
                <div className="project-tech-badges">
                  {project.tech.map((tech, tIdx) => (
                    <span className="tech-badge-item" key={tIdx}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links Buttons */}
                <div className="project-action-buttons">
                  {project.clientDemo ? (
                    <>
                      <a
                        href={project.clientDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-btn p-btn-primary"
                      >
                        <span>Client Demo</span>
                        <FiArrowUpRight className="p-btn-arr" />
                      </a>
                      <a
                        href={project.adminDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-btn p-btn-outline"
                      >
                        <span>Admin Demo</span>
                        <FiArrowUpRight className="p-btn-arr" />
                      </a>
                      <a
                        href={project.clientGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-btn p-btn-outline"
                      >
                        <FaGithub />
                        <span>Client Code</span>
                      </a>
                      <a
                        href={project.adminGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-btn p-btn-outline"
                      >
                        <FaGithub />
                        <span>Admin Code</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-btn p-btn-primary"
                      >
                        <span>Live Demo</span>
                        <FiArrowUpRight className="p-btn-arr" />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-btn p-btn-outline"
                      >
                        <FaGithub />
                        <span>Source Code</span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;