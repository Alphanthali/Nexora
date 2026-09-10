import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesData = [
    {
      id: 'branding-and-identity',
      title: 'Branding and Identity Design',
      desc: 'Our creative agency is a team of professionals focused on helping your brand grow through strategic identity and visual communication.',
      tags: ['UX AUDITS', 'DESIGN THINKING', 'METHODOLOGIES', 'WIREFRAMING'],
    },
    {
      id: 'website-design-and-development',
      title: 'Website Design and Development',
      desc: 'We build high-performance, responsive websites engineered to elevate your brand presence and drive user conversion.',
      tags: ['UX AUDITS', 'DESIGN THINKING', 'METHODOLOGIES', 'WIREFRAMING'],
    },
    {
      id: 'advertising-and-marketing',
      title: 'Advertising and Marketing Campaigns',
      desc: 'Targeted multi-channel campaigns crafted to amplify reach, spark engagement, and turn audiences into loyal customers.',
      tags: ['UX AUDITS', 'DESIGN THINKING', 'METHODOLOGIES', 'WIREFRAMING'],
    },
    {
      id: 'creative-consulting',
      title: 'Creative Consulting Concept Development',
      desc: 'Strategic direction and concept development tailored to solve complex brand challenges and capture market leadership.',
      tags: ['UX AUDITS', 'DESIGN THINKING', 'METHODOLOGIES', 'WIREFRAMING'],
    },
  ];

  return (
    <div className="services-page-wrapper">
      <Navbar />

      <main className="services-page-main">
        {/* Services Page Hero */}
        <section className="services-hero-section">
          <div className="container relative-container">
            {/* 3D Polyhedron Wireframe Graphic Top Right */}
            <div className="hero-polyhedron-graphic">
              <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,20 160,50 160,130 100,170 40,130 40,50" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" fill="none" />
                <polygon points="100,20 100,170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                <polygon points="40,50 160,130" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
                <polygon points="160,50 40,130" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
                <polygon points="100,20 160,130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                <polygon points="100,20 40,130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
              </svg>
            </div>

            <motion.div
              className="services-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="breadcrumb-nav">
                <span className="breadcrumb-line"></span>
                <Link to="/" className="breadcrumb-link">HOME</Link>
                <span className="breadcrumb-sep">/</span>
                <span className="breadcrumb-current">SERVICES</span>
              </div>

              <h1 className="services-hero-title">
                This is <span className="font-extralight">what</span><br />
                we do <span className="font-extralight">best</span>
              </h1>

              <div className="services-tag-badge">
                <span>OUR SERVICES</span>
                <span className="down-arrow-circle">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Main Grid Section */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-main-layout">
              {/* Left Architectural Graphic */}
              <div className="services-left-graphic">
                <svg width="200" height="600" viewBox="0 0 180 580" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="160" height="560" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
                  <line x1="90" y1="10" x2="90" y2="570" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <circle cx="90" cy="80" r="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
                  <circle cx="90" cy="220" r="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
                  <circle cx="90" cy="360" r="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
                  <circle cx="90" cy="500" r="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
                  <line x1="10" y1="150" x2="170" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <line x1="10" y1="290" x2="170" y2="290" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <line x1="10" y1="430" x2="170" y2="430" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                </svg>
              </div>

              {/* Right Services 2x2 Grid */}
              <div className="services-cards-grid">
                {servicesData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="service-card-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                  >
                    <h3 className="service-card-title">{item.title}</h3>
                    <p className="service-card-desc">{item.desc}</p>

                    <div className="service-tags-list">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="service-tag-item">{tag}</span>
                      ))}
                    </div>

                    <Link to={`/service/${item.id}`} className="service-read-more-btn">
                      <span>READ MORE</span>
                      <span className="btn-icon-circle orange">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer Light CTA Banner */}
        <section className="services-cta-banner">
          <div className="container">
            <div className="services-cta-content">
              <p className="services-cta-subtext">
                Looking to make your mark? We'll help you turn your created idea into a success story.
              </p>

              <h2 className="services-cta-heading">
                Ready to bring your <span className="font-extralight">ideas to</span> life?<br />
                We're <span className="font-extralight">here to help</span>
              </h2>

              <motion.a
                href="#contact"
                className="btn btn-orange services-cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>CONTACT US</span>
                <span className="btn-icon-circle dark">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#F29C38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
