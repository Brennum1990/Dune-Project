import {sanity} from '../sanity.js';

export default async function organizations() {
	const organizationContainer = document.querySelector('.organization');
	const query = `*[_type == 'organization'] | order(name asc) {
		_id,
		name,
		text,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const dune = await sanity.fetch(query); 
		console.log(dune)

	function renderOrganizations() {
		for (const organization of dune) {
			// Creating elements
			const organizationCard = document.createElement('div');
			const organizationTitle = document.createElement('h1');
			const organizationImageFrame = document.createElement('div');
			const organizationImage = document.createElement('img'); 
			const organizationText = document.createElement('p');
			
			// Rendering elements 
			organizationTitle.innerText = organization.name;
			// organizationImage.src = `${organization.image.asset}`;
			organizationImage.setAttribute('alt', `${organization.name}`);
			organizationText.innerText = organization.text; 
		
			// Hierarchy of organization details
			organizationContainer.appendChild(organizationCard);
			organizationCard.appendChild(organizationTitle);
				organizationCard.appendChild(organizationImageFrame);
					organizationImageFrame.appendChild(organizationImage);
				organizationCard.appendChild(organizationText);

			// Creating classnames
			organizationCard.className = 'organization__card';
			organizationTitle.className = 'organization__title';
			organizationImageFrame.className = 'organization__image-frame';
			organizationImage.className = 'organization__image';
			organizationText.className = 'organization__text'; 
		}
	} 
	renderOrganizations();
}