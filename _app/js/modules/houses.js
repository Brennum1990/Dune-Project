import {sanity} from '../sanity.js';

export default async function houses() {
	const housesContainer = `*[_type == 'houses'] | order(name asc)`;
	const houses = await sanity.fetch(housesContainer); 

	console.log(houses);
}