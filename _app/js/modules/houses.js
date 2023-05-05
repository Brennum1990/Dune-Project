import {sanity} from '../sanity.js';
import collapsible from './collapsible.js';

export default async function houses() {
	const houseContainer = document.querySelector('.house');
	const query = `*[_type == 'houses'] | order(name asc) {
		_id,
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderHouses() {
		for (const houses of dune) {
			// Creating elements
			const houseCard = document.createElement('div');
			const houseButton = document.createElement('button');
			const houseInfo = document.createElement('div');
			const houseImageFrame = document.createElement('div');
			const houseImage = document.createElement('img'); 
			const houseText = document.createElement('p');
			
			// Rendering elements 
			houseButton.innerText = houses.name;
			houseImage.src = houses.imageUrl;
			houseImage.setAttribute('alt', `${houses.name}`);
			houseText.innerText = houses.text; 
		
			// Hierarchy of house details
			houseContainer.appendChild(houseCard);
				houseCard.appendChild(houseButton);
				houseCard.appendChild(houseInfo);
					houseInfo.appendChild(houseImageFrame);
						houseImageFrame.appendChild(houseImage);
					houseInfo.appendChild(houseText);

			// Creating classnames
			houseCard.className = 'house__card';
			houseButton.className = 'house__button';
			houseInfo.className = 'house__info';
			houseImageFrame.className = 'house__image-frame';
			houseImage.className = 'house__image';
			houseText.className = 'house__text'; 
		}
	}
renderHouses(); 
collapsible(); 
}