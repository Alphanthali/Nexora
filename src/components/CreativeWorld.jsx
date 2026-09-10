import React from 'react';
import { motion } from 'framer-motion';

export default function CreativeWorld() {
  return (
    <section className="section-light creative-world-section" id="about">
      <div className="container creative-grid">
        <motion.div
          className="creative-text-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-heading dark-text">
            Explore Our<br />
            Creative
            <span className="font-serif-italic">World</span>
          </h2>

          <p className="creative-lead-text">
            At Nexora, we combine design, technology, and strategic thinking to create digital products and brand identities that stand out. We bring ideas to life with precision and creativity.
          </p>

          <p className="creative-sub-text">
            Our team of experts collaborates closely with clients to deliver tailored solutions that drive results.
          </p>

          <motion.div
            className="agency-badge-card"
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="badge-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polygon points="12 8 16 12 12 16 12 8" />
              </svg>
            </div>
            <div className="badge-info">
              <span className="badge-title">Alpha Leave</span>
              <span className="badge-subtitle">Founder & CEO</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="creative-media-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="image-frame"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img src="/assets/creative_world_desk.png" alt="Creative Studio Workspace Desk" className="creative-img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
