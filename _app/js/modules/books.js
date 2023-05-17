import {sanity} from '../sanity.js';
import collapsible from './vertical-tabs.js';

export default async function books() {
	const bookContainer = document.querySelector('.books__content');
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
			const bookTitle = document.createElement('h1');
			const bookInfo = document.createElement('div');
			const bookImageFrame = document.createElement('div');
			const bookImage = document.createElement('img'); 
			const bookText = document.createElement('p');
			const bookReleaseDate = document.createElement('p');
			
			// Rendering elements 
			bookTitle.innerText = books.name;
			bookImage.src = books.imageUrl;
			bookImage.setAttribute('alt', `${books.name}`);
			bookText.innerText = books.text; 
			bookReleaseDate.innerText = books.releaseDate;
		
			// Hierarchy of book details
			bookContainer.appendChild(bookCard);
			bookCard.appendChild(bookTitle);
			bookCard.appendChild(bookInfo);
				bookInfo.appendChild(bookImageFrame);
					bookImageFrame.appendChild(bookImage);
				bookInfo.appendChild(bookText);
			
			// Creating classnames
			bookCard.className = 'books__card';
			bookTitle.className = 'books__title';
			bookInfo.className = 'books__info';
			bookImageFrame.className = 'books__image-frame';
			bookImage.className = 'books__image';
			bookText.className = 'books__text';
		}
	}
renderBooks(); 
}