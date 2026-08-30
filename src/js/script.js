// DOM Elements
const btnMenuMobile = document.querySelector('.btn-menu-mobile');
const menuMobile = document.querySelector('.menu-mobile');
const overlayMobile = document.querySelector('.overlay');

// Event Listeners Mobile Menu
btnMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('activeMenu');
    overlayMobile.classList.add('activeMenu');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('activeMenu');
    overlayMobile.classList.remove('activeMenu');
});

overlayMobile.addEventListener('click', () => {
    menuMobile.classList.remove('activeMenu');
    overlayMobile.classList.remove('activeMenu');
});