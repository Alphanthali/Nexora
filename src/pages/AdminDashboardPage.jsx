import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

export default function AdminDashboardPage() {
  const {
    projects,
    faqs,
    services,
    siteInfo,
    addProject,
    updateProject,
    deleteProject,
    addFaq,
    updateFaq,
    deleteFaq,
    addService,
    updateService,
    deleteService,
    updateSiteInfo,
    resetToDefaults,
  } = useContent();

  const [activeTab, setActiveTab] = useState('projects'); // 'overview', 'projects', 'faqs', 'services', 'settings'
  const [searchTerm, setSearchTerm] = useState('');

  // Modals state
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null); // null for create, project object for edit

  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  // Form states for Project
  const [projForm, setProjForm] = useState({
    title: '',
    subtitle: '',
    category: '',
    clientName: '',
    duration: '',
    year: '2026',
    heroImage: '',
    cardImage: '',
    overview: '',
    tagsStr: '',
    gallery1: '',
    gallery2: '',
    gallery3: '',
    gallery4: '',
  });

  // Form state for FAQ
  const [faqForm, setFaqForm] = useState({ q: '', a: '' });

  // Form state for Service
  const [serviceForm, setServiceForm] = useState({ title: '', desc: '' });

  // Form state for Site Settings
  const [settingsForm, setSettingsForm] = useState({ ...siteInfo });

  // Notification message
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  // Utility to handle local file upload to Base64
  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Open Project Modal
  const openNewProjectModal = () => {
    setEditingProject(null);
    setProjForm({
      title: '',
      subtitle: 'Branding and Design',
      category: 'Branding & 3D Graphic',
      clientName: 'Alpha Leave',
      duration: '2 Months',
      year: '2026',
      heroImage: '/assets/project_car_new.jpg',
      cardImage: '/assets/project_apparel_new.jpg',
      overview: '',
      tagsStr: 'Branding, 3D Graphic',
      gallery1: '/assets/project_car_new.jpg',
      gallery2: '/assets/project_apparel_new.jpg',
      gallery3: '/assets/project_apparel.png',
      gallery4: '/assets/hero_3d_sphere.png',
    });
    setProjectModalOpen(true);
  };

  const openEditProjectModal = (proj) => {
    setEditingProject(proj);
    setProjForm({
      title: proj.title || '',
      subtitle: proj.subtitle || '',
      category: proj.category || '',
      clientName: proj.clientName || '',
      duration: proj.duration || '',
      year: proj.year || '2026',
      heroImage: proj.heroImage || '',
      cardImage: proj.cardImage || '',
      overview: proj.overview || '',
      tagsStr: proj.tags ? proj.tags.join(', ') : '',
      gallery1: proj.gallery?.[0]?.image || proj.heroImage || '',
      gallery2: proj.gallery?.[1]?.image || proj.cardImage || '',
      gallery3: proj.gallery?.[2]?.image || '',
      gallery4: proj.gallery?.[3]?.image || '',
    });
    setProjectModalOpen(true);
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projForm.title.trim()) {
      alert('Please enter a project title');
      return;
    }

    const tags = projForm.tagsStr
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const projectData = {
      title: projForm.title,
      subtitle: projForm.subtitle || 'Branding and Design',
      category: projForm.category || 'Branding & 3D Graphic',
      clientName: projForm.clientName || 'Client Name',
      duration: projForm.duration || '1 Month',
      year: projForm.year || '2026',
      heroImage: projForm.heroImage || '/assets/project_car_new.jpg',
      cardImage: projForm.cardImage || '/assets/project_apparel_new.jpg',
      overview: projForm.overview,
      tags: tags.length ? tags : ['Branding', 'Design'],
      featuredBannerImage: projForm.heroImage || '/assets/project_car_new.jpg',
      gallery: [
        { id: 1, image: projForm.gallery1 || projForm.heroImage, alt: 'Gallery Image 1' },
        { id: 2, image: projForm.gallery2 || projForm.cardImage, alt: 'Gallery Image 2' },
        { id: 3, image: projForm.gallery3 || projForm.cardImage, alt: 'Gallery Image 3' },
        { id: 4, image: projForm.gallery4 || '/assets/hero_3d_sphere.png', alt: 'Gallery Image 4' },
      ],
    };

    if (editingProject) {
      updateProject(editingProject.id, projectData);
      showToast(`Project "${projForm.title}" updated successfully!`);
    } else {
      const slug = projForm.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
      addProject({ ...projectData, id: slug });
      showToast(`New Project "${projForm.title}" created successfully!`);
    }

    setProjectModalOpen(false);
  };

  const handleDeleteProject = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteProject(id);
      showToast(`Project "${title}" deleted.`);
    }
  };

  // FAQ Handlers
  const openNewFaqModal = () => {
    setEditingFaq(null);
    setFaqForm({ q: '', a: '' });
    setFaqModalOpen(true);
  };

  const openEditFaqModal = (faq) => {
    setEditingFaq(faq);
    setFaqForm({ q: faq.q, a: faq.a });
    setFaqModalOpen(true);
  };

  const handleSaveFaq = (e) => {
    e.preventDefault();
    if (!faqForm.q.trim()) return;

    if (editingFaq) {
      updateFaq(editingFaq.id, faqForm);
      showToast('FAQ updated successfully!');
    } else {
      addFaq(faqForm);
      showToast('New FAQ added successfully!');
    }
    setFaqModalOpen(false);
  };

  const handleDeleteFaq = (id) => {
    if (window.confirm('Delete this FAQ?')) {
      deleteFaq(id);
      showToast('FAQ removed.');
    }
  };

  // Services Handlers
  const openNewServiceModal = () => {
    setEditingService(null);
    setServiceForm({ title: '', desc: '' });
    setServiceModalOpen(true);
  };

  const openEditServiceModal = (srv) => {
    setEditingService(srv);
    setServiceForm({ title: srv.title, desc: srv.desc });
    setServiceModalOpen(true);
  };

  const handleSaveService = (e) => {
    e.preventDefault();
    if (!serviceForm.title.trim()) return;

    if (editingService) {
      updateService(editingService.id, serviceForm);
      showToast('Service updated successfully!');
    } else {
      addService(serviceForm);
      showToast('New Service added!');
    }
    setServiceModalOpen(false);
  };

  const handleDeleteService = (id, title) => {
    if (window.confirm(`Delete service "${title}"?`)) {
      deleteService(id);
      showToast('Service removed.');
    }
  };

  // Settings Handler
  const handleSaveSettings = (e) => {
    e.preventDefault();
    updateSiteInfo(settingsForm);
    showToast('Site settings updated live!');
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-dashboard-layout">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            className="admin-toast-badge"
            initial={{ opacity: 0, y: -40, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
          >
            ✓ {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <Link to="/" className="admin-brand-link">
            <img src="/assets/logo.png" alt="Nexora Logo" className="admin-brand-logo" />
            <span className="admin-brand-name">Nexora Admin</span>
          </Link>
          <span className="admin-status-pill">Live Mode</span>
        </div>

        <nav className="admin-sidebar-nav">
          <button
            className={`sidebar-nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </button>

          <button
            className={`sidebar-nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <span className="nav-icon">🚀</span>
            <span>Projects ({projects.length})</span>
          </button>

          <button
            className={`sidebar-nav-btn ${activeTab === 'faqs' ? 'active' : ''}`}
            onClick={() => setActiveTab('faqs')}
          >
            <span className="nav-icon">❓</span>
            <span>FAQs ({faqs.length})</span>
          </button>

          <button
            className={`sidebar-nav-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <span className="nav-icon">⚡</span>
            <span>Services ({services.length})</span>
          </button>

          <button
            className={`sidebar-nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span className="nav-icon">⚙️</span>
            <span>Site Settings</span>
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="btn-preview-site" target="_blank">
            <span>👁️ View Live Website</span>
          </Link>
          <button
            className="btn-reset-defaults"
            onClick={() => {
              if (window.confirm('Reset all website content back to factory defaults?')) {
                resetToDefaults();
                showToast('Reset all content to factory defaults.');
              }
            }}
          >
            ↺ Restore Defaults
          </button>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="admin-main-viewport">
        {/* Header bar */}
        <header className="admin-top-bar">
          <div className="top-bar-left">
            <h1 className="admin-page-title">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'projects' && 'Projects Manager'}
              {activeTab === 'faqs' && 'FAQ Manager'}
              {activeTab === 'services' && 'Services Manager'}
              {activeTab === 'settings' && 'General Site Settings'}
            </h1>
            <p className="admin-page-sub">
              Manage website content without touching any code. Changes reflect instantly.
            </p>
          </div>

          <div className="top-bar-right">
            {activeTab === 'projects' && (
              <button className="admin-btn-primary" onClick={openNewProjectModal}>
                + Add New Project
              </button>
            )}
            {activeTab === 'faqs' && (
              <button className="admin-btn-primary" onClick={openNewFaqModal}>
                + Add FAQ
              </button>
            )}
            {activeTab === 'services' && (
              <button className="admin-btn-primary" onClick={openNewServiceModal}>
                + Add Service
              </button>
            )}
          </div>
        </header>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="admin-tab-content">
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">{projects.length}</span>
                <span className="stat-label">Total Projects Showcase</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{faqs.length}</span>
                <span className="stat-label">Active FAQ Items</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{services.length}</span>
                <span className="stat-label">Service Offerings</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dynamic Persistence</span>
              </div>
            </div>

            <div className="admin-card-section" style={{ marginTop: '30px' }}>
              <h3>Quick Actions</h3>
              <div className="quick-actions-row">
                <button
                  className="quick-action-card"
                  onClick={() => {
                    setActiveTab('projects');
                    openNewProjectModal();
                  }}
                >
                  <span className="action-icon">🚀</span>
                  <span className="action-title">Create New Project</span>
                  <span className="action-desc">Upload photos, client name, duration, and overview</span>
                </button>

                <button
                  className="quick-action-card"
                  onClick={() => {
                    setActiveTab('faqs');
                    openNewFaqModal();
                  }}
                >
                  <span className="action-icon">❓</span>
                  <span className="action-title">Add New FAQ</span>
                  <span className="action-desc">Answer common client inquiries</span>
                </button>

                <button className="quick-action-card" onClick={() => setActiveTab('settings')}>
                  <span className="action-icon">⚙️</span>
                  <span className="action-title">Edit Site Info</span>
                  <span className="action-desc">Update headline, email, phone, location</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Projects Manager */}
        {activeTab === 'projects' && (
          <div className="admin-tab-content">
            <div className="admin-table-toolbar">
              <input
                type="text"
                placeholder="Search projects by title, client, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="admin-search-input"
              />
              <span className="table-count">Showing {filteredProjects.length} projects</span>
            </div>

            <div className="projects-admin-grid">
              {filteredProjects.map((proj) => (
                <div key={proj.id} className="project-admin-card">
                  <div className="proj-thumb-frame">
                    <img src={proj.cardImage || proj.heroImage} alt={proj.title} />
                    <span className="proj-category-badge">{proj.category || 'Branding'}</span>
                  </div>

                  <div className="proj-card-body">
                    <h4 className="proj-card-title">{proj.title}</h4>
                    <p className="proj-card-sub">{proj.subtitle}</p>

                    <div className="proj-card-meta">
                      <span>👤 {proj.clientName || 'Alpha Leave'}</span>
                      <span>⏱️ {proj.duration || '2 Months'}</span>
                    </div>

                    <div className="proj-card-actions">
                      <Link to={`/project/${proj.id}`} target="_blank" className="btn-action-view">
                        View Single Page
                      </Link>
                      <button className="btn-action-edit" onClick={() => openEditProjectModal(proj)}>
                        Edit
                      </button>
                      <button
                        className="btn-action-delete"
                        onClick={() => handleDeleteProject(proj.id, proj.title)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: FAQs Manager */}
        {activeTab === 'faqs' && (
          <div className="admin-tab-content">
            <div className="admin-card-section">
              <div className="faq-admin-list">
                {faqs.map((faq) => (
                  <div key={faq.id} className="faq-admin-item">
                    <div className="faq-item-content">
                      <h4 className="faq-q-text">Q: {faq.q}</h4>
                      <p className="faq-a-text">A: {faq.a}</p>
                    </div>
                    <div className="faq-item-actions">
                      <button className="btn-action-edit" onClick={() => openEditFaqModal(faq)}>
                        Edit
                      </button>
                      <button className="btn-action-delete" onClick={() => handleDeleteFaq(faq.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Services Manager */}
        {activeTab === 'services' && (
          <div className="admin-tab-content">
            <div className="admin-card-section">
              <div className="services-admin-list">
                {services.map((srv) => (
                  <div key={srv.id} className="service-admin-item">
                    <div className="service-admin-num">{srv.num}</div>
                    <div className="service-admin-info">
                      <h4>{srv.title}</h4>
                      <p>{srv.desc}</p>
                    </div>
                    <div className="service-admin-actions">
                      <button className="btn-action-edit" onClick={() => openEditServiceModal(srv)}>
                        Edit
                      </button>
                      <button
                        className="btn-action-delete"
                        onClick={() => handleDeleteService(srv.id, srv.title)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Site Settings */}
        {activeTab === 'settings' && (
          <div className="admin-tab-content">
            <form onSubmit={handleSaveSettings} className="admin-form-card">
              <h3>General Site Settings</h3>

              <div className="form-group">
                <label>Agency Name</label>
                <input
                  type="text"
                  value={settingsForm.agencyName}
                  onChange={(e) => setSettingsForm({ ...settingsForm, agencyName: e.target.value })}
                  className="admin-form-input"
                />
              </div>

              <div className="form-group">
                <label>Hero Headline</label>
                <input
                  type="text"
                  value={settingsForm.heroTitle}
                  onChange={(e) => setSettingsForm({ ...settingsForm, heroTitle: e.target.value })}
                  className="admin-form-input"
                />
              </div>

              <div className="form-group">
                <label>Hero Subtitle / Description</label>
                <textarea
                  rows="3"
                  value={settingsForm.heroSubtitle}
                  onChange={(e) => setSettingsForm({ ...settingsForm, heroSubtitle: e.target.value })}
                  className="admin-form-input"
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Contact Email</label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="admin-form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Contact Phone</label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="admin-form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Office Location</label>
                <input
                  type="text"
                  value={settingsForm.location}
                  onChange={(e) => setSettingsForm({ ...settingsForm, location: e.target.value })}
                  className="admin-form-input"
                />
              </div>

              <button type="submit" className="admin-btn-primary" style={{ marginTop: '10px' }}>
                Save Settings
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Modal 1: Add / Edit Project */}
      {projectModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-box modal-wide">
            <div className="modal-header">
              <h3>{editingProject ? `Edit Project: ${editingProject.title}` : 'Add New Project'}</h3>
              <button className="btn-close-modal" onClick={() => setProjectModalOpen(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="modal-body-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label>Project Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. DigiNest"
                    value={projForm.title}
                    onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                    required
                    className="admin-form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Category / Subtitle</label>
                  <input
                    type="text"
                    placeholder="e.g. Branding and Design"
                    value={projForm.subtitle}
                    onChange={(e) => setProjForm({ ...projForm, subtitle: e.target.value })}
                    className="admin-form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Client Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Alpha Leave"
                    value={projForm.clientName}
                    onChange={(e) => setProjForm({ ...projForm, clientName: e.target.value })}
                    className="admin-form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 2 Months"
                    value={projForm.duration}
                    onChange={(e) => setProjForm({ ...projForm, duration: e.target.value })}
                    className="admin-form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Project Overview Description</label>
                <textarea
                  rows="4"
                  placeholder="Enter detailed description of the project background, objectives, and execution..."
                  value={projForm.overview}
                  onChange={(e) => setProjForm({ ...projForm, overview: e.target.value })}
                  className="admin-form-input"
                />
              </div>

              {/* Upload Pictures Section */}
              <div className="image-upload-section">
                <h4>Project Pictures & Gallery (Upload or URL)</h4>

                <div className="upload-row">
                  <div className="upload-field">
                    <label>Main Showcase Picture (Car Livery / Top Left)</label>
                    <input
                      type="text"
                      placeholder="Image URL or upload below"
                      value={projForm.heroImage}
                      onChange={(e) => setProjForm({ ...projForm, heroImage: e.target.value })}
                      className="admin-form-input"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload(e, (dataUrl) =>
                          setProjForm((prev) => ({ ...prev, heroImage: dataUrl, gallery1: dataUrl }))
                        )
                      }
                      className="file-upload-input"
                    />
                    {projForm.heroImage && (
                      <img src={projForm.heroImage} alt="Preview" className="upload-preview" />
                    )}
                  </div>

                  <div className="upload-field">
                    <label>Secondary Picture (Apparel / Top Right)</label>
                    <input
                      type="text"
                      placeholder="Image URL or upload below"
                      value={projForm.cardImage}
                      onChange={(e) => setProjForm({ ...projForm, cardImage: e.target.value })}
                      className="admin-form-input"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload(e, (dataUrl) =>
                          setProjForm((prev) => ({ ...prev, cardImage: dataUrl, gallery2: dataUrl }))
                        )
                      }
                      className="file-upload-input"
                    />
                    {projForm.cardImage && (
                      <img src={projForm.cardImage} alt="Preview" className="upload-preview" />
                    )}
                  </div>
                </div>

                <div className="upload-row">
                  <div className="upload-field">
                    <label>Gallery Picture 3 (Bottom Left Apparel)</label>
                    <input
                      type="text"
                      placeholder="Image URL or upload below"
                      value={projForm.gallery3}
                      onChange={(e) => setProjForm({ ...projForm, gallery3: e.target.value })}
                      className="admin-form-input"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload(e, (dataUrl) =>
                          setProjForm((prev) => ({ ...prev, gallery3: dataUrl }))
                        )
                      }
                      className="file-upload-input"
                    />
                    {projForm.gallery3 && (
                      <img src={projForm.gallery3} alt="Preview" className="upload-preview" />
                    )}
                  </div>

                  <div className="upload-field">
                    <label>Gallery Picture 4 (Bottom Right 3D Artwork)</label>
                    <input
                      type="text"
                      placeholder="Image URL or upload below"
                      value={projForm.gallery4}
                      onChange={(e) => setProjForm({ ...projForm, gallery4: e.target.value })}
                      className="admin-form-input"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload(e, (dataUrl) =>
                          setProjForm((prev) => ({ ...prev, gallery4: dataUrl }))
                        )
                      }
                      className="file-upload-input"
                    />
                    {projForm.gallery4 && (
                      <img src={projForm.gallery4} alt="Preview" className="upload-preview" />
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setProjectModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  {editingProject ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Add / Edit FAQ */}
      {faqModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-box">
            <div className="modal-header">
              <h3>{editingFaq ? 'Edit FAQ' : 'Add New FAQ'}</h3>
              <button className="btn-close-modal" onClick={() => setFaqModalOpen(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveFaq} className="modal-body-form">
              <div className="form-group">
                <label>Question *</label>
                <input
                  type="text"
                  placeholder="e.g. What is your design turnaround time?"
                  value={faqForm.q}
                  onChange={(e) => setFaqForm({ ...faqForm, q: e.target.value })}
                  required
                  className="admin-form-input"
                />
              </div>

              <div className="form-group">
                <label>Answer *</label>
                <textarea
                  rows="4"
                  placeholder="Enter clear answer..."
                  value={faqForm.a}
                  onChange={(e) => setFaqForm({ ...faqForm, a: e.target.value })}
                  required
                  className="admin-form-input"
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setFaqModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  Save FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 3: Add / Edit Service */}
      {serviceModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-box">
            <div className="modal-header">
              <h3>{editingService ? 'Edit Service' : 'Add New Service'}</h3>
              <button className="btn-close-modal" onClick={() => setServiceModalOpen(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveService} className="modal-body-form">
              <div className="form-group">
                <label>Service Title *</label>
                <input
                  type="text"
                  placeholder="e.g. 3D Animation & Motion Graphics"
                  value={serviceForm.title}
                  onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                  required
                  className="admin-form-input"
                />
              </div>

              <div className="form-group">
                <label>Service Description *</label>
                <textarea
                  rows="4"
                  placeholder="Describe the service offerings..."
                  value={serviceForm.desc}
                  onChange={(e) => setServiceForm({ ...serviceForm, desc: e.target.value })}
                  required
                  className="admin-form-input"
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setServiceModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
