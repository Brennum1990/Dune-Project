import {sanity} from '../sanity.js';

export default async function planets() {
	const planetContainer = document.querySelector('.planet');
	const query = `*[_type == 'planets'] | order(name asc) {
		_id,
		name,
		text,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderPlanets() {
		for (const planets of dune) {
			// Creating elements
			const planetCard = document.createElement('div');
			const planetTitle = document.createElement('h1');
			const planetImageFrame = document.createElement('div');
			const planetImage = document.createElement('img'); 
			const planetText = document.createElement('p');
			
			// Rendering elements 
			planetTitle.innerText = planets.name;
			// planetImage.src = `${planets.image.asset}`;
			planetImage.setAttribute('alt', `${planets.name}`);
			planetText.innerText = planets.text; 
		
			// Hierarchy of planet details
			planetContainer.appendChild(planetCard);
				planetCard.appendChild(planetTitle);
				planetCard.appendChild(planetImageFrame);
					planetImageFrame.appendChild(planetImage);
				planetCard.appendChild(planetText);

			// Creating classnames
			planetCard.className = 'planet__card';
			planetTitle.className = 'planet__title';
			planetImageFrame.className = 'planet__image-frame';
			planetImage.className = 'planet__image';
			planetText.className = 'planet__text'; 
		}
	}
renderPlanets(); 
}