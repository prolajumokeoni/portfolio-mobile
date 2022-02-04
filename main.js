const menuBars = document.querySelector('.menu-bars');
const menuNav = document.querySelector('.desktop-nav');

menuBars.addEventListener('click', () => {
  menuNav.classList.add('visible');
});
