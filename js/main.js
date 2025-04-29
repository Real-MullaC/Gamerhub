// Mobile menu functionality - only activates on mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  // Only add event listeners if on mobile
  function setupMobileMenu() {
    if (window.innerWidth <= 768) {
      mobileMenuBtn.style.display = 'flex';
      
      mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        document.body.classList.toggle('no-scroll');
      });
      
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
          navLinks.classList.remove('show');
          document.body.classList.remove('no-scroll');
        });
      });
    } else {
      mobileMenuBtn.style.display = 'none';
      navLinks.classList.remove('show');
    }
  }

  // Run on load and resize
  setupMobileMenu();
  window.addEventListener('resize', setupMobileMenu);

  // Prevent scrolling when menu is open
  document.body.style.overflow = 'auto';
  const style = document.createElement('style');
  style.innerHTML = `
    .no-scroll {
      overflow: hidden !important;
    }
    @media (min-width: 769px) {
      .nav-links {
        display: flex !important;
      }
    }
  `;
  document.head.appendChild(style);
});