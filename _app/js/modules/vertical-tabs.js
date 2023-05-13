export default function tabs() {

	let tabButtons = document.querySelectorAll('.planet__button');
	let tabContent = document.querySelectorAll('.planet__info');

	tabButtons.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabContent.forEach(content => {
				content.classList.remove('active');
			});
			tabButtons.forEach((tab) => {
				tab.classList.remove('active');
			});
			tabContent[index].classList.add('active');
			tabButtons[index].classList.add('active');
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