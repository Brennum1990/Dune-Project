import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function organizations() {
	const organizationContainer = document.querySelector('.content__organizations');
	const querySidebar = `*[_type == 'organization'] | order(name asc) {
		_id,
		name,
	}`;

	const organizationSidebar = document.querySelector('.sidebar__tab-buttons4');
	const queryContent = `*[_type == 'organization'] | order(name asc) {
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const sidebarContent = await sanity.fetch(querySidebar); 
		console.log(sidebarContent)

	function renderSidebar() {
		for (const organization of sidebarContent) {
			// Creating elements
			const organizationButton = document.createElement('button');
			
			// Rendering elements 
			organizationButton.innerText = organization.name;
			organizationButton.setAttribute('alt', `${organization.name}`);
			organizationButton.setAttribute('type', 'tabs');

			// Hierarchy of organization details
			organizationSidebar.appendChild(organizationButton);
	
			// Creating classnames
			organizationButton.className = 'sidebar__organization-buttons';
		}
	}
renderSidebar(); 
tabs();

	const mainContent = await sanity.fetch(queryContent); 
		console.log(mainContent)

	function renderContent() {
		for (const organization of mainContent) {
			const organizationName = document.createElement('h1');
			const organizationInfo = document.createElement('div');
			const organizationImageFrame = document.createElement('div');
			const organizationImage = document.createElement('img'); 
			const organizationText = document.createElement('p');

			organizationName.innerText = organization.name; 
			organizationImage.src = organization.imageUrl;
			organizationImage.setAttribute('alt', `${organization.name}`);
			organizationText.innerText = organization.text; 

			organizationContainer.appendChild(organizationInfo);
				organizationInfo.appendChild(organizationName);
				organizationInfo.appendChild(organizationImageFrame);
					organizationImageFrame.appendChild(organizationImage);
				organizationInfo.appendChild(organizationText);

			organizationName.className = 'content__organization-name';
			organizationInfo.className = 'content__organization-info';
			organizationImageFrame.className = 'content__organization-imgbox';
			organizationImage.className = 'content__organization-img';
			organizationText.className = 'content__organization-text'; 
		}
	}
renderContent(); 
tabs();
}