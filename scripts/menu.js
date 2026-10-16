const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu--open');
});

menu.querySelectorAll('.header__link').forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('header__menu--open');
    });
});