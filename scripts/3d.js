// Carousels
const projects = document.querySelectorAll(".project");
let active = [];

projects.forEach(project => {
	active.push({
		id: project.id,
		idx: 0
	});
});

function goTo(projectID, i){
	const carousel = document.getElementById(projectID).querySelector(".project-carousel");
	const images = carousel.querySelectorAll(".carousel-imgs img");
	const dots = carousel.querySelectorAll(".carousel-dot");
	
	images.forEach(img => {
		img.classList.remove("active");
	});
	
	dots.forEach(dot => {
		dot.classList.remove("active");
	});
	
	images[i].classList.add("active");
	dots[i].classList.add("active");
	
	active.forEach(data => {
		if(data.id == projectID){
			data.idx = i;
		}
	})
}

function next(projectID){

}

function prev(projectID){

}