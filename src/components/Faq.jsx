import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    q: 'What services does Nexora provide?',
    a: 'Nexora specializes in branding, web design, UI/UX design, digital marketing, and software development tailored to elevate your business.'
  },
  {
    q: 'What is your design process?',
    a: 'Our design process follows four core phases: Discovery & Strategy, Planning & Wireframing, High-Fidelity Design & Prototyping, and final Launch & Scale validation.'
  },
  {
    q: 'Can you work with clients globally?',
    a: 'Yes, we partner with clients around the globe. Our asynchronous communication flows and digital tools keep teams perfectly aligned regardless of time zone.'
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary depending on scope. Standard branding or landing page projects typically take 2-4 weeks, while complex digital platforms range from 6-12 weeks.'
  },
  {
    q: 'How do I start a project with Nexora?',
    a: 'Simply click any "Get in Touch" or "Get Started" button on our site to fill out our quick intake form, or schedule a direct discovery call with our leads.'
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Absolutely. We offer dedicated post-launch retainers covering design updates, feature enhancements, hosting maintenance, and continuous performance optimization.'
  }
];

export default function Faq() {
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

          <div className="faq-decorative-stroke">
            <svg width="220" height="40" viewBox="0 0 220 40" fill="none">
              <path d="M5 25 C 40 10, 80 35, 120 15 C 160 30, 190 10, 215 20" stroke="#121214" strokeWidth="4" strokeLinecap="round"/>
              <path d="M15 30 C 50 18, 90 38, 130 22 C 170 34, 195 18, 210 25" stroke="#121214" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="faq-accordion-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="faq-accordion">
            {faqData.map((item, idx) => (
              <motion.div
                key={idx}
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
                      <p style={{ padding: '0 28px 24px 28px', color: 'var(--text-muted-light)', lineHeight: '1.6' }}>{item.a}</p>
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
