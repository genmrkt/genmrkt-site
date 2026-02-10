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
