import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>⚡ Siva....</h2>

        <p>
          Building modern Web Applications,
          Android Apps and AI-powered
          solutions.
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/Siva-jerry"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/siva-m-823698357"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/example_of_innocent__"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
  href="https://maps.app.goo.gl/WtkNXQ5noKeAGXz8A?g_st=awb"
  target="_blank"
  rel="noreferrer"
>
  <FaMapMarkerAlt />
</a>

        </div>

        <div className="footer-links">

  <a href="#about">About</a>

  <a href="#projects">Projects</a>

  <a href="#skills">Skills</a>

  <a href="#achievements">
    Achievements
  </a>

  <a href="#certifications">
    Certifications
  </a>

  <a href="#contact">
    Contact
  </a>

  <a
    href="https://maps.app.goo.gl/WtkNXQ5noKeAGXz8A?g_st=awb"
    target="_blank"
    rel="noreferrer"
  >
    Location
  </a>

</div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Siva M. All Rights Reserved.
        </p>

        <p>
          Built with React + Vite
          <FaHeart className="heart" />
        </p>

      </div>

    </footer>
  );
}

export default Footer;