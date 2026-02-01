import { useState, useEffect } from 'react';
import '../styles/hero.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <div className="greeting">Welcome to my portfolio</div>
            <h1 className="hero-title">
              <span className="title-part-1">Shaik Mahammad</span>
              <span className="title-part-2">Sajid</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer | Problem Solver | B.Tech CSE</p>
            <p className="hero-description">
              Building scalable web applications with React, Node.js, and modern technologies. 
              DSA enthusiast with 600+ LeetCode problems solved.
            </p>
            
            <div className="hero-contact">
              <a href="mailto:maraballikwt@gmail.com" className="contact-link">
                <span>📧</span> maraballikwt@gmail.com
              </a>
              <a href="tel:+919177917648" className="contact-link">
                <span>📱</span> +91 9177917648
              </a>
            </div>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <a
                className="btn btn-resume"
                href="/src/assets/Sajid_Resume.pdf"
                download="Sajid_Resume.pdf"
                aria-label="Download Sajid Resume"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/skmsajid" target="_blank" rel="noopener noreferrer" className="social-icon">
                GitHub
              </a>
              <a href="https://linkedin.com/in/sk-mahammad-sajid" target="_blank" rel="noopener noreferrer" className="social-icon">
                LinkedIn
              </a>
              <a href="https://leetcode.com/Shaik_Mahammad_Sajid" target="_blank" rel="noopener noreferrer" className="social-icon">
                LeetCode
              </a>
            </div>
          </div>

          <div className={`hero-avatar ${isVisible ? 'visible' : ''}`}>
            <div className="avatar-box">
              <div className="avatar-placeholder">
                <img 
                  src="/src/assets/profile_pic.jpg" 
                  alt="Shaik Mahammad Sajid" 
                  className="avatar-image"
                />
              </div>
              <div className="avatar-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
