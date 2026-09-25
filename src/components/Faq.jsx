import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../context/ContentContext';

export default function Faq() {
  const { faqs } = useContent();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section-grey faq-section" id="faq">
      <div className="container faq-grid">
        <motion.div
          className="faq-info-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="faq-main-heading">FAQ's</h2>
          <p className="faq-subtext">
            Have questions? We have answers. Find everything you need to know about working with Nexora.
          </p>
        </motion.div>

        <motion.div
          className="faq-accordion-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="faq-accordion">
            {faqs.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                className={`faq-item ${openIdx === idx ? 'active' : ''}`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span>{item.q}</span>
                  <motion.span
                    className="faq-toggle-icon"
                    animate={{ rotate: openIdx === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIdx === idx ? '−' : '+'}
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      className="faq-answer-framer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ padding: '0 28px 24px 28px', color: 'var(--text-muted-light)', lineHeight: '1.6' }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
