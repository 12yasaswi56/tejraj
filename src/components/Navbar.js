import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Prof. Aminabhavi Name (Separate Styling) */}
        <h1 className="navbar-logo">Prof. Tejraj M. Aminabhavi</h1>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navbar Links with Proper Spacing */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link></li>
          <li><Link to="/publications" onClick={() => setMenuOpen(false)}>Publications</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/cv" onClick={() => setMenuOpen(false)}>CV</Link></li>
          <li><Link to="/news-events" onClick={() => setMenuOpen(false)}>News & Events</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/co-authors" onClick={() => setMenuOpen(false)}>CoAuthors</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
