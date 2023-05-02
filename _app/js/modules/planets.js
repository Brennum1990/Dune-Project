import {sanity} from '../sanity.js';

export default async function planets() {
	const planetContainer = document.querySelector('.planets');
	const duneCategory = `*[_type == 'planets'] | order(name asc) {
		...,

		preview {
			..., asset->
		}
	}`;
	
	const planets = await sanity.fetch(duneCategory); 

	console.log(planets);

	// const planetCard = document.createElement('div');
	// const planetText = document.createElement('p');
	
	// planetContainer.appendChild(planetCard);
	// planetCard.appendChild(planetText);

	// planetText.innerText = planets.preview.asset.name;


	// function createPlanetItemDOM(planet) {
	// 	return `
	// 	<div class="planets__image-box">
	// 		<img class="planets__image" src="${planet.preview.url}?w=800" alt="">
	// 	</div>`
	// }

	// function renderPlanets() {
	// 	for (const planet of planets) {
	// 		const planetItem = createPlanetItemDOM(planet);
	// 		planetContainer.appendChild(planetItem);
	// 	}
	// }
	// renderPlanets();
}