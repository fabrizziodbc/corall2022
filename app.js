const header__hamburguer = document.querySelector('.header__hamburguer');
const header__menu = document.querySelector('.header__menu-mobile');
const main = document.querySelector('main');

addEventListener('DOMContentLoaded', () => {
  header__hamburguer.addEventListener('click', () => {
    header__menu.classList.toggle('showRight');
  });
  header__menu.addEventListener('click', () => {
    header__menu.classList.toggle('showRight');
  });
  main.addEventListener('click', () => {
    header__menu.classList.remove('showRight');
  });
});
