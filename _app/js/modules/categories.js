import {sanity} from '../sanity.js';

export default async function categories() {
	const categoryContainer = `*[_type == 'category'] | order(name asc)`;
	const category = await sanity.fetch(categoryContainer); 

	console.log(category);
}