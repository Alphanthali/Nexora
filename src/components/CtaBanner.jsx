import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/#contact"
                className="btn btn-glass btn-nav"
              >
                <span>Start a Project</span>
                <span className="btn-icon-circle light">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="cta-watermark"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="/assets/logo.png" alt="Nexora Logo Mark" className="cta-watermark-logo" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
