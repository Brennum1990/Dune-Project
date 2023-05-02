import {sanity} from '../sanity.js';

export default async function characters() {
	const characterContainer = `*[_type == 'characters'] | order(name asc)`;
	const characters = await sanity.fetch(characterContainer); 

	console.log(characters);
}