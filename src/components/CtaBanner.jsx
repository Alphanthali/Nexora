import React from 'react';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  return (
    <section className="section-dark cta-banner-section" id="contact">
      <div className="container">
        <motion.div
          className="cta-banner-grid"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-content">
            <h2 className="cta-heading">
              Let's <span className="font-serif-italic">Work on</span><br />
              Your Next <span className="font-serif-italic">Project</span>
            </h2>

            <motion.a
              href="mailto:hello@nexorastudio.com"
              className="btn btn-orange"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>GET STARTED</span>
              <span className="btn-icon-circle dark">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#F29C38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.a>
          </div>

          <motion.div
            className="cta-watermark"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="340" height="340" viewBox="0 0 100 100" fill="none" opacity="0.08">
              <path d="M50 10L10 30L50 50L90 30L50 10Z" fill="#FFFFFF"/>
              <path d="M10 70L50 90L90 70" stroke="#FFFFFF" strokeWidth="8"/>
              <path d="M10 50L50 70L90 50" stroke="#FFFFFF" strokeWidth="8"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
