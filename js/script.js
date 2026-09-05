const header = document.querySelector('header');

let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                header.classList.add('scrolled');
            } else if (currentScrollY < lastScrollY) {
                header.classList.remove('scrolled');
            }

            lastScrollY = currentScrollY;
            ticking = false;
        });
        ticking = true;
    }
});