import {sanity} from '../sanity.js';
import collapsible from './collapsible.js';

export default async function books() {
	const bookContainer = document.querySelector('.book');
	const query = `*[_type == 'books'] | order(releaseDate asc) {
		_id,
		name,
		releaseDate,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderBooks() {
		for (const books of dune) {
			// Creating elements
			const bookCard = document.createElement('div');
			const bookButton = document.createElement('button');
			const bookInfo = document.createElement('div');
			const bookImageFrame = document.createElement('div');
			const bookImage = document.createElement('img'); 
			const bookText = document.createElement('p');
			const bookReleaseDate = document.createElement('p');
			
			// Rendering elements 
			bookButton.innerText = books.name;
			bookImage.src = books.imageUrl;
			bookImage.setAttribute('alt', `${books.name}`);
			bookText.innerText = books.text; 
			bookReleaseDate.innerText = books.releaseDate;
		
			// Hierarchy of book details
			bookContainer.appendChild(bookCard);
			bookCard.appendChild(bookButton);
			bookCard.appendChild(bookInfo);
				bookInfo.appendChild(bookImageFrame);
					bookImageFrame.appendChild(bookImage);
				bookInfo.appendChild(bookText);
			
			// Creating classnames
			bookCard.className = 'book__card';
			bookButton.className = 'book__button';
			bookInfo.className = 'book__info';
			bookImageFrame.className = 'book__image-frame';
			bookImage.className = 'book__image';
			bookText.className = 'book__text';
		}
	}
renderBooks(); 
collapsible();
}