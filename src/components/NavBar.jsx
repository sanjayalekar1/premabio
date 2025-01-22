import React from 'react';
import './NavBar.css';

import { useState, useEffect } from "react";

function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Check if the scroll position is greater than 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar fixed-top">
        <a className={`navbar-brand ${isScrolled ? "scrolled" : ""}`} title="Prema Biradar" href="#/">
        <span className="full-name">Prema Biradar</span>
        <span className="initials">PB</span>
        </a>
        <p className="job-role">Web Developer</p>
        <div>
        <ul className="navbar-links">
            <li onClick={() => scrollToSection("home")}><a href="#home">Home</a></li>
            <li onClick={() => scrollToSection("about")}><a href="#about">About</a></li>
            <li onClick={() => scrollToSection("experience")}><a href="#experience">Experience</a></li>
            <li onClick={() => scrollToSection("projects")}><a href="#projects">Projects</a></li>
            <li onClick={() => scrollToSection("contact")}><a href="#contact">Contact</a></li>
        </ul>
        </div>
        <div className="navbar-theme-toggle">
        <span>🌙</span>
        </div>
    </nav>
  );
}
export default NavBar;