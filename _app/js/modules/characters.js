import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function character() {
	const characterContainer = document.querySelector('.character__container');
	const query = `*[_type == 'characters'] | order(name asc) {
		_id,
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const dune = await sanity.fetch(query); 
		console.log(dune)

	function rendercharacters() {
		for (const characters of dune) {
			// Creating elements
			const characterButton = document.createElement('button');
			const characterInfo = document.createElement('div');
			const characterImageFrame = document.createElement('div');
			const characterImage = document.createElement('img'); 
			const characterText = document.createElement('p');
			
			// Rendering elements 
			characterButton.innerText = characters.name;
			characterButton.setAttribute('alt', `${characters.name}`);
			characterButton.setAttribute('type', 'tabs');
			characterImage.src = characters.imageUrl;
			characterImage.setAttribute('alt', `${characters.name}`);
			characterText.innerText = characters.text; 
		
			// Hierarchy of character details
			characterContainer.appendChild(characterButton);
			characterContainer.appendChild(characterInfo);
				characterInfo.appendChild(characterImageFrame);
					characterImageFrame.appendChild(characterImage);
				characterInfo.appendChild(characterText);

			// Creating classnames
			characterButton.className = 'character__button';
			characterInfo.className = 'character__info';
			characterImageFrame.className = 'character__image-frame';
			characterImage.className = 'character__image';
			characterText.className = 'character__text'; 
		}
	}
rendercharacters(); 
tabs();
}