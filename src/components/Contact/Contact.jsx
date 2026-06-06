import "./Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      className="contact"
      id="contact"
    >
      <div className="contact-header">

        <h2>Contact Me</h2>

        <p>
          Let's build something amazing together.
          I'm a Final Year B.Tech IT Student passionate
          about Web Development, Android Development
          and Artificial Intelligence.
        </p>

      </div>

      <div className="contact-grid">

        <a
          href="mailto:sivajerry1433@gmail.com"
          className="contact-card"
        >
          <FaEnvelope />

          <h3>Email</h3>

          <span>
            sivajerry1433@gmail.com
          </span>
        </a>

        <div className="contact-card">
          <FaMapMarkerAlt />

          <h3>Location</h3>

          <span>
            Rajapalayam, Tamil Nadu
          </span>
        </div>

        <a
          href="https://github.com/Siva-jerry"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub />

          <h3>GitHub</h3>

          <span>
            github.com/Siva-jerry
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/siva-m-823698357"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin />

          <h3>LinkedIn</h3>

          <span>
            Connect With Me
          </span>
        </a>

        <a
          href="https://instagram.com/example_of_innocent__"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaInstagram />

          <h3>Instagram</h3>

          <span>
            @example_of_innocent__
          </span>
        </a>

      </div>

      <div className="student-status">
        <h3>
          🎯 Seeking Internship & Entry-Level Software Development Opportunities
        </h3>
      </div>

      <div className="contact-action">

        <a
          href="mailto:sivajerry1433@gmail.com"
          className="contact-btn"
        >
          Send Message
        </a>

      </div>
    </section>
  );
}

export default Contact;