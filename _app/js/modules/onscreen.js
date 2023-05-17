import {sanity} from '../sanity.js';
import collapsible from './vertical-tabs.js';

export default async function onScreen() {
	const onscreenContainer = document.querySelector('.media__content');
	const query = `*[_type == 'onscreen'] | order(releaseDate asc) {
		_id,
		name,
		releaseDate,
		"imageUrl": image.asset->url,
		text,
		category,
	}`;
	
	const media = await sanity.fetch(query); 
		console.log(media)

	function renderOnScreen() {
		for (const onscreen of media) {
			// Creating elements
			const onscreenCard = document.createElement('div');
			const onscreenTitle = document.createElement('h1');
			const onscreenInfo = document.createElement('div');
			const onscreenImageFrame = document.createElement('div');
			const onscreenImage = document.createElement('img'); 
			const onscreenText = document.createElement('p');
			const onscreenReleaseDate = document.createElement('p');
			
			// Rendering elements 
			onscreenTitle.innerText = onscreen.name;
			onscreenImage.src = onscreen.imageUrl;
			onscreenImage.setAttribute('alt', `${onscreen.name}`);
			onscreenText.innerText = onscreen.text; 
			onscreenReleaseDate.innerText = onscreen.releaseDate;
		
			// Hierarchy of onscreen details
			onscreenContainer.appendChild(onscreenCard);
			onscreenCard.appendChild(onscreenTitle);
			onscreenCard.appendChild(onscreenInfo);
				onscreenInfo.appendChild(onscreenImageFrame);
					onscreenImageFrame.appendChild(onscreenImage);
				onscreenInfo.appendChild(onscreenText);
			
			// Creating classnames
			onscreenCard.className = 'onscreen__card';
			onscreenTitle.className = 'onscreen__button';
			onscreenInfo.className = 'onscreen__info';
			onscreenImageFrame.className = 'onscreen__image-frame';
			onscreenImage.className = 'onscreen__image';
			onscreenText.className = 'onscreen__text';
		}
	}
renderOnScreen(); 
collapsible();
}