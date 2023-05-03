import {sanity} from '../sanity.js';

export default async function books() {
	const bookContainer = document.querySelector('.books');
	const query = `*[_type == 'books'] | order(name asc) {
		_id,
		name,
		releaseDate,
		TextField,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderBooks() {
		for (const books of dune) {
			// Creating elements
			const bookCard = document.createElement('div');
			const bookImageFrame = document.createElement('div');
			const bookImage = document.createElement('img'); 
			const bookText = document.createElement('p');
			const bookReleaseDate = document.createElement('p');
			
			// Rendering elements 
			bookCard.innerText = books.name;
			// bookImage.src = `${books.image.asset}`;
			bookImage.setAttribute('alt', `${books.name}`);
			bookText.innerText = books.TextField[0].children[0].text; 
			bookReleaseDate.innerText = books.releaseDate;
		
			// Hierarchy of book details
			bookContainer.appendChild(bookCard);
				bookCard.appendChild(bookImageFrame);
					bookImageFrame.appendChild(bookImage);
				bookCard.appendChild(bookText);
				bookCard.appendChild(bookReleaseDate);

			// Creating classnames
			bookCard.className = 'books__card';
			bookImageFrame.className = 'books__image-frame';
			bookImage.className = 'books__image';
			bookText.className = 'books__text'; 
			bookReleaseDate.className = 'onscreen__release-date'
		}
	}
renderBooks(); 
}