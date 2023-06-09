export default function showMedia() {
	// Books
	const bookCards = document.querySelectorAll('.books__card');
	const bookInfo = document.querySelectorAll('.books__info');

	bookCards.forEach((card, index) => {
		card.addEventListener('click', () => {
			bookInfo.forEach(content => {
				content.classList.remove('active');
			});
			bookCards.forEach((card) => {
				card.classList.remove('active');
			});
			bookInfo[index].classList.add('active');
			bookCards[index].classList.add('active');
		}); 
	}); // Toggles each book and its information

	// Media - TV/ Films
	const onScreenCard = document.querySelectorAll('.onscreen__card');
	const onscreenInfo = document.querySelectorAll('.onscreen__info');

	onScreenCard.forEach((card, index) => {
		card.addEventListener('click', () => {
			onscreenInfo.forEach(content => {
				content.classList.remove('active');
			});
			onScreenCard.forEach((card) => {
				card.classList.remove('active');
			});
			onscreenInfo[index].classList.add('active');
			onScreenCard[index].classList.add('active');
		}); 
	}); // Toggles each movie and its information

	// Displays and hides the "Books" section
	const allBooks = document.querySelector('.books__content');
	let bookBtnClick = true; 

	let showBooks = function() {
		if(bookBtnClick) {
			allBooks.style.display = "grid";
			bookBtnClick = false;
		} else {
		  allBooks.style.display = "none";
		  bookBtnClick = true; 
		} 
	}
}