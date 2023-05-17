export default function showHide() {

	// Planets
	const planetContainer = document.querySelector('.sidebar__tab-buttons1');
	const planetBtn = document.querySelector('.sidebar__planets'); 
	
	function showPlanets() {
		if (planetContainer.style.display === "none") {
			planetContainer.style.display = "block";
		} else {
		  planetContainer.style.display = "none";
		} 
	}
	planetBtn.addEventListener('click', showPlanets);

	// Characters 
	const characterContainer = document.querySelector('.sidebar__tab-buttons2');
	const characterBtn = document.querySelector('.sidebar__characters'); 
	
	function showCharacters() {
		if (characterContainer.style.display === "none") {
			characterContainer.style.display = "block";
		} else {
		  characterContainer.style.display = "none";
		} 
	}
	characterBtn.addEventListener('click', showCharacters);
	characterBtn.click();

	// Houses 
	const houseContainer = document.querySelector('.sidebar__tab-buttons3');
	const houseBtn = document.querySelector('.sidebar__houses'); 
	
	function showHouses() {
		if (houseContainer.style.display === "none") {
			houseContainer.style.display = "block";
		} else {
		  houseContainer.style.display = "none";
		} 
	}
	houseBtn.addEventListener('click', showHouses);
	houseBtn.click();

	// Organizations & Groups 
	const groupContainer = document.querySelector('.sidebar__tab-buttons4');
	const groupBtn = document.querySelector('.sidebar__organizations'); 
	
	function showGroups() {
		if (groupContainer.style.display === "none") {
			groupContainer.style.display = "block";
		} else {
		  groupContainer.style.display = "none";
		} 
	}
	groupBtn.addEventListener('click', showGroups);
	groupBtn.click();
}