import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-container">
        <motion.img
          src="/assets/hero_3d_sphere.png"
          alt="Futuristic 3D Orb Background"
          className="hero-3d-orb"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="hero-overlay-gradient"></div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Your <span className="font-serif-italic">Vision</span>,<br />
            Reimagined by <span className="font-serif-italic">Nexora</span>.
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            At Nexora, we craft cutting-edge digital experiences that transform brands and elevate businesses through design, technology, and innovation.
          </motion.p>

          <motion.div className="hero-cta-group" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-orange"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>WHAT WE DO</span>
              <span className="btn-icon-circle dark">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#F29C38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="#services"
              className="btn btn-glass"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>OUR PROJECTS</span>
              <span className="btn-icon-circle light">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
