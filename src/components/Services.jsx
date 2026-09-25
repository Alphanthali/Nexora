import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../context/ContentContext';

export default function Services() {
  const { services } = useContent();
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="section-dark services-section" id="services">
      <div className="container services-grid">
        <motion.div
          className="services-info-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-heading light-text">
            What <span className="font-serif-italic">We Do</span><br />
            Best.
          </h2>

          <p className="services-description">
            Empowering brands through innovative design and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          className="services-list-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <ul className="services-accordion">
            {services.map((item, idx) => (
              <motion.li
                key={item.id || idx}
                className={`service-item ${activeService === idx ? 'active' : ''}`}
                onClick={() => setActiveService(idx === activeService ? null : idx)}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="service-header">
                  <span className="service-num">{item.num || String(idx + 1).padStart(2, '0')}</span>
                  <span className="service-title">{item.title}</span>
                  <motion.span
                    className="service-icon"
                    animate={{ rotate: activeService === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {activeService === idx && (
                    <motion.div
                      className="service-body-framer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ paddingTop: '16px', paddingLeft: '42px', color: 'var(--text-muted-dark)', lineHeight: '1.6' }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
