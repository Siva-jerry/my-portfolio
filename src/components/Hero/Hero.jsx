import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="badge">
          🏆 Appathon Winner 2026
        </div>

        <h1>
          Hi, I'm <span>Siva M</span>
        </h1>

        <p className="hero-tag">
  Final Year B.Tech IT Student
</p>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "Android Developer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <p>
          Building web applications, Android apps,
          and AI-powered solutions that solve
          real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="./resume.pdf" download>
  <button>
    Download Resume
  </button>
</a>
          <a href="mailto:msiva0127@gmail.com">
  <button className="secondary">
    Contact Me
  </button>
</a>
        </div>

        <HeroStats />

      </div>

    </section>
  );
}

export default Hero;