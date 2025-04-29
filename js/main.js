// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
  });
  
  // Close menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('show');
      document.body.classList.remove('no-scroll');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && e.target !== mobileMenuBtn) {
      navLinks.classList.remove('show');
      document.body.classList.remove('no-scroll');
    }
  });
  
  // Prevent scrolling when menu is open
  document.body.style.overflow = 'auto';
  const style = document.createElement('style');
  style.innerHTML = `
    .no-scroll {
      overflow: hidden !important;
    }
  `;
  document.head.appendChild(style);
});
