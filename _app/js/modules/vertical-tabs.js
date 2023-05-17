export default function tabs() {

	let planetTabBtns = document.querySelectorAll('.sidebar__planet-buttons');
	let planetContent = document.querySelectorAll('.content__planet-info');

	planetTabBtns.forEach((tab) => {
		tab.addEventListener('click', () => {
			planetContent.forEach(content => {
				content.classList.remove('active');
			});
			planetTabBtns.forEach((tab) => {
				tab.classList.remove('active');
			});
			tab.planetContent.classList.add('active');
			tab.planetTabBtns.classList.add('active');
			}); 
	});

	let characterTabBtns = document.querySelectorAll('.sidebar__character-buttons');
	let characterContent = document.querySelectorAll('.content__character-info');

	characterTabBtns.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			characterContent.forEach(content => {
				content.classList.remove('active');
			});
			characterTabBtns.forEach((tab) => {
				tab.classList.remove('active');
			});
			characterContent[index].classList.add('active');
			characterTabBtns[index].classList.add('active');
		}); 
	});

	let houseTabBtns = document.querySelectorAll('.sidebar__house-buttons');
	let houseContent = document.querySelectorAll('.content__house-info');

	houseTabBtns.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			houseContent.forEach(content => {
				content.classList.remove('active');
			});
			houseTabBtns.forEach((tab) => {
				tab.classList.remove('active');
			});
			houseContent[index].classList.add('active');
			houseTabBtns[index].classList.add('active');
		}); 
	});

	let groupTabBtns = document.querySelectorAll('.sidebar__organization-buttons');
	let groupContent = document.querySelectorAll('.content__organization-info');

	groupTabBtns.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			groupContent.forEach(content => {
				content.classList.remove('active');
			});
			groupTabBtns.forEach((tab) => {
				tab.classList.remove('active');
			});
			groupContent[index].classList.add('active');
			groupTabBtns[index].classList.add('active');
		}); 
	});

	// Characters
	// const characterButtons = document.querySelectorAll(".character__button");

	// characterButtons.forEach(characterButton => {
	// characterButton.addEventListener("click", event => {
		
	// const currentlyActivecharacterButton = document.querySelector(".character__button.active");
	// 	if(currentlyActivecharacterButton && currentlyActivecharacterButton!==characterButton) {
	// 		currentlyActivecharacterButton.classList.toggle("active");
	// 		currentlyActivecharacterButton.nextElementSibling.style.maxHeight = 0;
	// }

	// characterButton.classList.toggle("active");
	// const characterInfo = characterButton.nextElementSibling;
	// if(characterButton.classList.contains("active")) {
	// 	characterInfo.style.maxHeight = characterInfo.scrollHeight + "px";
	// }
	// else {
	// 	characterInfo.style.maxHeight = 0;
	// }
	// });
	// });
}