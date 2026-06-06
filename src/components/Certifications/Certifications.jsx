import "./Certifications.css";
import {
  FaCertificate,
  FaRobot,
  FaLaptopCode,
  FaIndustry,
  FaChartLine,
} from "react-icons/fa";

function Certifications() {
  return (
    <section
      className="certifications"
      id="certifications"
    >
      <div className="certifications-header">
        <h2>Certifications</h2>

        <p>
          Continuous learning through AI,
          Development, Industry Training and
          Professional Certifications.
        </p>
      </div>

      {/* Counter */}

      <div className="certificate-counter">
        <FaCertificate />

        <h3>20+</h3>

        <span>Certifications Earned</span>
      </div>

      {/* Categories */}

      <div className="certifications-grid">

        {/* AI */}

        <div className="cert-card ai-card">
          <div className="cert-icon">
            <FaRobot />
          </div>

          <h3>
            Artificial Intelligence
          </h3>

          <ul>
            <li>Generative AI Mastermind – Outskill</li>
<li>Artificial Intelligence Fundamentals – IBM SkillsBuild</li>
<li>Artificial Intelligence MasterClass – NoviTech</li>
<li>Computer Vision 101 – Infosys Springboard</li>
<li>Introduction to Artificial Intelligence – Infosys</li>
<li>Introduction to Deep Learning – Infosys</li>
<li>Introduction to Natural Language Processing – Infosys</li>
          </ul>
        </div>

        {/* Development */}

        <div className="cert-card dev-card">
          <div className="cert-icon">
            <FaLaptopCode />
          </div>

          <h3>
            Development
          </h3>

          <ul>
  <li>Full Stack Development MasterClass – NoviTech R&D Pvt. Ltd.</li>

  <li>UI/UX Design MasterClass – NoviTech R&D Pvt. Ltd.</li>

  <li>Hands-on React.js Training (React + Vite + MERN Stack) – Campus Connection</li>

  <li>Android App Development – CADD Expert Training Institution</li>

  <li>Android App Development – Vinsup Academy / Vinsup Infotech</li>
</ul>
        </div>

        {/* Data */}

        <div className="cert-card data-card">
          <div className="cert-icon">
            <FaChartLine />
          </div>

          <h3>
            Data & Automation
          </h3>

         <ul>
  <li>Introduction to Data Science – Infosys Springboard</li>

  <li>Introduction to Robotic Process Automation – Infosys Springboard</li>

  <li>Continuous Integration and Delivery (DevOps) – Infosys Springboard</li>

  <li>Introduction to Agile Methodology – Infosys Springboard</li>

  <li>Customer Engagement: Problem Solving and Process Controls – IBM SkillsBuild</li>

  <li>Customer Engagement: Communication and Personality Dynamics – IBM SkillsBuild</li>
</ul>
        </div>

        {/* Industry */}

        <div className="cert-card industry-card">
          <div className="cert-icon">
            <FaIndustry />
          </div>

          <h3>
            Industry Training
          </h3>

          <ul>
  <li>Zoho Creator Student Training Program – Zoho Creator Young Creators Program</li>

  <li>Green Skills and Artificial Intelligence Foundation Course – Edunet Foundation</li>

  <li>AICTE & Shell Skills4Future Program</li>

  <li>Professional Industry Training Programs</li>

  <li>Practical Project-Based Learning Workshops</li>
</ul>
        </div>

      </div>
    </section>
  );
}

export default Certifications;