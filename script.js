'use strict';

const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');

// Hamburger Menu:
hamburger.addEventListener('click', function () {
  navbar.classList.toggle('active');
});

//Download CV Button:
document.getElementById('cv-btn').onclick = function () {
  window.open('./assets/cv.pdf', '_blank');
};
