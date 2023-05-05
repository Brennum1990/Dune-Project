export default function collapsible() {
	// Planets
	const planetButtons = document.querySelectorAll(".planet__button");

	planetButtons.forEach(planetButton => {
	planetButton.addEventListener("click", event => {
		
	const currentlyActiveplanetButton = document.querySelector(".planet__button.active");
		if(currentlyActiveplanetButton && currentlyActiveplanetButton!==planetButton) {
			currentlyActiveplanetButton.classList.toggle("active");
			currentlyActiveplanetButton.nextElementSibling.style.maxHeight = 0;
	}

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

	// Characters
	const characterButtons = document.querySelectorAll(".character__button");

	characterButtons.forEach(characterButton => {
	characterButton.addEventListener("click", event => {
		
	const currentlyActivecharacterButton = document.querySelector(".character__button.active");
		if(currentlyActivecharacterButton && currentlyActivecharacterButton!==characterButton) {
			currentlyActivecharacterButton.classList.toggle("active");
			currentlyActivecharacterButton.nextElementSibling.style.maxHeight = 0;
	}

	characterButton.classList.toggle("active");
	const characterInfo = characterButton.nextElementSibling;
	if(characterButton.classList.contains("active")) {
		characterInfo.style.maxHeight = characterInfo.scrollHeight + "px";
	}
	else {
		characterInfo.style.maxHeight = 0;
	}
	});
	});

	// Houses
	const houseButtons = document.querySelectorAll(".house__button");

	houseButtons.forEach(houseButton => {
	houseButton.addEventListener("click", event => {
		
	const currentlyActivehouseButton = document.querySelector(".house__button.active");
		if(currentlyActivehouseButton && currentlyActivehouseButton!==houseButton) {
			currentlyActivehouseButton.classList.toggle("active");
			currentlyActivehouseButton.nextElementSibling.style.maxHeight = 0;
	}

	houseButton.classList.toggle("active");
	const houseInfo = houseButton.nextElementSibling;
	if(houseButton.classList.contains("active")) {
		houseInfo.style.maxHeight = houseInfo.scrollHeight + "px";
	}
	else {
		houseInfo.style.maxHeight = 0;
	}
	});
	});

	// TV/Movies
	const onScreenButtons = document.querySelectorAll(".onscreen__button");

	onScreenButtons.forEach(onScreenButton => {
	onScreenButton.addEventListener("click", event => {
		
	const currentlyActiveonScreenButton = document.querySelector(".onScreen__button.active");
		if(currentlyActiveonScreenButton && currentlyActiveonScreenButton!==onScreenButton) {
			currentlyActiveonScreenButton.classList.toggle("active");
			currentlyActiveonScreenButton.nextElementSibling.style.maxHeight = 0;
	}

	onScreenButton.classList.toggle("active");
	const onScreenInfo = onScreenButton.nextElementSibling;
	if(onScreenButton.classList.contains("active")) {
		onScreenInfo.style.maxHeight = onScreenInfo.scrollHeight + "px";
	}
	else {
		onScreenInfo.style.maxHeight = 0;
	}
	});
	});


	// Books
	const bookButtons = document.querySelectorAll(".book__button");

	bookButtons.forEach(bookButton => {
	bookButton.addEventListener("click", event => {
		
	const currentlyActivebookButton = document.querySelector(".book__button.active");
		if(currentlyActivebookButton && currentlyActivebookButton!==bookButton) {
			currentlyActivebookButton.classList.toggle("active");
			currentlyActivebookButton.nextElementSibling.style.maxHeight = 0;
	}

	bookButton.classList.toggle("active");
	const bookInfo = bookButton.nextElementSibling;
	if(bookButton.classList.contains("active")) {
		bookInfo.style.maxHeight = bookInfo.scrollHeight + "px";
	}
	else {
		bookInfo.style.maxHeight = 0;
	}
	});
	});

	// Organizations & Groups 
	const organizationButtons = document.querySelectorAll(".organization__button");

	organizationButtons.forEach(organizationButton => {
	organizationButton.addEventListener("click", event => {
		
	const currentlyActiveorganizationButton = document.querySelector(".organization__button.active");
		if(currentlyActiveorganizationButton && currentlyActiveorganizationButton!==organizationButton) {
			currentlyActiveorganizationButton.classList.toggle("active");
			currentlyActiveorganizationButton.nextElementSibling.style.maxHeight = 0;
	}

	organizationButton.classList.toggle("active");
	const organizationInfo = organizationButton.nextElementSibling;
	if(organizationButton.classList.contains("active")) {
		organizationInfo.style.maxHeight = organizationInfo.scrollHeight + "px";
	}
	else {
		organizationInfo.style.maxHeight = 0;
	}
	});
	});
}