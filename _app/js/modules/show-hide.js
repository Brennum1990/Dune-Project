export default function showHide() {

	// Planets
	const planetContainer = document.querySelector('.sidebar__tab-buttons');
	const planetBtn = document.querySelector('.planet'); 
	
	function showPlanets() {
		if (planetContainer.style.display === "none") {
			planetContainer.style.display = "block";
		} else {
		  planetContainer.style.display = "none";
		} 
	}
	planetBtn.addEventListener('click', showPlanets);

	// Characters 
	// const characterContainer = document.querySelector('.character__container');
	// const characterBtn = document.querySelector('.character'); 
	
	// function showCharacters() {
	// 	if (characterContainer.style.display === "none") {
	// 		characterContainer.style.display = "block";
	// 	} else {
	// 	  characterContainer.style.display = "none";
	// 	} 
	// }
	// characterBtn.addEventListener('click', showCharacters);

	// // Houses 
	// const houseContainer = document.querySelector('.house__container');
	// const houseBtn = document.querySelector('.house'); 
	
	// function showHouses() {
	// 	if (houseContainer.style.display === "none") {
	// 		houseContainer.style.display = "block";
	// 	} else {
	// 	  houseContainer.style.display = "none";
	// 	} 
	// }
	// houseBtn.addEventListener('click', showHouses);

	// // Organizations & Groups 
	// const groupContainer = document.querySelector('.organization__container');
	// const groupBtn = document.querySelector('.organization'); 
	
	// function showGroups() {
	// 	if (groupContainer.style.display === "none") {
	// 		groupContainer.style.display = "block";
	// 	} else {
	// 	  groupContainer.style.display = "none";
	// 	} 
	// }
	// groupBtn.addEventListener('click', showGroups);
}