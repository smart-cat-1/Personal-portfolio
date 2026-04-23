document.body.setAttribute('data-theme', 'light');
document.getElementById('sun_icon').style.display = 'none';
document.getElementById('moon_icon').style.display = 'block';

function toggleTheme() {
  const sunIcon = document.getElementById('sun_icon');
  const moonIcon = document.getElementById('moon_icon');
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);

  if (newTheme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}