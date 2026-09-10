// Nexora Landing Page Interactivity
document.addEventListener('DOMContentLoaded', () => {

  // 1. STICKY NAVBAR SCROLL EFFECT
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. MOBILE NAVIGATION DRAWER
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. FAQ ACCORDION INTERACTIVITY
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherIcon = otherItem.querySelector('.faq-toggle-icon');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherIcon) otherIcon.textContent = '+';
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        const icon = item.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // 4. SERVICES LIST ACCORDION INTERACTIVITY
  const serviceItems = document.querySelectorAll('.service-item');

  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      serviceItems.forEach(sItem => {
        sItem.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 5. ACTIVE NAV LINK HIGHLIGHT ON SCROLL
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

});
