'use strict';

const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');
const skillItems = document.querySelectorAll('.skill-item');

// Hamburger Menu:
hamburger.addEventListener('click', function () {
  navbar.classList.toggle('active');
});

//Download CV Button:
document.getElementById('cv-btn').onclick = function () {
  window.open('./assets/cv.pdf', '_blank');
};

skillItems.forEach(item => {
  const img = item.querySelector('img');
  const originalSrc = img.src;
  const hoverSrc = originalSrc.replace('.png', '-hover.png');

  item.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });

  item.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});
