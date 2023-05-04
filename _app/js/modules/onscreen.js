import {sanity} from '../sanity.js';

export default async function onScreen() {
	const onscreenContainer = document.querySelector('.onscreen');
	const query = `*[_type == 'onscreen'] | order(releaseDate asc) {
		_id,
		name,
		releaseDate,
		text,
		category,
	}`;
	
	// 	"imageUrl": image.asset->url

	const media = await sanity.fetch(query); 
		console.log(media)

	function renderOnScreen() {
		for (const onscreen of media) {
			// Creating elements
			const onscreenCard = document.createElement('div');
			const onscreenTitle = document.createElement('h1');
			const onscreenImageFrame = document.createElement('div');
			const onscreenImage = document.createElement('img'); 
			const onscreenText = document.createElement('p');
			const onscreenReleaseDate = document.createElement('p');
			
			// Rendering elements 
			onscreenTitle.innerText = onscreen.name;
			// onscreenImage.src = `${onscreen.image.asset}`;
			onscreenImage.setAttribute('alt', `${onscreen.name}`);
			onscreenText.innerText = onscreen.text; 
			onscreenReleaseDate.innerText = onscreen.releaseDate;
		
			// Hierarchy of onscreen details
			onscreenContainer.appendChild(onscreenCard);
				onscreenCard.appendChild(onscreenTitle);
				onscreenCard.appendChild(onscreenReleaseDate);
				onscreenCard.appendChild(onscreenImageFrame);
					onscreenImageFrame.appendChild(onscreenImage);
				onscreenCard.appendChild(onscreenText);
				

			// Creating classnames
			onscreenCard.className = 'onscreen__card';
			onscreenTitle.className = 'onscreen__title';
			onscreenImageFrame.className = 'onscreen__image-frame';
			onscreenImage.className = 'onscreen__image';
			onscreenText.className = 'onscreen__text'; 
			onscreenReleaseDate.className = 'onscreen__release-date'; 
		}
	}
renderOnScreen(); 
}