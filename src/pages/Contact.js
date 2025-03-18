import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <h1>Contact Me</h1>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        {submitted ? (
          <p className="success-message">Thank you! Your message has been received.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>

      {/* Email & Office Address */}
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:aminabhavit@gmail.com">aminabhavit@gmail.com</a></p>
        <p>Office: <br />School of Advanced Sciences, <br />KLE Technological University, <br />Hubballi, India</p>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <h2>Connect with Me</h2>
        <ul>
          <li><a href="https://scholar.google.com/citations?hl=en&user=JF_F_uUAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
          <li><a href="https://www.linkedin.com/in/tejraj-aminabhavi-4b068750?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.researchgate.net/profile/Tejraj-Aminabhavi-2" target="_blank" rel="noopener noreferrer">ResearchGate</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
