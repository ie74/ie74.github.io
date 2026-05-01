// Loader
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".loader svg");
  setTimeout(() => logo.classList.add("visible"), 150);
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.remove("loading");
  }, 400);
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