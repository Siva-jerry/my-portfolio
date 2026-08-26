import React, { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaClock,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Opportunity",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("sivajerry1433@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:sivajerry1433@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Siva,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">💬 Get In Touch</div>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, an engineering opportunity to discuss, or just want to connect? My inbox is always open.
          </p>
        </div>

        {/* Main 2-Column Professional Contact Grid */}
        <div className="contact-pro-grid">
          {/* Left Column: Direct Communication Hub */}
          <div className="contact-info-panel glass-panel">
            {/* Availability Pill */}
            <div className="availability-pill">
              <span className="live-radar"></span>
              <span>Available for Full-Time Roles & Internships</span>
            </div>

            <h3 className="contact-panel-heading">
              Let's build something exceptional together.
            </h3>

            <p className="contact-panel-desc">
              I am actively seeking software engineering roles, full-stack web opportunities, and native Android projects. 
              Feel free to reach out directly through any of the channels below.
            </p>

            {/* Direct Channel Cards */}
            <div className="contact-channels-list">
              {/* Email Channel */}
              <div className="channel-item glass-panel">
                <div className="channel-icon-box email">
                  <FaEnvelope />
                </div>
                <div className="channel-content">
                  <span className="channel-label">Email Address</span>
                  <a href="mailto:sivajerry1433@gmail.com" className="channel-value">
                    sivajerry1433@gmail.com
                  </a>
                </div>
                <button
                  className="channel-copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                >
                  {copied ? <FaCheck className="copy-ok" /> : <FaCopy />}
                  <span className="copy-text">{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Location Channel */}
              <a
                href="https://maps.app.goo.gl/WtkNXQ5noKeAGXz8A?g_st=awb"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item glass-panel hoverable"
              >
                <div className="channel-icon-box location">
                  <FaMapMarkerAlt />
                </div>
                <div className="channel-content">
                  <span className="channel-label">Location</span>
                  <span className="channel-value">Rajapalayam, Tamil Nadu, India</span>
                </div>
                <span className="channel-link-arrow">↗</span>
              </a>

              {/* Social Channels Row */}
              <div className="contact-social-row">
                <a
                  href="https://www.linkedin.com/in/siva-m-823698357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-pill linkedin glass-panel"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Siva-jerry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-pill github glass-panel"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://instagram.com/example_of_innocent__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-pill instagram glass-panel"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="response-time-badge">
              <FaClock className="clock-ico" />
              <span>Typical response time: Within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="contact-form-panel glass-panel">
            <h3 className="form-panel-title">Send a Direct Message</h3>
            <p className="form-panel-subtitle">
              Fill out the form below to initiate an email conversation directly with me.
            </p>

            <form onSubmit={handleSubmit} className="pro-contact-form">
              <div className="form-group">
                <label htmlFor="contact-name">
                  <FiUser /> Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">
                  <FiMail /> Your Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">
                  <FaBriefcase /> Inquiring About
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Full-Time Opportunity">Full-Time Software Engineer Role</option>
                  <option value="Internship">Internship Opportunity</option>
                  <option value="Freelance / Web Project">Web Application Project</option>
                  <option value="Android Development">Android App Project</option>
                  <option value="General Collaboration">General Collaboration & Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">
                  <FiMessageSquare /> Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Describe your project, team, or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                <span>Send Message</span>
                <FiSend className="send-arrow-ico" />
              </button>

              {submitted && (
                <div className="form-success-toast">
                  <FaCheck /> Opening your email client to dispatch message!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;