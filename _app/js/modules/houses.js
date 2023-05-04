import {sanity} from '../sanity.js';

export default async function houses() {
	const houseContainer = document.querySelector('.house');
	const query = `*[_type == 'houses'] | order(name asc) {
		_id,
		name,
		text,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderHouses() {
		for (const houses of dune) {
			// Creating elements
			const houseCard = document.createElement('div');
			const houseTitle = document.createElement('h1');
			const houseImageFrame = document.createElement('div');
			const houseImage = document.createElement('img'); 
			const houseText = document.createElement('p');
			
			// Rendering elements 
			houseTitle.innerText = houses.name;
			// houseImage.src = `${houses.image.asset}`;
			houseImage.setAttribute('alt', `${houses.name}`);
			houseText.innerText = houses.text; 
		
			// Hierarchy of house details
			houseContainer.appendChild(houseCard);
				houseCard.appendChild(houseTitle);
				houseCard.appendChild(houseImageFrame);
					houseImageFrame.appendChild(houseImage);
				houseCard.appendChild(houseText);

			// Creating classnames
			houseCard.className = 'house__card';
			houseTitle.className = 'house__title';
			houseImageFrame.className = 'house__image-frame';
			houseImage.className = 'house__image';
			houseText.className = 'house__text'; 
		}
	}
renderHouses(); 
}