import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

export default function Projects() {
  const { projects } = useContent();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const featuredProjects = projects.slice(0, 4);

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
          {/* Card 1: Main Project (Tall Left) */}
          {featuredProjects[0] && (
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
              <Link to={`/project/${featuredProjects[0].id}`} className="project-card-link" aria-label={`View ${featuredProjects[0].title}`}>
                <img
                  src={featuredProjects[0].cardImage || featuredProjects[0].heroImage}
                  alt={featuredProjects[0].title}
                  className="card-img"
                />
                <div className="card-gradient-overlay"></div>
                <div className="card-content">
                  <h3 className="card-title">{featuredProjects[0].title}</h3>
                  <p className="card-title-line2">{featuredProjects[0].subtitle || featuredProjects[0].category}</p>
                </div>
                <div className="card-action-btn">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Card 2: Wide Project (Wide Top Right) */}
          {featuredProjects[1] && (
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
              <Link to={`/project/${featuredProjects[1].id}`} className="project-card-link" aria-label={`View ${featuredProjects[1].title}`}>
                <img
                  src={featuredProjects[1].heroImage || featuredProjects[1].cardImage}
                  alt={featuredProjects[1].title}
                  className="card-img"
                />
                <div className="card-gradient-overlay"></div>
                <div className="card-content">
                  <h3 className="card-title">{featuredProjects[1].title}</h3>
                  <p className="card-title-line2">{featuredProjects[1].subtitle || featuredProjects[1].category}</p>
                </div>
                <div className="card-action-btn">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Subgrid: Bottom Right Cards */}
          <div className="projects-subgrid">
            {/* Card 3 */}
            {featuredProjects[2] && (
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
                <Link to={`/project/${featuredProjects[2].id}`} className="project-card-link" aria-label={`View ${featuredProjects[2].title}`}>
                  <div className="card-content">
                    <h3 className="card-title">{featuredProjects[2].title}</h3>
                    <p className="card-title-line2">{featuredProjects[2].subtitle || featuredProjects[2].category}</p>
                  </div>
                  <div className="card-action-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Card 4 */}
            {featuredProjects[3] && (
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
                <Link to={`/project/${featuredProjects[3].id}`} className="project-card-link" aria-label={`View ${featuredProjects[3].title}`}>
                  <img
                    src={featuredProjects[3].cardImage || featuredProjects[3].heroImage}
                    alt={featuredProjects[3].title}
                    className="card-img"
                  />
                  <div className="card-gradient-overlay"></div>
                  <div className="card-content">
                    <h3 className="card-title">{featuredProjects[3].title}</h3>
                    <p className="card-title-line2">{featuredProjects[3].subtitle || featuredProjects[3].category}</p>
                  </div>
                  <div className="card-action-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="projects-bottom-action">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/works" className="btn btn-orange btn-view-all">
              <span>View All Projects</span>
              <span className="btn-icon-circle dark">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#F29C38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
