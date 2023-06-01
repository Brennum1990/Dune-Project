import {sanity} from '../sanity.js';
import showMedia from './show-media.js';

export default async function books() {
	const bookContainer = document.querySelector('.books__content');
	const bookQuery = `*[_type == 'books'] | order(releaseDate asc) {
		_id,
		name,
		author,
		releaseDate,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;

	const media = await sanity.fetch(bookQuery); 

	function renderBooks() {
		for (const books of media) {
			// Creating elements
			const bookCard = document.createElement('a');
			const bookImage = document.createElement('img');
			 
			const bookInfo = document.createElement('div');
			const bookDetails = document.createElement('div');
			const bookTitle = document.createElement('h1');
			const bookText = document.createElement('p');
			const bookReleaseDate = document.createElement('p');
			const bookAuthor = document.createElement('p');
			
			// Rendering elements 
			bookTitle.innerText = books.name;
			bookImage.src = books.imageUrl;
			bookCard.setAttribute('alt', `${books.name}`);
			bookCard.setAttribute('href', '#');
			bookText.innerText = books.text; 
			bookReleaseDate.innerText = books.releaseDate;
			bookAuthor.innerText = books.author;
		
			// Hierarchy of book details
			bookContainer.appendChild(bookCard);
				bookCard.appendChild(bookImage);

			bookContainer.appendChild(bookInfo);
				bookInfo.appendChild(bookDetails);
					bookDetails.appendChild(bookTitle);
					bookDetails.appendChild(bookAuthor);
					bookDetails.appendChild(bookReleaseDate);
				bookInfo.appendChild(bookText);
			
			// Creating classnames
			bookCard.className = 'books__card';
			bookImage.className = 'books__image';
			bookTitle.className = 'books__title';
			bookAuthor.className = 'books__author';
			bookReleaseDate.className = 'books__release-date';
			bookInfo.className = 'books__info';
			bookDetails.className = 'books__details';
			bookText.className = 'books__text';
		}
	}
renderBooks(); 
showMedia();
}