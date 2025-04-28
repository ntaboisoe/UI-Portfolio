// Toggle Theme
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', newTheme);
});

// Scroll to top button
const toTop = document.querySelector('.to-top');
if (toTop) {
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Search button placeholder (expandable later)
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    alert('Search functionality coming soon!');
  });
}

// Animate on load
window.addEventListener('load', () => {
  const animatedElements = document.querySelectorAll('.animated');
  animatedElements.forEach((el, idx) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, idx * 200);
  });
});
