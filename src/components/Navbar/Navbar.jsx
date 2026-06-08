import "./Navbar.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <h2 className="logo">
          ⚡ Siva
        </h2>

        <ul className="nav-links">

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#achievements">Achievements</a>
          </li>

          <li>
            <a href="#certifications">
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        <div className="social-icons">

          <a
            href="https://github.com/Siva-jerry"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/siva-m-823698357"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
           href="https://www.instagram.com/example_of_innocent__/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;