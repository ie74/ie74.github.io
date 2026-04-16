// Carousels
const projectElements = document.querySelectorAll(".project");
let projects = [];

projectElements.forEach(project => {
	const images = project.querySelectorAll(".carousel-imgs img");
	
	projects.push({
		id: project.id,
		activeIdx: 0,
		imgN: images.length
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
	
	projects.forEach(project => {
		if(project.id == projectID){
			project.activeIdx = i;
		}
	});
}

function next(projectID){
	projects.forEach(project => {
		if(project.id == projectID){
			if(project.activeIdx < project.imgN-1){
				project.activeIdx += 1;
				goTo(projectID, project.activeIdx);
			}else{
				project.activeIdx = 0;
				goTo(projectID, 0);
			}
		}
	});	
}

function prev(projectID){
	projects.forEach(project => {
		if(project.id == projectID){
			if(project.activeIdx > 0){
				project.activeIdx -= 1;
				goTo(projectID, project.activeIdx);
			}else{
				project.activeIdx = project.imgN-1;
				goTo(projectID, project.activeIdx);
			}
		}
	});	
}