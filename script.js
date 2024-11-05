// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggleBtn.textContent = document.body.classList.contains('dark-theme') 
      ? 'Light Theme' : 'Dark Theme';
});
