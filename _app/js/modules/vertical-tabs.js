export default function tabs() {

	let planetTabBtns = document.querySelectorAll('.planet__button');
	let planetContent = document.querySelectorAll('.planet__info');

	planetTabBtns.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			planetContent.forEach(content => {
				content.classList.remove('active');
			});
			planetTabBtns.forEach((tab) => {
				tab.classList.remove('active');
			});
			planetContent[index].classList.add('active');
			planetTabBtns[index].classList.add('active');
		}); 
	});

	let characterTabBtns = document.querySelectorAll('.character__button');
	let characterContent = document.querySelectorAll('.character__info');

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

	let houseTabBtns = document.querySelectorAll('.house__button');
	let houseContent = document.querySelectorAll('.house__info');

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

	let groupTabBtns = document.querySelectorAll('.organization__button');
	let groupContent = document.querySelectorAll('.organization__info');

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