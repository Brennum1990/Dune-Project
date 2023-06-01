import {sanity} from '../sanity.js';
import showMedia from './show-media.js';

export default async function onScreen() {
	const onscreenContainer = document.querySelector('.onscreen__content');
	const onscreenQuery = `*[_type == 'onscreen'] | order(releaseDate asc) {
		_id,
		name,
		director,
		releaseDate,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;

	const media = await sanity.fetch(onscreenQuery); 

	function renderOnScreen() {
		for (const onscreen of media) {
			// Creating elements
			const onscreenCard = document.createElement('a');
			const onscreenImage = document.createElement('img');
			 
			const onscreenInfo = document.createElement('div');
			const onscreenDetails = document.createElement('div');
			const onscreenTitle = document.createElement('h1');
			const onscreenText = document.createElement('p');
			const onscreenReleaseDate = document.createElement('p');
			const onscreenDirector = document.createElement('p');
			
			// Rendering elements 
			onscreenTitle.innerText = onscreen.name;
			onscreenImage.src = onscreen.imageUrl;
			onscreenCard.setAttribute('alt', `${onscreen.name}`);
			onscreenText.innerText = onscreen.text; 
			onscreenReleaseDate.innerText = onscreen.releaseDate;
			onscreenDirector.innerText = onscreen.director;
		
			// Hierarchy of onscreen details
			onscreenContainer.appendChild(onscreenCard);
				onscreenCard.appendChild(onscreenImage);

			onscreenContainer.appendChild(onscreenInfo);
				onscreenInfo.appendChild(onscreenDetails);
					onscreenDetails.appendChild(onscreenTitle);
					onscreenDetails.appendChild(onscreenDirector);
					onscreenDetails.appendChild(onscreenReleaseDate);
				onscreenInfo.appendChild(onscreenText);
			
			// Creating classnames
			onscreenCard.className = 'onscreen__card';
			onscreenTitle.className = 'onscreen__title';
			onscreenDirector.className = 'onscreen__director';
			onscreenReleaseDate.className = 'onscreen__release-date';
			onscreenInfo.className = 'onscreen__info';
			onscreenDetails.className = 'onscreen__details';
			onscreenImage.className = 'onscreen__image';
			onscreenText.className = 'onscreen__text';
		}
	}
renderOnScreen(); 
showMedia();
}