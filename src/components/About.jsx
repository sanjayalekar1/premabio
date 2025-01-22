import React from 'react';
import './About.css';
import profileImage from '../assets/my-profile-2024.jpeg'; // Replace with your image path

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <p className="intro">Hi, my name is</p>
          <h1>PREMA BIRADAR.</h1>
          <h2>I build things for the web.</h2>
          <p className="description">
            I’m a web developer specializing in building exceptional digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
