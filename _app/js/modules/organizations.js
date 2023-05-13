import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function organization() {
	const organizationContainer = document.querySelector('.organization__container');
	const query = `*[_type == 'organization'] | order(name asc) {
		_id,
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderorganizations() {
		for (const organization of dune) {
			// Creating elements
			const organizationButton = document.createElement('button');
			const organizationInfo = document.createElement('div');
			const organizationImageFrame = document.createElement('div');
			const organizationImage = document.createElement('img'); 
			const organizationText = document.createElement('p');
			
			// Rendering elements 
			organizationButton.innerText = organization.name;
			organizationButton.setAttribute('alt', `${organization.name}`);
			organizationButton.setAttribute('type', 'tabs');
			organizationImage.src = organization.imageUrl;
			organizationImage.setAttribute('alt', `${organization.name}`);
			organizationText.innerText = organization.text; 
		
			// Hierarchy of organization details
			organizationContainer.appendChild(organizationButton);
			organizationContainer.appendChild(organizationInfo);
				organizationInfo.appendChild(organizationImageFrame);
					organizationImageFrame.appendChild(organizationImage);
				organizationInfo.appendChild(organizationText);

			// Creating classnames
			organizationButton.className = 'organization__button';
			organizationInfo.className = 'organization__info';
			organizationImageFrame.className = 'organization__image-frame';
			organizationImage.className = 'organization__image';
			organizationText.className = 'organization__text'; 
		}
	}
renderorganizations(); 
tabs();
}