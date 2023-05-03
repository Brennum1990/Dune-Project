import {sanity} from '../sanity.js';

export default async function Organization() {
	const planetContainer = document.querySelector('.planets');
	const duneCategory = `*[_type == 'organization'] {
		name,
		image,
		category,
		TextField,
	}`;
	
	const planets = await sanity.fetch(duneCategory);
}