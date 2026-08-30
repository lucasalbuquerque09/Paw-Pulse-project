const btnMenuMobile = document.querySelector('.btn-menu-mobile');
const menuMobile = document.querySelector('.menu-mobile');
const overlayMobile = document.querySelector('.overlay');

btnMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('activeMenu');
    overlayMobile.classList.add('activeMenu');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('activeMenu');
    overlayMobile.classList.remove('activeMenu');
});

overlayMobile.addEventListener('clicl', () => {
    menuMobile.classList.remove('activeMenu');
    overlayMobile.classList.remove('activeMenu');
});