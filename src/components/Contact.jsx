import React from "react";
import './Contact.css';
import { FaLinkedin, FaEnvelopeOpen, FaInstagram, FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2 className="heading">Contact</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/prema-biradar" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:premapatil.2107@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelopeOpen className="icon" />
        </a>
        <a href="https://www.instagram.com/premaybiradar?igsh=MWE1Y2p4NXFhM21tYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="tel:+91 6362624067" target="_blank" rel="noopener noreferrer">
          <FaPhoneSquareAlt className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
