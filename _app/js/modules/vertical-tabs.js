export default function tabs() {
	
	// Planets
	const planetTabBtns = document.querySelectorAll('.sidebar__planet-buttons');
	const planetContent = document.querySelectorAll('.content__planet-info');

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

	// Characters
	const characterTabBtns = document.querySelectorAll('.sidebar__character-buttons');
	const characterContent = document.querySelectorAll('.content__character-info');

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

	// Houses
	const houseTabBtns = document.querySelectorAll('.sidebar__house-buttons');
	const houseContent = document.querySelectorAll('.content__house-info');

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

	// Organizations & Groups
	const organizationTabBtns = document.querySelectorAll('.sidebar__organization-buttons');
	const organizationContent = document.querySelectorAll('.content__organization-info');

	organizationTabBtns.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			organizationContent.forEach(content => {
				content.classList.remove('active');
			});
			organizationTabBtns.forEach((tab) => {
				tab.classList.remove('active');
			});
			organizationContent[index].classList.add('active');
			organizationTabBtns[index].classList.add('active');
		}); 
	});
}