/* ============================================
   GENMRKT — Main JavaScript
   Handles scroll reveals, nav scroll effect, and smooth scrolling
============================================ */

// ============================================
// SCROLL REVEAL ANIMATIONS
// Observe elements and add 'visible' class when they enter viewport
// ============================================
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all reveal elements
revealEls.forEach(el => observer.observe(el));

// ============================================
// NAVIGATION SCROLL EFFECT
// Add 'scrolled' class to nav when user scrolls down
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================
// MOBILE HAMBURGER MENU
// Toggle mobile nav on button click, close on link click or outside tap
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  // Toggle menu open/closed when hamburger is clicked
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
  });

  // Close menu when any nav link is clicked (except the Services accordion toggle)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      // Skip: the Services toggle handles its own click in mobile accordion mode
      if (link.classList.contains('nav-dropdown-toggle') && navLinks.classList.contains('mobile-open')) {
        return;
      }
      navToggle.classList.remove('active');
      navLinks.classList.remove('mobile-open');
    });
  });

  // Close menu when clicking anywhere outside the nav
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('mobile-open');
      // Also collapse the services submenu when closing the whole menu
      const dropdown = navLinks.querySelector('.nav-dropdown');
      if (dropdown) dropdown.classList.remove('open');
    }
  });
}

// ============================================
// MOBILE SERVICES ACCORDION
// Expands/collapses the Services submenu inside the mobile hamburger menu
// ============================================
const serviceDropdown = document.querySelector('.nav-dropdown');
const serviceToggle = serviceDropdown ? serviceDropdown.querySelector('.nav-dropdown-toggle') : null;

if (serviceToggle && serviceDropdown) {
  serviceToggle.addEventListener('click', (e) => {
    // Only act as accordion when the mobile hamburger menu is open
    if (navLinks && navLinks.classList.contains('mobile-open')) {
      e.preventDefault();
      serviceDropdown.classList.toggle('open');
    }
  });

  // Close the submenu when a service link is tapped (main menu closes too via the link handler above)
  serviceDropdown.querySelectorAll('.nav-dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      serviceDropdown.classList.remove('open');
    });
  });
}

// ============================================
// SMOOTH SCROLLING
// Enable smooth scroll for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
