import "./About.css";
import profile from "../../assets/images/profile.jpeg";

function About() {
return (
<section className="about" id="about">

  <div className="about-container">

    <div className="about-image">
      <img src={profile} alt="Siva M" />
    </div>

    <div className="about-content">

      <h2>About Me</h2>

      <p>
        I'm Siva M, a Final Year B.Tech Information Technology
        student passionate about Full Stack Development,
        Android Development, Artificial Intelligence,
        and emerging technologies.
      </p>

      <p>
        I enjoy building modern web applications, Android
        applications, and AI-powered solutions that solve
        real-world problems. I continuously explore new
        technologies and improve my development skills through
        hands-on projects and practical learning.
      </p>

      <p>
        My goal is to become a skilled Software Engineer and
        contribute to innovative products that create meaningful
        impact while continuously learning and growing in the
        technology industry.
      </p>

      <div className="interests">

        <span>💻 Full Stack Development</span>
        <span>📱 Android Development</span>
        <span>🤖 Artificial Intelligence</span>
        <span>🎨 UI/UX Design</span>
        <span>🎬 Video Editing</span>
        <span>🚀 Emerging Technologies</span>

      </div>

      <blockquote>
        "Technology is not just what I study,
        it's what I enjoy building every day."
      </blockquote>

    </div>

  </div>

</section>

);
}

export default About;