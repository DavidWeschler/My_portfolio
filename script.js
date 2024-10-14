'use strict';

const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');
const menuItems = document.querySelectorAll('#navbar a');
const skillItems = document.querySelectorAll('.skill-item');

// Hamburger Menu:
hamburger.addEventListener('click', function () {
  navbar.classList.toggle('active'); // Show/hide the menu
});

// Close the menu when a menu item is clicked
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navbar.classList.remove('active'); // Hide the menu
  });
});

document.getElementById('contact-btn').addEventListener('click', function () {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
  });
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

//--------------------
const contactForm = document.querySelector('.contact-me-form');

let fullName = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let formData = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  // xhr.open('POST', '/');
  xhr.open('POST', 'https://davidweschler.com/');

  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == 'success') {
      alert('Message Sent');
      fullName.value = '';
      email.value = '';
      message.value = '';
    } else {
      alert('Something went wrong, try again');
    }
  };

  xhr.send(JSON.stringify(formData));
});
