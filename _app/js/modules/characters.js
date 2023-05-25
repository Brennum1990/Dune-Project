import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

export default async function characters() {
	const characterContainer = document.querySelector('.content__characters');
	const querySidebar = `*[_type == 'characters'] | order(name asc) {
		_id,
		name,
	}`;

	const characterSidebar = document.querySelector('.sidebar__tab-buttons2');
	const queryContent = `*[_type == 'characters'] | order(name asc) {
		name,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const sidebarContent = await sanity.fetch(querySidebar); 
		console.log(sidebarContent)

	function renderSidebar() {
		for (const characters of sidebarContent) {
			// Creating elements
			const characterButton = document.createElement('button');
			
			// Rendering elements 
			characterButton.innerText = characters.name;
			characterButton.setAttribute('alt', `${characters.name}`);
			characterButton.setAttribute('type', 'tabs');

			// Hierarchy of character details
			characterSidebar.appendChild(characterButton);
	
			// Creating classnames
			characterButton.className = 'sidebar__character-buttons';
		}
	}
renderSidebar(); 
tabs();

	const mainContent = await sanity.fetch(queryContent); 
	console.log(mainContent)

	function renderContent() {
		for (const characters of mainContent) {
			const characterName = document.createElement('h1');
			const characterInfo = document.createElement('div');
			const characterImageFrame = document.createElement('div');
			const characterImage = document.createElement('img'); 
			const characterText = document.createElement('p');

			characterName.innerText = characters.name; 
			characterImage.src = characters.imageUrl;
			characterImage.setAttribute('alt', `${characters.name}`);
			characterText.innerText = characters.text; 

			characterContainer.appendChild(characterInfo);
				characterInfo.appendChild(characterName);
				characterInfo.appendChild(characterImageFrame);
					characterImageFrame.appendChild(characterImage);
				characterInfo.appendChild(characterText);

			characterName.className = 'content__character-name';
			characterInfo.className = 'content__character-info';
			characterImageFrame.className = 'content__character-imgbox';
			characterImage.className = 'content__character-img';
			characterText.className = 'content__character-text'; 
		}
	}
renderContent(); 
tabs();
}