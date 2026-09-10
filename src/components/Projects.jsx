import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="section-dark projects-section" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-heading light-text">
            Our <span className="font-extralight">Projects</span>
          </h2>
          <p className="projects-subtext">
            Explore our latest work, where creative ideas become bold brands and impactful digital experiences.
          </p>
        </motion.div>

        <div className="projects-masonry-grid">
          {/* Card 1: DigiNest Agency Apparel (Tall Left) */}
          <motion.div
            className="project-card card-tall"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/assets/project_apparel_new.jpg" alt="DigiNest Agency Banding and Design" className="card-img" />
            <div className="card-gradient-overlay"></div>
            <div className="card-content">
              <h3 className="card-title">DigiNest Agency</h3>
              <p className="card-title-line2">Banding and Design</p>
            </div>
            <motion.button
              className="card-action-btn"
              aria-label="View Project"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>

          {/* Card 2: DigiNest Agency Car (Wide Top Right) */}
          <motion.div
            className="project-card card-wide"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/assets/project_car_new.jpg" alt="DigiNest Agency Banding and Design" className="card-img" />
            <div className="card-gradient-overlay"></div>
            <div className="card-content">
              <h3 className="card-title">DigiNest Agency</h3>
              <p className="card-title-line2">Banding and Design</p>
            </div>
            <motion.button
              className="card-action-btn"
              aria-label="View Project"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>

          {/* Subgrid: Bottom Right Cards */}
          <div className="projects-subgrid">
            {/* Card 3: Unifie (Solid Blue) */}
            <motion.div
              className="project-card card-blue-solid"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-content">
                <h3 className="card-title">Unifie</h3>
                <p className="card-title-line2">UI/UX Design</p>
                <p className="card-title-line3">and Web Dev.</p>
              </div>
              <motion.button
                className="card-action-btn"
                aria-label="View Project"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>

            {/* Card 4: Krivi Identity Design (Phone on Rocks) */}
            <motion.div
              className="project-card"
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/assets/project_phone_dark.png" alt="Krivi Identity Design" className="card-img" />
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <h3 className="card-title">Krivi</h3>
                <p className="card-title-line2">Identity Design</p>
              </div>
              <motion.button
                className="card-action-btn"
                aria-label="View Project"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* View All Projects Button (Bottom Right) */}
        <div className="projects-bottom-action">
          <motion.a
            href="#projects"
            className="btn btn-orange btn-view-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="btn-icon-circle dark">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#F29C38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
