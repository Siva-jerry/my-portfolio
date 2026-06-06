import "./Achievements.css";
import {
  FaTrophy,
  FaAward,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "APPATHON 2026 Winner",
    subtitle: "SNS College of Technology",
    description:
      "Secured 1st Place in APPATHON 2026 and received a cash prize of ₹5000.",
    color: "gold-card",
  },

  {
    icon: <FaAward />,
    title: "Techathon 2026 Winner",
    subtitle: "J.P. College of Engineering",
    description:
      "Won 1st Place in IT Department Project Expo and received ₹3000 cash prize.",
    color: "silver-card",
  },

  {
    icon: <FaRocket />,
    title: "Project Expo Participant",
    subtitle: "National Level Symposium",
    description:
      "Presented innovative software solutions and showcased technical projects.",
    color: "blue-card",
  },

  {
    icon: <FaCertificate />,
    title: "20+ Certifications",
    subtitle: "AI • React • Full Stack",
    description:
      "Completed certifications in AI, React.js, Full Stack Development, UI/UX and Data Science.",
    color: "cyan-card",
  },
];

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-header">
        <h2>Achievements & Awards</h2>

        <p>
          Milestones, recognitions and accomplishments earned through
          projects, competitions and continuous learning.
        </p>
      </div>

      <div className="achievement-stats">
        <div className="stat-box">
          <h3>2+</h3>
          <span>Awards</span>
        </div>

        <div className="stat-box">
          <h3>15+</h3>
          <span>Certificates</span>
        </div>

        <div className="stat-box">
          <h3>3+</h3>
          <span>Projects</span>
        </div>

        <div className="stat-box">
          <h3>1+</h3>
          <span>Internship</span>
        </div>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div
            className={`achievement-card ${item.color}`}
            key={index}
          >
            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <h4>{item.subtitle}</h4>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;