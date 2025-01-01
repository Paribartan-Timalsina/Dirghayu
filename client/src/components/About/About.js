// About.js

import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-description">Welcome to our Electronic Health Record System. This system is designed to efficiently manage and store patient health information, providing healthcare professionals with easy access to patient records.</p>
      <p className="about-description">Our goal is to improve healthcare outcomes by enabling accurate and secure documentation, streamlined workflows, and effective communication among healthcare providers.</p>
      <p className="about-description">Feel free to explore our system and <a href='/contact'>contact us</a> if you have any questions or feedback.</p>
    </div>
  );
}

export default About;
