import {sanity} from '../sanity.js';

export default async function categories() {
	const categoryContainer = `*[_type == "category"] {
		...,
	"count": count(*[_type == "post" && references(^._id)])
	} | order(count desc) [0...10]`;

	const category = await sanity.fetch(categoryContainer); 
		console.log(category);
}