// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  html.setAttribute('data-theme', savedTheme);
  
  if (savedTheme === 'dark') {
    if (toggle) toggle.checked = true;
  }
  
  // Add event listener if toggle exists
  if (toggle) {
    toggle.addEventListener('change', function() {
      if (this.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});