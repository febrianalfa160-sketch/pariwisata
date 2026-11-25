/*PARRALAX SCROLL */
const hero = document.querySelector('.hero-wisata');
window.addEventListener('scroll', function () {
    if (!hero) return;
    let scrollPosition = window.scrollY;
    hero.style.backgroundPositionY =
    `center ${scrollPosition * 0.4}px`;
});
