import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function houses() {
	const houseContainer = document.querySelector('.content__houses');
	const querySidebar = `*[_type == 'houses'] | order(name asc) {
		_id,
		name,
	}`;

	const houseSidebar = document.querySelector('.sidebar__tab-buttons3');
	const queryContent = `*[_type == 'houses'] | order(name asc) {
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const sidebarContent = await sanity.fetch(querySidebar); 
		console.log(sidebarContent)

	function renderSidebar() {
		for (const houses of sidebarContent) {
			// Creating elements
			const houseButton = document.createElement('button');
			
			// Rendering elements 
			houseButton.innerText = houses.name;
			houseButton.setAttribute('alt', `${houses.name}`);
			houseButton.setAttribute('type', 'tabs');

			// Hierarchy of house details
			houseSidebar.appendChild(houseButton);
	
			// Creating classnames
			houseButton.className = 'sidebar__house-buttons';
		}
	}
renderSidebar(); 
tabs();

	const mainContent = await sanity.fetch(queryContent); 
	console.log(mainContent)

	function renderContent() {
		for (const houses of mainContent) {
			const houseName = document.createElement('h1');
			const houseInfo = document.createElement('div');
			const houseImageFrame = document.createElement('div');
			const houseImage = document.createElement('img'); 
			const houseText = document.createElement('p');

			houseName.innerText = houses.name; 
			houseImage.src = houses.imageUrl;
			houseImage.setAttribute('alt', `${houses.name}`);
			houseText.innerText = houses.text; 

			houseContainer.appendChild(houseInfo);
				houseInfo.appendChild(houseName);
				houseInfo.appendChild(houseImageFrame);
					houseImageFrame.appendChild(houseImage);
				houseInfo.appendChild(houseText);

			houseName.className = 'content__house-name';
			houseInfo.className = 'content__house-info';
			houseImageFrame.className = 'content__house-imgbox';
			houseImage.className = 'content__house-img';
			houseText.className = 'content__house-text'; 
		}
	}
renderContent(); 
tabs();
}