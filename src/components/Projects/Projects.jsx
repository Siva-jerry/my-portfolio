import "./Projects.css";
import libraryImg from "../../assets/projects/library.png";
import timetableImg from "../../assets/projects/timetable.png";
import farewellImg from "../../assets/projects/farewell.png";

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
    demo: "#",
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
    demo: "#",
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
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>
          Real-world applications built using Android Development,
          Full Stack Technologies, Firebase and Artificial Intelligence.
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
                <a href={project.demo}>
                  <FaExternalLinkAlt />
                  Demo
                </a>

                <a href={project.github}>
                  <FaGithub />
                  GitHub
                </a>
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