import {sanity} from '../sanity.js';
import collapsible from './collapsible.js';

export default async function organizations() {
	const organizationContainer = document.querySelector('.organization');
	const query = `*[_type == 'organization'] | order(name asc) {
		_id,
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderOrganizations() {
		for (const organization of dune) {
			// Creating elements
			const organizationCard = document.createElement('div');
			const organizationButton = document.createElement('button');
			const organizationInfo = document.createElement('div');
			const organizationImageFrame = document.createElement('div');
			const organizationImage = document.createElement('img'); 
			const organizationText = document.createElement('p');
			
			// Rendering elements 
			organizationButton.innerText = organization.name;
			organizationImage.src = organization.imageUrl;
			organizationImage.setAttribute('alt', `${organization.name}`);
			organizationText.innerText = organization.text; 
		
			// Hierarchy of organization details
			organizationContainer.appendChild(organizationCard);
				organizationCard.appendChild(organizationButton);
				organizationCard.appendChild(organizationInfo);
					organizationInfo.appendChild(organizationImageFrame);
						organizationImageFrame.appendChild(organizationImage);
					organizationInfo.appendChild(organizationText);

			// Creating classnames
			organizationCard.className = 'organization__card';
			organizationButton.className = 'organization__button';
			organizationInfo.className = 'organization__info';
			organizationImageFrame.className = 'organization__image-frame';
			organizationImage.className = 'organization__image';
			organizationText.className = 'organization__text'; 
		}
	} 
	renderOrganizations();
	collapsible();
}