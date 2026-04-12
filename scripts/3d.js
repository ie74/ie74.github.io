// Carousels
const carousels = document.querySelectorAll(".project-carousel");

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel-imgs img");
    const dots = carousel.querySelectorAll(".carousel-dot");

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            dots.forEach(d => {d.classList.remove("active")});
            images.forEach(img => {img.classList.remove("active")});

            dot.classList.add("active");
            images[i].classList.add("active");
        })
    })
})