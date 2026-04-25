// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Fade out dopo che tutto è caricato (minimo 1.2s per non flashare)
    setTimeout(() => {
        loader.classList.add("hidden")
        document.body.classList.remove('loading');
    }, 500);
});

// Responsive Header
function responsiveHeader(){
    const icons = document.querySelectorAll(".header-link i");
    const names = document.querySelectorAll(".header-link p");

    if(window.innerWidth < 600){
        icons.forEach(icon => {
            icon.classList.remove("hidden");
        })
        names.forEach(name => {
            name.classList.add("hidden");
        })
    }else{
        icons.forEach(icon => {
            icon.classList.add("hidden");
        })
        names.forEach(name => {
            name.classList.remove("hidden");
        })
    }
}

responsiveHeader();
window.addEventListener("resize", responsiveHeader);

// Scroll Responsive Header
function scrollHeader(){
    const headerLinks = document.querySelector(".header-links");
    
    if (window.scrollY > 0){
        headerLinks.classList.add("scroll");
    }
    if (window.scrollY < 30){
        headerLinks.classList.remove("scroll");
    }
}

window.addEventListener("scroll", scrollHeader);