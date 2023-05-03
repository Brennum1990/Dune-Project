import {sanity} from '../sanity.js';

export default async function planets() {
	const planetContainer = document.querySelector('.planets');
	const query = `*[_type == 'planets'] | order(name asc) {
		_id,
		name,
		TextField,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderPlanets() {
		for (const planets of dune) {
			// Creating elements
			const planetCard = document.createElement('div');
			const planetImageFrame = document.createElement('div');
			const planetImage = document.createElement('img'); 
			const planetText = document.createElement('p');
			
			// Rendering elements 
			planetCard.innerText = planets.name;
			// planetImage.src = `${planets.image.asset}`;
			planetImage.setAttribute('alt', `${planets.name}`);
			planetText.innerText = planets.TextField[0].children[0].text; 
		
			// Hierarchy of planet details
			planetContainer.appendChild(planetCard);
				planetCard.appendChild(planetImageFrame);
					planetImageFrame.appendChild(planetImage);
				planetCard.appendChild(planetText);

			// Creating classnames
			planetCard.className = 'planets__card';
			planetImageFrame.className = 'planets__image-frame';
			planetImage.className = 'planets__image';
			planetText.className = 'planets__text'; 
		}
	}
renderPlanets(); 
}