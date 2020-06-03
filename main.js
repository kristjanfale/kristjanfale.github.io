const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');

const cardText = document.querySelectorAll('.card__text');

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
cardText.forEach((card) => {
  // Hover over first(button--live)
  card.children[0].addEventListener('mouseover', () => {
    card.children[0].style.transform = 'scale(1.1)';
    card.children[1].style.transform = 'scale(0.9)';
  });

  card.children[0].addEventListener('mouseout', () => {
    card.children[0].style.transform = 'scale(1)';
    card.children[1].style.transform = 'scale(1)';
  });

  // Hover over second(button--code)
  card.children[1].addEventListener('mouseover', () => {
    card.children[0].style.transform = 'scale(0.9)';
    card.children[1].style.transform = 'scale(1.1)';
  });

  card.children[1].addEventListener('mouseout', () => {
    card.children[0].style.transform = 'scale(1)';
    card.children[1].style.transform = 'scale(1)';
  });
});
// END CARD BUTTONS
