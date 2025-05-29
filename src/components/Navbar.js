import React from "react";
import "../styles/Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo-link">
          <img src="/logo.png" alt="New York Times Logo" className="logo-image" />
      </a>
      <ul className="nav-links">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
