const menuBars = document.querySelector('.menu-bars');
const closeMenu = document.querySelector('.close');
const menuNav = document.querySelector('.desktop-nav');
const navLinks = document.querySelectorAll('.nav-link');

const closeMobileNav = () => {
  menuNav.classList.remove('visible');
};

window.onload = () => {
  menuBars.addEventListener('click', () => {
    menuNav.classList.add('visible');
  });
  closeMenu.addEventListener('click', () => {
    closeMobileNav();
  });
  Array.from(navLinks).map((link) => link.addEventListener('click', () => {
    closeMobileNav();
  }));
};