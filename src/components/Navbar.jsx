import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/#about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'projects', label: 'Our Works', path: '/#projects' },
    { id: 'process', label: 'Process', path: '/#process' },
    { id: 'faq', label: 'FAQ', path: '/#faq' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link to="/" className="nav-brand">
            <div className="logo-mark">
              <img src="/assets/logo.png" alt="Nexora Logo" className="logo-img" />
            </div>
            <span className="logo-text">Nexora</span>
          </Link>
        </motion.div>

        <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => {
            const isActive =
              (item.id === 'services' && (location.pathname === '/services' || location.pathname.startsWith('/service/'))) ||
              (item.id === 'home' && location.pathname === '/' && !location.hash);

            return (
              <motion.div key={item.id} whileHover={{ y: -1 }}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}

          <motion.div whileHover={{ y: -1 }}>
            <Link
              to="/#contact"
              className="nav-link mobile-only-link"
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch
            </Link>
          </motion.div>
        </nav>

        <div className="nav-actions">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/#contact"
              className="btn btn-glass btn-nav desktop-only-btn"
            >
              <span>Get In Touch</span>
              <span className="btn-icon-circle light">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </motion.div>

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
