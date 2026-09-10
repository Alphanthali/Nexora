import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <motion.a
          href="#"
          className="nav-brand"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="logo-mark">
            <img src="/assets/logo.png" alt="Nexora Logo" className="logo-img" />
          </div>
          <span className="logo-text">Nexora</span>
        </motion.a>

        <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          {['home', 'about', 'services', 'projects', 'process', 'faq'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className={`nav-link ${activeNav === item ? 'active' : ''}`}
              onClick={() => {
                setActiveNav(item);
                setMobileOpen(false);
              }}
              whileHover={{ y: -1 }}
            >
              {item === 'home' ? 'Home' :
               item === 'about' ? 'About Us' :
               item === 'services' ? 'Services' :
               item === 'projects' ? 'Our Works' :
               item === 'process' ? 'Process' : 'FAQ'}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className={`nav-link mobile-only-link ${activeNav === 'contact' ? 'active' : ''}`}
            onClick={() => {
              setActiveNav('contact');
              setMobileOpen(false);
            }}
            whileHover={{ y: -1 }}
          >
            Get In Touch
          </motion.a>
        </nav>

        <div className="nav-actions">
          <motion.a
            href="#contact"
            className="btn btn-glass btn-nav desktop-only-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>GET IN TOUCH</span>
            <span className="btn-icon-circle light">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
