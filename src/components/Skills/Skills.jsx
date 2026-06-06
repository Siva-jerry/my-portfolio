import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiFirebase,
  SiAndroidstudio,
  SiPython,
} from "react-icons/si";

import { BsRobot } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React JS" },
 { icon: <SiPython />, name: "Python" },

  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },

  { icon: "📱", name: "Responsive Design" },
  { icon: "🎨", name: "UI/UX Design" },
  { icon: "🌐", name: "REST API" },

  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiAndroidstudio />, name: "Android Studio" },

  { icon: <BsRobot />, name: "AI Fundamentals" },
  { icon: <FaVideo />, name: "Video Editing" },
  { icon: "⚡", name: "Vibe Coding" },

  { icon: "🧩", name: "Problem Solving" },
  { icon: "🤝", name: "Team Collaboration" },
  { icon: "💬", name: "Communication" },
  { icon: "🚀", name: "Adaptability" },
  { icon: "📚", name: "Quick Learning" },
  { icon: "⏰", name: "Time Management" },
  { icon: "🎯", name: "Critical Thinking" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-header">
          <h2>My Skills</h2>

          <p>
            Technologies, frameworks and tools I use to build
            web applications, Android apps and AI-powered solutions.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;