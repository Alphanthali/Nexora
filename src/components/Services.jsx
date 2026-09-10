import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
  {
    num: '01',
    title: 'Branding and Identity Design',
    desc: 'Crafting unique visual identities, logo marks, brand voice guidelines, and comprehensive aesthetic systems that leave a lasting impression.'
  },
  {
    num: '02',
    title: 'Website Design and Development',
    desc: 'Building high-performance, responsive websites with immersive animations, smooth micro-interactions, and robust engineering.'
  },
  {
    num: '03',
    title: 'UI/UX Design and Prototyping',
    desc: 'Designing human-centered mobile and web application interfaces that combine visual aesthetics with effortless user flows.'
  },
  {
    num: '04',
    title: 'Creative Consulting and Development',
    desc: 'Guiding tech leaders and brands through digital transformation, product strategy, content direction, and design audits.'
  }
];

export default function Services() {
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

          <motion.a
            href="#contact"
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
        </motion.div>

        <motion.div
          className="services-list-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <ul className="services-accordion">
            {servicesData.map((item, idx) => (
              <motion.li
                key={idx}
                className={`service-item ${activeService === idx ? 'active' : ''}`}
                onClick={() => setActiveService(idx === activeService ? null : idx)}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="service-header">
                  <span className="service-num">{item.num}</span>
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
                      <p style={{ paddingTop: '16px', paddingLeft: '42px', color: 'var(--text-muted-dark)', lineHeight: '1.6' }}>{item.desc}</p>
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
