import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function house() {
	const houseContainer = document.querySelector('.house__container');
	const query = `*[_type == 'houses'] | order(name asc) {
		_id,
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderhouses() {
		for (const houses of dune) {
			// Creating elements
			const houseButton = document.createElement('button');
			const houseInfo = document.createElement('div');
			const houseImageFrame = document.createElement('div');
			const houseImage = document.createElement('img'); 
			const houseText = document.createElement('p');
			
			// Rendering elements 
			houseButton.innerText = houses.name;
			houseButton.setAttribute('alt', `${houses.name}`);
			houseButton.setAttribute('type', 'tabs');
			houseImage.src = houses.imageUrl;
			houseImage.setAttribute('alt', `${houses.name}`);
			houseText.innerText = houses.text; 
		
			// Hierarchy of house details
			houseContainer.appendChild(houseButton);
			houseContainer.appendChild(houseInfo);
				houseInfo.appendChild(houseImageFrame);
					houseImageFrame.appendChild(houseImage);
				houseInfo.appendChild(houseText);

			// Creating classnames
			houseButton.className = 'house__button';
			houseInfo.className = 'house__info';
			houseImageFrame.className = 'house__image-frame';
			houseImage.className = 'house__image';
			houseText.className = 'house__text'; 
		}
	}
renderhouses(); 
tabs();
}