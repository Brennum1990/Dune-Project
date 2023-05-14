import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function planets() {
	const planetContainer = document.querySelector('.planet__container');
	const querySidebar = `*[_type == 'planets'] | order(name asc) {
		_id,
		name,
	}`;

	const planetName = document.querySelector('.sidebar__tab-buttons');
	const queryContent = `*[_type == 'planets'] | order(name asc) {
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const dune1 = await sanity.fetch(querySidebar); 
		console.log(dune1)

	function renderPlanets() {
		for (const planets of dune1) {
			// Creating elements
			const planetButton = document.createElement('button');
			
			planetButton.innerText = planets.name;
			planetButton.setAttribute('alt', `${planets.name}`);
			planetButton.setAttribute('type', 'tabs');

			// Hierarchy of planet details
			planetName.appendChild(planetButton);
	
			// Creating classnames
			planetButton.className = 'planet__button';
		}
	}
renderPlanets(); 
tabs();

	const dune2 = await sanity.fetch(queryContent); 
	console.log(dune2)

	function renderContent() {
		for (const planets of dune2) {
			const planetInfo = document.createElement('div');
			const planetImageFrame = document.createElement('div');
			const planetImage = document.createElement('img'); 
			const planetText = document.createElement('p');

			// Rendering elements 

			planetImage.src = planets.imageUrl;
			planetImage.setAttribute('alt', `${planets.name}`);
			planetText.innerText = planets.text; 

			planetContainer.appendChild(planetInfo);
				planetInfo.appendChild(planetImageFrame);
					planetImageFrame.appendChild(planetImage);
				planetInfo.appendChild(planetText);

			planetInfo.className = 'planet__info';
			planetImageFrame.className = 'planet__image-frame';
			planetImage.className = 'planet__image';
			planetText.className = 'planet__text'; 
		}
	}
renderContent(); 
tabs();
}