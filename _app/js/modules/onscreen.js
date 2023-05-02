import {sanity} from '../sanity.js';

export default async function characters() {
	const onScreenContainer = `*[_type == 'onscreen'] | order(name asc)`;
	const onScreen = await sanity.fetch(onScreenContainer); 

	console.log(onScreen);
}