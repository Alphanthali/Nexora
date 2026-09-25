import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CtaBanner from '../components/CtaBanner';
import { useContent } from '../context/ContentContext';

export default function WorksPage() {
  const { projects } = useContent();
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleToggleMore = () => {
    if (visibleCount < projects.length) {
      setVisibleCount(projects.length);
    } else {
      setVisibleCount(6);
      const worksSection = document.getElementById('works-gallery');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isExpanded = visibleCount >= projects.length;

  return (
    <div className="works-page-wrapper">
      <Navbar />

      <main className="works-page-main">
        {/* Top Header & Works Showcase Section */}
        <section className="works-showcase-section" id="works-gallery">
          <div className="container">
            {/* Works Section Header Row */}
            <motion.div
              className="works-header-flex"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="works-header-left">
                <h1 className="works-main-title">Works</h1>
              </div>
              <div className="works-header-right">
                <h2 className="works-subtitle">
                  <span className="works-subtitle-bold">Selected</span>
                  <span className="works-subtitle-light">Projects.</span>
                </h2>
              </div>
            </motion.div>

            {/* Works Gallery Grid */}
            <div className="works-grid-layout">
              <AnimatePresence>
                {projects.slice(0, visibleCount).map((item, index) => (
                  <motion.div
                    key={item.id}
                    className={`works-card-item ${index % 3 === 2 ? 'card-full-width' : 'card-half-width'}`}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6 }}
                  >
                    <Link to={`/project/${item.id}`} className="works-card-inner-link">
                      <div className="works-card-inner">
                        <img src={item.cardImage || item.heroImage} alt={item.title} className="works-card-img" />
                        <div className="works-card-overlay"></div>

                        <div className="works-card-bottom-bar">
                          <span className="works-brand-label">{item.title}</span>
                          <div className="works-tags-group">
                            {(item.tags || ['Branding']).map((tag, tIdx) => (
                              <span key={tIdx} className="works-glass-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* View More / View Less Action Button */}
            {projects.length > 6 && (
              <div className="works-action-center">
                <motion.button
                  className="btn-view-more-pill"
                  onClick={handleToggleMore}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  aria-label="View More Works"
                >
                  <span>{isExpanded ? 'Show Less' : 'View More'}</span>
                  <span className="pill-orange-circle">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path
                        d={isExpanded ? 'M7 12V2M7 2L2.5 6.5M7 2L11.5 6.5' : 'M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5'}
                        stroke="#FFFFFF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </motion.button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Banner Component */}
        <CtaBanner />
      </main>

      {/* Same Site Footer Component */}
      <Footer />
    </div>
  );
}
