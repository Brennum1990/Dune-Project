import {sanity} from '../sanity.js';
import tabs from './vertical-tabs.js';

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
		console.log(media)

	function renderOnScreen() {
		for (const onscreen of media) {
			// Creating elements
			const onscreenCard = document.createElement('a');
			const onscreenTitle = document.createElement('h1');
			const onscreenInfo = document.createElement('div');
			const onscreenImageFrame = document.createElement('a');
			const onscreenImage = document.createElement('img'); 
			const onscreenText = document.createElement('p');
			const onscreenReleaseDate = document.createElement('p');
			const onscreenDirector = document.createElement('p');
			
			// Rendering elements 
			onscreenTitle.innerText = onscreen.name;
			onscreenImage.src = onscreen.imageUrl;
			onscreenImage.setAttribute('alt', `${onscreen.name}`);
			onscreenText.innerText = onscreen.text; 
			onscreenReleaseDate.innerText = onscreen.releaseDate;
			onscreenDirector.innerText = onscreen.director;
		
			// Hierarchy of onscreen details
			onscreenContainer.appendChild(onscreenCard);
				onscreenCard.appendChild(onscreenTitle);
				onscreenCard.appendChild(onscreenImageFrame);
					onscreenImageFrame.appendChild(onscreenImage);

			onscreenContainer.appendChild(onscreenInfo);
				onscreenInfo.appendChild(onscreenDirector);
				onscreenInfo.appendChild(onscreenReleaseDate);
				onscreenInfo.appendChild(onscreenText);
			
			// Creating classnames
			onscreenCard.className = 'onscreen__card';
			onscreenTitle.className = 'onscreen__title';
			onscreenDirector.className = 'onscreen__director';
			onscreenReleaseDate.className = 'onscreen__release-date';
			onscreenInfo.className = 'onscreen__info';
			onscreenImageFrame.className = 'onscreen__image-frame';
			onscreenImage.className = 'onscreen__image';
			onscreenText.className = 'onscreen__text';
		}
	}
renderOnScreen(); 
tabs();
}