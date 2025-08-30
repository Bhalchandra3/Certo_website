import './style.scss'

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add interactive scan button
document.querySelector('.scan-circle').addEventListener('click', function () {
  this.style.animation = 'pulse 0.5s ease-in-out';
  setTimeout(() => {
    this.style.animation = 'pulse 2s infinite';
  }, 500);
});

// Add header scroll effect
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// Add button hover effects
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-3px) scale(1.02)';
  });

  button.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards and sections for scroll animations
document.querySelectorAll('.testimonial-card, .feature-card, .blog-card, .about-text, .about-image').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.8s ease-out';
  observer.observe(el);
});

// Newsletter form submission
document.querySelector('.newsletter button').addEventListener('click', function (e) {
  e.preventDefault();
  const email = document.querySelector('.newsletter input').value;
  if (email) {
    alert('Thank you for subscribing to our newsletter!');
    document.querySelector('.newsletter input').value = '';
  }
});