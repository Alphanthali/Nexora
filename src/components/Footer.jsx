import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-main">
        <div className="footer-brand-col">
          <a href="#" className="footer-logo">Nexora</a>
          <p className="footer-tagline">Reimagining digital experiences for visionary brands worldwide.</p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Our Works</a></li>
            <li><a href="#process">Process</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Socials</h4>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
            <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-flex">
          <p className="copyright">© 2026 Nexora. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="dot-separator">•</span>
            <a href="#">Terms of Service</a>
            <a href="#home" className="scroll-top-btn" aria-label="Scroll to top">↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
