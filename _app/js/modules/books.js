import {sanity} from '../sanity.js';

export default async function books() {
	const bookContainer = document.querySelector('.book');
	const query = `*[_type == 'books'] | order(releaseDate asc) {
		_id,
		name,
		releaseDate,
		text,
		category,
	}`;
	
	// "imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderBooks() {
		for (const books of dune) {
			// Creating elements
			const bookCard = document.createElement('div');
			const bookTitle = document.createElement('h1');
			const bookReleaseDate = document.createElement('p');
			const bookImageFrame = document.createElement('div');
			const bookImage = document.createElement('img'); 
			const bookText = document.createElement('p');
			
			
			// Rendering elements 
			bookTitle.innerText = books.name;
			bookReleaseDate.innerText = books.releaseDate;
			// bookImage.src = `${books.image.asset}`;
			bookImage.setAttribute('alt', `${books.name}`);
			bookText.innerText = books.text; 
			
		
			// Hierarchy of book details
			bookContainer.appendChild(bookCard);
				bookCard.appendChild(bookTitle);
				bookCard.appendChild(bookReleaseDate);
				bookCard.appendChild(bookImageFrame);
					bookImageFrame.appendChild(bookImage);
				bookCard.appendChild(bookText);
				

			// Creating classnames
			bookCard.className = 'book__card';
			bookTitle.className = 'book__title';
			bookReleaseDate.className = 'book__release-date';
			bookImageFrame.className = 'book__image-frame';
			bookImage.className = 'book__image';
			bookText.className = 'book__text'; 
			
		}
	}
renderBooks(); 
}