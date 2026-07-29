import "./Projects.css";
import libraryImg from "../../assets/projects/library.png";
import timetableImg from "../../assets/projects/timetable.png";
import farewellImg from "../../assets/projects/farewell.png";
import spiderverseImg from "../../assets/projects/spiderverse.png";
import ben10Img from "../../assets/projects/ben10.png";
import shopaiImg from "../../assets/projects/shopai.png";
import portfolioImg from "../../assets/projects/portfolio.avif";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    image: libraryImg,
    title: "Library & Student Resource System",
    description:
      "Comprehensive Library Management platform with Android application and Admin Dashboard. Features include book reservation, issue-return tracking, study materials, AI assistant, notifications and student resource management.",
    tech: [
      "Java",
      "Android Studio",
      "Firebase",
      "Firestore",
      "Authentication",
      "FCM",
    ],
    demo: "https://drive.google.com/drive/folders/1evlwQ-18_IuM3JKiu3TBtAoCRGB5-t-l",
    github: "#",
  },

  {
    image: timetableImg,
    title: "AI Timetable Management System",
    description:
      "Smart timetable generation system with automated scheduling, conflict detection, classroom allocation, teacher management and real-time timetable updates.",
    tech: [
      "React",
      "Node.js",
      "Firebase",
      "Firestore",
      "Authentication",
      "AI",
    ],
    demo: "https://drive.google.com/drive/folders/1LnqB4LVU2rIy8RQPnxHedKOz-SPeFJz3",
    github: "#",
  },

  {
    image: farewellImg,
    title: "Senior Farewell Memories Website",
    description:
      "Interactive farewell platform for final-year students featuring memory galleries, videos, faculty wishes, downloadable content and celebration timeline.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub Pages",
      "Responsive UI",
    ],
    demo: "https://siva-jerry.github.io/Batch_2022-2026_/",
    github: "https://github.com/Siva-jerry/Batch_2022-2026_",
  },
  {
  image: spiderverseImg,
  title: "Spider-Verse Interactive Fan Experience",
  description:
    "An immersive Spider-Man themed web application featuring character stories, powers, villains, allies, iconic suits, Spider-Verse exploration, cinematic visuals, background music, and an embedded movie trailer for an engaging user experience.",
  tech: [
    "React",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "GitHub Pages",
    "Multimedia Integration",
  ],
  demo: "https://siva-jerry.github.io/spiderverse/",
  github: "https://github.com/Siva-jerry/spiderverse",
},
{
  image: ben10Img,

  title: "Ben 10 Universe Interactive Fan Experience",

  description:
    "A fully responsive Ben 10 themed web application featuring Original Series, Alien Force, Ultimate Alien and Omniverse databases. Includes alien encyclopedia, allies, villains, transformations, universe exploration, cinematic animations, background music and immersive user interaction.",

  tech: [
    "React",
    "TypeScript",
    "Vite",
    "CSS3",
    "Framer Motion",
    "GitHub Pages",
    "Responsive Design",
  ],

  demo: "https://siva-jerry.github.io/ben10-universe/",

  github: "https://github.com/Siva-jerry/ben10-universe",
},
{
  image: shopaiImg,

  title: "ShopAI – AI-Powered Product Search Platform",

  description:
    "An AI-powered product discovery and recommendation platform that searches products from multiple external APIs, analyzes product relevance, price, quality and customer feedback, and provides intelligent recommendations such as Best Overall, Best Budget and Best Premium. The application includes advanced product search, category exploration, AI insights and responsive product cards.",

  tech: [
    "React",
    "Vite",
    "Node.js",
    "Express.js",
    "Gemini AI",
    "REST APIs",
    "Axios",
    "Framer Motion",
    "Render",
    "Vercel",
  ],

  demo: "https://shop-ai-ten-zeta.vercel.app",

  github: "https://github.com/Siva-jerry/ShopAI",
},
{
  image: portfolioImg,

  title: "Portfolio CMS",

  description:
    "A modern Portfolio Management System with a dedicated Admin Dashboard. Update Hero, About, Skills, Projects, Experience, Certificates, Gallery, Testimonials, Contact and Footer without editing code.",

  tech: [
    "React",
    "Firebase",
    "Firestore",
    "Supabase",
    "Vite",
    "Vercel",
  ],

  clientDemo:
    "https://client-portfolio-inky.vercel.app",

  adminDemo:
    "https://drive.google.com/drive/folders/1-bDXgIOdw_rO-htoP8fJb-08Hqv61Sh9",

  clientGithub:
    "https://github.com/Siva-jerry/Client-Portfolio",

  adminGithub:
    "https://github.com/Siva-jerry/Admin-Portfolio",
},
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
       <p>
  Real-world applications built using React, Android Development,
  Full Stack Technologies, Firebase, Artificial Intelligence and
  Interactive Web Experiences.
</p>
      </div>

      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-left">
              <span className="project-number">
                0{index + 1}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
<div className="project-links">

  {project.clientDemo ? (
    <>
      <a
        href={project.clientDemo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt />
        Client Demo
      </a>

      <a
        href={project.adminDemo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt />
        Admin Demo
      </a>

      <a
        href={project.clientGithub}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        Client GitHub
      </a>

      <a
        href={project.adminGithub}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        Admin GitHub
      </a>
    </>
  ) : (
    <>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt />
        Demo
      </a>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        GitHub
      </a>
    </>
  )}

</div>
            </div>

            <div className="project-right">
              <div className="project-image">
  <img
    src={project.image}
    alt={project.title}
  />
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;