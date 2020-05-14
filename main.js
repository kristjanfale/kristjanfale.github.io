const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');

// Toggle navigation
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// Close navigation when click on one of the links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Close navigation when click outside of navigation list
nav.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
});
