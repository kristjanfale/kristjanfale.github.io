const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');

const cardButtons = document.querySelectorAll('.card__buttons');

// NAVIGATION
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
// END NAVIGATION

// CARD BUTTONS
cardButtons.forEach((buttons) => {
  // Hover over first(button--live)
  buttons.children[0].addEventListener('mouseover', () => {
    buttons.children[0].style.transform = 'scale(1.1)';
    buttons.children[1].style.transform = 'scale(0.9)';
  });

  buttons.children[0].addEventListener('mouseout', () => {
    buttons.children[0].style.transform = 'scale(1)';
    buttons.children[1].style.transform = 'scale(1)';
  });

  // Hover over second(button--code)
  buttons.children[1].addEventListener('mouseover', () => {
    buttons.children[0].style.transform = 'scale(0.9)';
    buttons.children[1].style.transform = 'scale(1.1)';
  });

  buttons.children[1].addEventListener('mouseout', () => {
    buttons.children[0].style.transform = 'scale(1)';
    buttons.children[1].style.transform = 'scale(1)';
  });
});
// END CARD BUTTONS
