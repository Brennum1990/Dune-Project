import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function onScreen() {
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
		console.log(media)

	function renderBooks() {
		for (const books of media) {
			// Creating elements
			const bookCard = document.createElement('a');
			const bookTitle = document.createElement('h1');
			const bookInfo = document.createElement('div');
			const bookImageFrame = document.createElement('a');
			const bookImage = document.createElement('img'); 
			const bookText = document.createElement('p');
			const bookReleaseDate = document.createElement('p');
			const bookAuthor = document.createElement('p');
			
			// Rendering elements 
			bookTitle.innerText = books.name;
			bookImage.src = books.imageUrl;
			bookImage.setAttribute('alt', `${books.name}`);
			bookText.innerText = books.text; 
			bookReleaseDate.innerText = books.releaseDate;
			bookAuthor.innerText = books.author;
		
			// Hierarchy of book details
			bookContainer.appendChild(bookCard);
				bookCard.appendChild(bookTitle);
				bookCard.appendChild(bookImageFrame);
					bookImageFrame.appendChild(bookImage);

			bookContainer.appendChild(bookInfo);
				bookInfo.appendChild(bookAuthor);
				bookInfo.appendChild(bookReleaseDate);
				bookInfo.appendChild(bookText);
			
			// Creating classnames
			bookCard.className = 'books__card';
			bookTitle.className = 'books__title';
			bookAuthor.className = 'books__author';
			bookReleaseDate.className = 'books__release-date';
			bookInfo.className = 'books__info';
			bookImageFrame.className = 'books__image-frame';
			bookImage.className = 'books__image';
			bookText.className = 'books__text';
		}
	}
renderBooks(); 
tabs();
}