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
                <img src="/assets/logo.png" alt="Nexora Logo" className="btn-logo-icon" />
              </span>
            </motion.a>
          </div>

          <motion.div
            className="cta-watermark"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="/assets/logo.png" alt="Nexora Logo Watermark" className="cta-watermark-logo" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
