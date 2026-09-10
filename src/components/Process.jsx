import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We begin by understanding your brand, goals, and target audience to craft a tailored roadmap.'
  },
  {
    num: '02',
    title: 'Plan & Wireframe',
    desc: 'We map out structure, user journeys, and initial wireframe designs for intuitive interaction.'
  },
  {
    num: '03',
    title: 'Design & Prototype',
    desc: 'We craft visually stunning and intuitive interfaces enriched with custom animations.'
  },
  {
    num: '04',
    title: 'Launch & Scale',
    desc: 'We deliver, optimize performance, and continuously support your growth journey.'
  }
];

export default function Process() {
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="section-light process-section" id="process">
      <div className="container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-heading dark-text left-title">Our Process</h2>
          <h2 className="section-heading dark-text right-title">
            What <span className="font-serif-italic">working with us</span> looks like.
          </h2>
        </motion.div>

        <div className="process-flow-container">
          <svg className="process-line-graphic" viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
            <path d="M0 60 Q 300 110, 600 50 T 1200 60" stroke="#E0E0E6" strokeWidth="2" strokeDasharray="6 6"/>
          </svg>

          <div className="process-cards-grid">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="process-card"
                custom={idx}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <div className="process-step-badge">
                  <span className="badge-dot"></span>
                  <span>{step.num}</span>
                </div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
