function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme') || 'light';

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', newTheme);
  sessionStorage.setItem('theme', newTheme);

  updateIcons(newTheme);
}

window.addEventListener('DOMContentLoaded', () => {
  const theme = document.documentElement.getAttribute('data-theme') || 'light';
  updateIcons(theme);
});

function updateIcons(theme) {
  const sunIcon = document.getElementById('sun_icon');
  const moonIcon = document.getElementById('moon_icon');

  if (!sunIcon || !moonIcon) return;

  if (theme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}