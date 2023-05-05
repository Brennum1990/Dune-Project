export default function collapsible() {
	const planetButtons = document.querySelectorAll(".planet__button");

	planetButtons.forEach(planetButton => {
	planetButton.addEventListener("click", event => {
		
		// const currentlyActiveplanetButton = document.querySelector(".planet__button.active");
		// if(currentlyActiveplanetButton && currentlyActiveplanetButton!==planetButton) {
		//   currentlyActiveplanetButton.classList.toggle("active");
		//   currentlyActiveplanetButton.nextElementSibling.style.maxHeight = 0;
		// }

	planetButton.classList.toggle("active");
	const planetInfo = planetButton.nextElementSibling;
	if(planetButton.classList.contains("active")) {
		planetInfo.style.maxHeight = planetInfo.scrollHeight + "px";
	}
	else {
		planetInfo.style.maxHeight = 0;
	}
		
	});
});
}