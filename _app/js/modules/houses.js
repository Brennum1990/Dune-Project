import {sanity} from '../sanity.js';

export default async function houses() {
	const houseContainer = document.querySelector('.houses');
	const query = `*[_type == 'houses'] | order(name asc) {
		_id,
		name,
		TextField,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderHouses() {
		for (const houses of dune) {
			// Creating elements
			const houseCard = document.createElement('div');
			const houseImageFrame = document.createElement('div');
			const houseImage = document.createElement('img'); 
			const houseText = document.createElement('p');
			
			// Rendering elements 
			houseCard.innerText = houses.name;
			// houseImage.src = `${houses.image.asset}`;
			houseImage.setAttribute('alt', `${houses.name}`);
			houseText.innerText = houses.TextField[0].children[0].text; 
		
			// Hierarchy of house details
			houseContainer.appendChild(houseCard);
				houseCard.appendChild(houseImageFrame);
					houseImageFrame.appendChild(houseImage);
				houseCard.appendChild(houseText);

			// Creating classnames
			houseCard.className = 'houses__card';
			houseImageFrame.className = 'houses__image-frame';
			houseImage.className = 'houses__image';
			houseText.className = 'houses__text'; 
		}
	}
renderHouses(); 
}