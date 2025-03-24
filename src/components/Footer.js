import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links */}
        <div className="footer-section">
          <ul className="footer-links">
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social & Copyright Combined */}
        <div className="footer-section">
          <ul className="social-icons">
            <li><a href="https://scholar.google.comhttps://scholar.google.com/citations?user=JF_F_uUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Scholar</a></li>
            <li><a href="https://www.linkedin.com/in/tejraj-aminabhavi-4b068750/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://researchgate.nethttps://www.researchgate.net/profile/Tejraj-Aminabhavi-2" target="_blank" rel="noopener noreferrer">ResearchGate</a></li>
          </ul>
          <p className="copyright">&copy; {new Date().getFullYear()} T.M. Aminabhavi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;