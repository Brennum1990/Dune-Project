import {sanity} from '../sanity.js';
import collapsible from './collapsible.js';

export default async function planets() {
	const planetContainer = document.querySelector('.planet');
	const query = `*[_type == 'planets'] | order(name asc) {
		_id,
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderPlanets() {
		for (const planets of dune) {
			// Creating elements
			const planetCard = document.createElement('div');
			const planetButton = document.createElement('button');
			const planetInfo = document.createElement('div');
			const planetImageFrame = document.createElement('div');
			const planetImage = document.createElement('img'); 
			const planetText = document.createElement('p');
			
			// Rendering elements 
			planetButton.innerText = planets.name;
			planetImage.src = planets.imageUrl;
			planetImage.setAttribute('alt', `${planets.name}`);
			planetText.innerText = planets.text; 
		
			// Hierarchy of planet details
			planetContainer.appendChild(planetCard);
				planetCard.appendChild(planetButton);
				planetCard.appendChild(planetInfo);
					planetInfo.appendChild(planetImageFrame);
						planetImageFrame.appendChild(planetImage);
					planetInfo.appendChild(planetText);

			// Creating classnames
			planetCard.className = 'planet__card';
			planetButton.className = 'planet__button';
			planetInfo.className = 'planet__info';
			planetImageFrame.className = 'planet__image-frame';
			planetImage.className = 'planet__image';
			planetText.className = 'planet__text'; 
		}
	}
renderPlanets(); 
collapsible();
}