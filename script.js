'use strict';

const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');
const skillItems = document.querySelectorAll('.skill-item');
// const form = document.getElementById('contact-form');

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

// form.addEventListener('submit', function (event) {
//   const emailInput = document.querySelector('input[type="email"]');
//   const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

//   if (!emailPattern.test(emailInput.value)) {
//     // event.preventDefault();
//   }
// });
