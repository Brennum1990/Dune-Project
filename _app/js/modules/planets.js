import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function planets() {
	const planetContainer = document.querySelector('.content__planets');
	const querySidebar = `*[_type == 'planets'] | order(name asc) {
		_id,
		name,
	}`;

	const planetSidebar = document.querySelector('.sidebar__tab-buttons1');
	const queryContent = `*[_type == 'planets'] | order(name asc) {
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const sidebarContent = await sanity.fetch(querySidebar); 
		console.log(sidebarContent)

	function renderSidebar() {
		for (const planets of sidebarContent) {
			// Creating elements
			const planetButton = document.createElement('button');
			
			// Rendering elements 
			planetButton.innerText = planets.name;
			planetButton.setAttribute('alt', `${planets.name}`);
			planetButton.setAttribute('type', 'tabs');

			// Hierarchy of planet details
			planetSidebar.appendChild(planetButton);
	
			// Creating classnames
			planetButton.className = 'sidebar__planet-buttons';
		}
	}
renderSidebar(); 
tabs();

	const mainContent = await sanity.fetch(queryContent); 
	console.log(mainContent)

	function renderContent() {
		for (const planets of mainContent) {
			const planetName = document.createElement('h1');
			const planetInfo = document.createElement('div');
			const planetImageFrame = document.createElement('div');
			const planetImage = document.createElement('img'); 
			const planetText = document.createElement('p');

			planetName.innerText = planets.name; 
			planetImage.src = planets.imageUrl;
			planetImage.setAttribute('alt', `${planets.name}`);
			planetText.innerText = planets.text; 

			planetContainer.appendChild(planetInfo);
				planetInfo.appendChild(planetName);
				planetInfo.appendChild(planetImageFrame);
					planetImageFrame.appendChild(planetImage);
				planetInfo.appendChild(planetText);

			planetName.className = 'content__planet-name';
			planetInfo.className = 'content__planet-info';
			planetImageFrame.className = 'content__planet-imgbox';
			planetImage.className = 'content__planet-img';
			planetText.className = 'content__planet-text'; 
		}
	}
renderContent(); 
tabs();
}