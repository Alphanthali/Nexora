import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const [openAccordion, setOpenAccordion] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const capabilities = [
    { id: 0, title: 'Research', content: 'Comprehensive market analysis, competitor audit, and user audience research to lay a solid foundation.' },
    { id: 1, title: 'Strategic Positioning', content: 'Crafting brand value propositions, core message architecture, and distinctive market positioning that differentiates your business.' },
    { id: 2, title: 'Art Direction', content: 'Defining moodboards, photography styles, color palettes, and overall visual narrative for brand consistency.' },
    { id: 3, title: 'Visual Identity', content: 'Designing logo systems, typography hierarchies, icon sets, and digital brand assets.' },
    { id: 4, title: 'Brand Guidelines', content: 'Documenting complete design standards, usage rules, and brand manuals for scalable application.' },
  ];

  const pricingTiers = [
    {
      price: '$19',
      title: 'Tailored Designs For Every Budget',
      desc: 'Customized design solutions to elevate your brand presence efficiently.',
    },
    {
      price: '$29',
      title: 'Goal-Oriented Customized Design Solutions',
      desc: 'Strategic designs focused on conversion, user engagement, and measurable growth.',
    },
    {
      price: '$49',
      title: 'Unlocking the Beauty of Space with Unique Designs',
      desc: 'High-end visual identities and comprehensive digital design systems for scaling brands.',
    },
    {
      price: '$199',
      title: 'Exquisite Design Services for Discerning Clients',
      desc: 'Full end-to-end creative direction, dedicated team access, and ongoing strategic support.',
    },
  ];

  const otherServices = [
    {
      id: 'creative-consulting',
      title: 'Creative Consulting',
      desc: 'Strategic direction and concept development tailored to solve complex brand challenges.',
      tags: ['UX AUDITS', 'DESIGN THINKING', 'METHODOLOGIES', 'WIREFRAMING'],
    },
    {
      id: 'advertising-and-marketing',
      title: 'Advertising and Marketing',
      desc: 'Targeted multi-channel campaigns crafted to amplify reach and spark customer engagement.',
      tags: ['UX AUDITS', 'DESIGN THINKING', 'METHODOLOGIES', 'WIREFRAMING'],
    },
    {
      id: 'website-design-and-development',
      title: 'Website Design and Development',
      desc: 'High-performance responsive websites engineered to elevate your brand digital presence.',
      tags: ['UX AUDITS', 'DESIGN THINKING', 'METHODOLOGIES', 'WIREFRAMING'],
    },
  ];

  return (
    <div className="service-detail-wrapper">
      <Navbar />

      <main className="service-detail-main">
        {/* Detail Hero Section */}
        <section className="service-detail-hero">
          <div className="container">
            <motion.div
              className="service-detail-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="breadcrumb-nav">
                <span className="breadcrumb-line"></span>
                <Link to="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-sep">/</span>
                <Link to="/services" className="breadcrumb-link">Services</Link>
                <span className="breadcrumb-sep">/</span>
                <span className="breadcrumb-current">Branding and Identity Design</span>
              </div>

              <h1 className="service-detail-title">
                Branding<br />
                <span className="font-extralight">and</span> Identity Design
              </h1>

              <div className="services-tag-badge">
                <span>Our Service</span>
                <span className="down-arrow-circle">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Approach & Capabilities Accordion (Light Background) */}
        <section className="service-approach-section">
          <div className="container">
            <div className="approach-grid-layout">
              {/* Left Column Text & View Projects CTA */}
              <div className="approach-text-col">
                <h2 className="approach-heading">
                  Your <span className="font-extralight">Approach</span><br />
                  <span className="font-extralight">and</span> What We Do
                </h2>
                <p className="approach-description">
                  Our creative agency is a team of professionals focused on helping your brand grow. We deliver customized solutions that meet your goals, driving long-term success and strong market positioning.
                </p>

                <div className="services-tag-badge dark-badge">
                  <span>View Projects</span>
                  <span className="down-arrow-circle dark">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Right Column Accordion */}
              <div className="approach-accordion-col">
                {capabilities.map((cap) => {
                  const isOpen = openAccordion === cap.id;
                  return (
                    <div
                      key={cap.id}
                      className={`approach-accordion-item ${isOpen ? 'active' : ''}`}
                      onClick={() => setOpenAccordion(isOpen ? null : cap.id)}
                    >
                      <div className="approach-accordion-header">
                        <span className="approach-cap-title">{cap.title}</span>
                        <span className="accordion-toggle-icon">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            className="approach-accordion-body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p>{cap.content}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Pricing Packages (Dark Background) */}
        <section className="service-pricing-section">
          <div className="container">
            <div className="pricing-header-center">
              <h2 className="pricing-heading">
                Reasonable <span className="font-extralight">prices</span><br />
                for innovative <span className="font-extralight">solutions</span>
              </h2>
              <p className="pricing-subtext">
                Fair prices tailored to your budget — quality, performance, and results guaranteed.<br />
                Transparent pricing with no hidden fees.
              </p>
            </div>

            <div className="pricing-tiers-list">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="pricing-tier-row">
                  <div className="pricing-tier-left">
                    <span className="pricing-amount">{tier.price}</span>
                  </div>
                  <div className="pricing-tier-mid">
                    <h3 className="pricing-tier-title">{tier.title}</h3>
                    <p className="pricing-tier-desc">{tier.desc}</p>
                  </div>
                  <div className="pricing-tier-right">
                    <motion.button
                      className="card-action-btn"
                      aria-label="Select Package"
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pricing-cta-wrapper">
              <motion.a
                href="#contact"
                className="btn btn-orange pricing-cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>GET A CUSTOM QUOTE</span>
                <span className="btn-icon-circle dark">
                  <img src="/assets/logo.png" alt="Nexora Logo" className="btn-logo-icon" />
                </span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Section 3: Other Services (Light Background) */}
        <section className="other-services-section">
          <div className="container">
            <div className="other-services-header">
              <h2 className="other-services-heading">Other services</h2>
            </div>

            <div className="other-services-grid">
              {otherServices.map((item) => (
                <div key={item.id} className="other-service-card">
                  <h3 className="other-service-title">{item.title}</h3>
                  <p className="other-service-desc">{item.desc}</p>

                  <div className="service-tags-list">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="service-tag-item">{tag}</span>
                    ))}
                  </div>

                  <Link to={`/service/${item.id}`} className="service-read-more-btn">
                    <span>Read More</span>
                    <span className="btn-icon-circle orange">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                </div>
              ))}
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
                  <img src="/assets/logo.png" alt="Nexora Logo" className="btn-logo-icon" />
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
