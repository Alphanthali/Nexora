import React, { createContext, useContext, useState, useEffect } from 'react';
import { projectsData as defaultProjectsData } from '../data/projectsData';

const defaultFaqsData = [
  {
    id: '1',
    q: 'What services does Nexora provide?',
    a: 'Nexora specializes in branding, web design, UI/UX design, digital marketing, and software development tailored to elevate your business.'
  },
  {
    id: '2',
    q: 'What is your design process?',
    a: 'Our design process follows four core phases: Discovery & Strategy, Planning & Wireframing, High-Fidelity Design & Prototyping, and final Launch & Scale validation.'
  },
  {
    id: '3',
    q: 'Can you work with clients globally?',
    a: 'Yes, we partner with clients around the globe. Our asynchronous communication flows and digital tools keep teams perfectly aligned regardless of time zone.'
  },
  {
    id: '4',
    q: 'How long does a typical project take?',
    a: 'Project timelines vary depending on scope. Standard branding or landing page projects typically take 2-4 weeks, while complex digital platforms range from 6-12 weeks.'
  },
  {
    id: '5',
    q: 'How do I start a project with Nexora?',
    a: 'Simply click any "Get in Touch" or "Get Started" button on our site to fill out our quick intake form, or schedule a direct discovery call with our leads.'
  },
  {
    id: '6',
    q: 'Do you offer ongoing support?',
    a: 'Absolutely. We offer dedicated post-launch retainers covering design updates, feature enhancements, hosting maintenance, and continuous performance optimization.'
  }
];

const defaultServicesData = [
  {
    id: '1',
    num: '01',
    title: 'Branding and Identity Design',
    desc: 'Crafting unique visual identities, logo marks, brand voice guidelines, and comprehensive aesthetic systems that leave a lasting impression.'
  },
  {
    id: '2',
    num: '02',
    title: 'Website Design and Development',
    desc: 'Building high-performance, responsive websites with immersive animations, smooth micro-interactions, and robust engineering.'
  },
  {
    id: '3',
    num: '03',
    title: 'UI/UX Design and Prototyping',
    desc: 'Designing human-centered mobile and web application interfaces that combine visual aesthetics with effortless user flows.'
  },
  {
    id: '4',
    num: '04',
    title: 'Creative Consulting and Development',
    desc: 'Guiding tech leaders and brands through digital transformation, product strategy, content direction, and design audits.'
  }
];

const defaultSiteInfoData = {
  agencyName: 'Nexora',
  tagline: 'Reimagining digital experiences for visionary brands worldwide.',
  email: 'hello@nexora.com',
  phone: '+265 (0) 995 480 616',
  location: 'Blantyre, Malawi',
  heroTitle: 'Designing Next-Gen Digital Products & Brands',
  heroSubtitle: 'We help ambitious technology companies and creators build world-class digital experiences through strategy, design, and interactive engineering.',
};

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('nexora_projects');
      return saved ? JSON.parse(saved) : defaultProjectsData;
    } catch (e) {
      return defaultProjectsData;
    }
  });

  const [faqs, setFaqs] = useState(() => {
    try {
      const saved = localStorage.getItem('nexora_faqs');
      return saved ? JSON.parse(saved) : defaultFaqsData;
    } catch (e) {
      return defaultFaqsData;
    }
  });

  const [services, setServices] = useState(() => {
    try {
      const saved = localStorage.getItem('nexora_services');
      return saved ? JSON.parse(saved) : defaultServicesData;
    } catch (e) {
      return defaultServicesData;
    }
  });

  const [siteInfo, setSiteInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('nexora_site_info');
      return saved ? JSON.parse(saved) : defaultSiteInfoData;
    } catch (e) {
      return defaultSiteInfoData;
    }
  });

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('nexora_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('nexora_faqs', JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem('nexora_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('nexora_site_info', JSON.stringify(siteInfo));
  }, [siteInfo]);

  // Projects Handlers
  const addProject = (newProject) => {
    const slug = newProject.id || newProject.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const projectWithId = { ...newProject, id: slug };
    setProjects((prev) => [projectWithId, ...prev]);
  };

  const updateProject = (id, updatedFields) => {
    setProjects((prev) =>
      prev.map((proj) => (proj.id === id ? { ...proj, ...updatedFields } : proj))
    );
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((proj) => proj.id !== id));
  };

  const getProjectById = (id) => {
    if (!id) return projects[0];
    const normalizedId = id.toString().toLowerCase();
    const found = projects.find(
      (p) => p.id === normalizedId || p.id === normalizedId.replace(/[^a-z0-9]/g, '')
    );
    if (found) return found;
    return projects[0] || null;
  };

  // FAQs Handlers
  const addFaq = (faq) => {
    const id = Date.now().toString();
    setFaqs((prev) => [...prev, { ...faq, id }]);
  };

  const updateFaq = (id, updatedFaq) => {
    setFaqs((prev) => prev.map((f) => (f.id === id ? { ...f, ...updatedFaq } : f)));
  };

  const deleteFaq = (id) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

  // Services Handlers
  const addService = (service) => {
    const id = Date.now().toString();
    const num = String(services.length + 1).padStart(2, '0');
    setServices((prev) => [...prev, { ...service, id, num }]);
  };

  const updateService = (id, updatedService) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, ...updatedService } : s)));
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  // Site Info Handler
  const updateSiteInfo = (updatedInfo) => {
    setSiteInfo((prev) => ({ ...prev, ...updatedInfo }));
  };

  // Reset all content back to initial hardcoded defaults
  const resetToDefaults = () => {
    setProjects(defaultProjectsData);
    setFaqs(defaultFaqsData);
    setServices(defaultServicesData);
    setSiteInfo(defaultSiteInfoData);
    localStorage.removeItem('nexora_projects');
    localStorage.removeItem('nexora_faqs');
    localStorage.removeItem('nexora_services');
    localStorage.removeItem('nexora_site_info');
  };

  return (
    <ContentContext.Provider
      value={{
        projects,
        faqs,
        services,
        siteInfo,
        addProject,
        updateProject,
        deleteProject,
        getProjectById,
        addFaq,
        updateFaq,
        deleteFaq,
        addService,
        updateService,
        deleteService,
        updateSiteInfo,
        resetToDefaults,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
