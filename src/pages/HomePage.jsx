import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CreativeWorld from '../components/CreativeWorld';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Faq from '../components/Faq';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';

export default function HomePage() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="nexora-app">
      <Navbar />
      <main>
        <Hero />
        <CreativeWorld />
        <Services />
        <Projects />
        <Process />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
