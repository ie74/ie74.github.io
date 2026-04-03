// Header
const headerMenu = document.querySelector(".header-links");
const headerMenuBtn = document.querySelector(".header-menu-btn");
const headerMenuBtnIcon = document.querySelector(".header-menu-btn i");

// Photos
const gallery = document.querySelector(".section#gallery .section-container");

// Responsive Header logic
headerMenuBtn.addEventListener("click", () => {
    if(headerMenu.classList.contains("active")){
        headerMenu.classList.remove("active");
        headerMenuBtnIcon.classList.remove("bi-x-lg");
        headerMenuBtnIcon.classList.add("bi-list");
    }else{
        headerMenu.classList.add("active");
        headerMenuBtnIcon.classList.remove("bi-list");
        headerMenuBtnIcon.classList.add("bi-x-lg");
    }
});

//Load photos
fetch("../json/photos.json").then(response => {
    return response.json();
}).then(data => {
    data.forEach(photo => {
        gallery.innerHTML += `<div class="img-container">
							        <img src="../${photo.path}" alt="image" class="gallery-img">
							        <p class="img-desc">${photo.desc}</p>
						        </div>`
    });
})