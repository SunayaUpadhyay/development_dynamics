const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');
const body = document.querySelector('body');
const overlay = document.getElementById('overlay');

function burgerClick() {
  //Toggle Nav
  nav.classList.toggle('nav-active');
  
  //Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  
  //Burger Animation
  burger.classList.toggle('toggle');

  //Disable scroll
  body.classList.toggle('no-scroll');

  //Enable overlay
  overlay.classList.toggle('overlay');
}

const navSlide = () => {
  burger.addEventListener('click', burgerClick);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (getComputedStyle(burger).display != "none") {
        burgerClick();
      }
    });
  })
}

navSlide();