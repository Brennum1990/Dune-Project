import {sanity} from '../sanity.js';

export default async function Characters() {
	const characterContainer = document.querySelector('.character');
	const query = `*[_type == 'characters'] | order(name asc) {
		_id,
		name,
		text,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderCharacters() {
		for (const characters of dune) {
			// Creating elements
			const characterCard = document.createElement('div');
			const characterTitle = document.createElement('h1');
			const characterImageFrame = document.createElement('div');
			const characterImage = document.createElement('img'); 
			const characterText = document.createElement('p');
			
			// Rendering elements 
			characterTitle.innerText = characters.name;
			// characterImage.src = `${characters.image.asset}`;
			characterImage.setAttribute('alt', `${characters.name}`);
			characterText.innerText = characters.text; 
		
			// Hierarchy of character details
			characterContainer.appendChild(characterCard);
				characterCard.appendChild(characterTitle);
				characterCard.appendChild(characterImageFrame);
					characterImageFrame.appendChild(characterImage);
				characterCard.appendChild(characterText);

			// Creating classnames
			characterCard.className = 'character__card';
			characterTitle.className = 'character__title';
			characterImageFrame.className = 'character__image-frame';
			characterImage.className = 'character__image';
			characterText.className = 'character__text'; 
		}
	}
renderCharacters(); 
}