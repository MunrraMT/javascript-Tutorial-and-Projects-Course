function presentDrinks(title, state) {
	title.textContent = '';
	if (state) {
		title.textContent = 'sorry, drink not found';
	}
}

export default presentDrinks;
