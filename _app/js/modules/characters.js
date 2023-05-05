import {sanity} from '../sanity.js';
import collapsible from './collapsible.js';

export default async function Characters() {
	const characterContainer = document.querySelector('.character');
	const query = `*[_type == 'characters'] | order(name asc) {
		_id,
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderCharacters() {
		for (const characters of dune) {
			// Creating elements
			const characterCard = document.createElement('div');
			const characterButton = document.createElement('button');
			const characterInfo = document.createElement('div');
			const characterImageFrame = document.createElement('div');
			const characterImage = document.createElement('img'); 
			const characterText = document.createElement('p');
			
			// Rendering elements 
			characterButton.innerText = characters.name;
			characterImage.src = characters.imageUrl;
			characterImage.setAttribute('alt', `${characters.name}`);
			characterText.innerText = characters.text; 
		
			// Hierarchy of character details
			characterContainer.appendChild(characterCard);
				characterCard.appendChild(characterButton);
				characterCard.appendChild(characterInfo);
					characterInfo.appendChild(characterImageFrame);
						characterImageFrame.appendChild(characterImage);
					characterInfo.appendChild(characterText);

			// Creating classnames
			characterCard.className = 'character__card';
			characterButton.className = 'character__button';
			characterInfo.className = 'character__info';
			characterImageFrame.className = 'character__image-frame';
			characterImage.className = 'character__image';
			characterText.className = 'character__text';  
		}
	}
renderCharacters(); 
collapsible();
}