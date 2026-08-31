// DOM Elements
const btnMenuMobile = document.querySelector('.btn-menu-mobile');
const menuMobile = document.querySelector('.menu-mobile');
const overlayMobile = document.querySelector('.overlay');
const revealElements = document.querySelectorAll('.reveal');

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

/* Reveal Elements on Scroll */
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.18,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});