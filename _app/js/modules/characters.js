import {sanity} from '../sanity.js';

export default async function characters() {
	const characterContainer = document.querySelector('.characters');
	const query = `*[_type == 'characters'] | order(name asc) {
		_id,
		name,
		TextField,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function rendercharacters() {
		for (const characters of dune) {
			// Creating elements
			const characterCard = document.createElement('div');
			const characterImageFrame = document.createElement('div');
			const characterImage = document.createElement('img'); 
			const characterText = document.createElement('p');
			
			// Rendering elements 
			characterCard.innerText = characters.name;
			// characterImage.src = `${characters.image.asset}`;
			characterImage.setAttribute('alt', `${characters.name}`);
			characterText.innerText = characters.TextField[0].children[0].text; 
		
			// Hierarchy of character details
			characterContainer.appendChild(characterCard);
				characterCard.appendChild(characterImageFrame);
					characterImageFrame.appendChild(characterImage);
				characterCard.appendChild(characterText);

			// Creating classnames
			characterCard.className = 'characters__card';
			characterImageFrame.className = 'characters__image-frame';
			characterImage.className = 'characters__image';
			characterText.className = 'characters__text'; 
		}
	}
rendercharacters(); 
}