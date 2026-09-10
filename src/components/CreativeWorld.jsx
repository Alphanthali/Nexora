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
            Creative <span className="font-extralight">World</span>
          </h2>

          <p className="creative-lead-text">
            Nexora Studio is a creative powerhouse where strategy, design, and technology come together to build brands that stand out. From bold visual identities to engaging digital experiences, we transform ideas into meaningful creative solutions that connect, inspire, and move businesses forward.
          </p>

          <p className="creative-sub-text">
            We don't just create, we create with purpose, shaping what's next for ambitious brands.
          </p>

          <motion.div
            className="agency-badge-card"
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="badge-avatar"></div>
            <div className="badge-info">
              <span className="badge-title">Alpha Leave</span>
              <span className="badge-subtitle">Founder &amp; CEO</span>
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
