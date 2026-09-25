import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CtaBanner from '../components/CtaBanner';
import { useContent } from '../context/ContentContext';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { getProjectById } = useContent();
  const project = getProjectById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-detail-wrapper section-light">
        <Navbar />
        <div className="container" style={{ padding: '160px 24px', textAlign: 'center' }}>
          <h2>Project Not Found</h2>
          <Link to="/works" className="btn btn-orange" style={{ marginTop: '20px' }}>
            <span>Back to Works</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const galleryLeftTop = project.gallery?.[0]?.image || project.heroImage || '/assets/project_car_new.jpg';
  const galleryRightTop = project.gallery?.[1]?.image || project.cardImage || '/assets/project_apparel_new.jpg';
  const galleryLeftBottom = project.gallery?.[2]?.image || project.cardImage || '/assets/project_apparel.png';
  const galleryRightBottom = project.gallery?.[3]?.image || '/assets/hero_3d_sphere.png';

  return (
    <div className="project-detail-page-wrapper">
      <Navbar />

      <main className="project-detail-main">
        {/* Top Header Section */}
        <section className="project-header-section">
          <div className="container">
            <motion.div
              className="project-header-flex"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Project Title (Left) */}
              <div className="project-header-left">
                <h1 className="project-detail-title">{project.title}</h1>
              </div>

              {/* Project Metadata (Right) */}
              <div className="project-header-right">
                <div className="project-meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">Client Name</span>
                    <span className="meta-value">: {project.clientName || 'Alpha Leave'}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">: {project.duration || '2 Months'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid Section (Matching reference screenshot) */}
        <section className="project-gallery-section">
          <div className="container">
            <div className="project-gallery-grid">
              {/* Column 1 (Left) */}
              <div className="gallery-col gallery-col-left">
                {/* Top Item: Horizontal Car / Featured Image */}
                <motion.div
                  className="gallery-card card-horizontal"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <img
                    src={galleryLeftTop}
                    alt={project.gallery?.[0]?.alt || project.title}
                    className="gallery-img"
                  />
                </motion.div>

                {/* Bottom Item: Vertical Apparel / Secondary Image */}
                <motion.div
                  className="gallery-card card-vertical-tall"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <img
                    src={galleryLeftBottom}
                    alt={project.gallery?.[2]?.alt || project.title}
                    className="gallery-img"
                  />
                </motion.div>
              </div>

              {/* Column 2 (Right) */}
              <div className="gallery-col gallery-col-right">
                {/* Top Item: Vertical Apparel / Secondary Image */}
                <motion.div
                  className="gallery-card card-vertical-tall"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <img
                    src={galleryRightTop}
                    alt={project.gallery?.[1]?.alt || project.title}
                    className="gallery-img"
                  />
                </motion.div>

                {/* Bottom Item: 3D Artwork / Glowing Sphere */}
                <motion.div
                  className="gallery-card card-square-artwork"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <img
                    src={galleryRightBottom}
                    alt={project.gallery?.[3]?.alt || project.title}
                    className="gallery-img"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="project-overview-section">
          <div className="container">
            <motion.div
              className="overview-content-block"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="overview-heading">Overview</h2>
              <p className="overview-text">
                {project.overview ||
                  'DigiNest is a futuristic digital agency focused on merging cutting-edge 3D graphics with bold brand identities. Nexora was commissioned to redefine DigiNest\'s visual presence, developing a cohesive aesthetic that spans physical apparel, custom automotive livery wraps, and dynamic 3D generative art assets.'}
              </p>
            </motion.div>

            {/* Featured Hero Banner Image Below Overview */}
            <motion.div
              className="project-feature-banner-frame"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={project.featuredBannerImage || project.heroImage || '/assets/project_car_new.jpg'}
                alt={`${project.title} Featured Showcase`}
                className="feature-banner-img"
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Banner Component */}
        <CtaBanner />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
