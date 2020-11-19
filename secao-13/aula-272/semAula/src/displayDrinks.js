function displayDrinks(drinksContainer, arrData) {
	drinksContainer.textContent = '';

	arrData.forEach((item) => {
		const div = document.createElement('div');
		const a = document.createElement('a');
		const img = document.createElement('img');
		const h3 = document.createElement('h3');

		div.classList.add('cocktail');
		div.id = item.idDrink;
		a.href = './drink.html';
		img.src = item.strDrinkThumb;
		h3.textContent = item.strDrink;

		a.appendChild(img);
		a.appendChild(h3);
		div.appendChild(a);
		drinksContainer.appendChild(div);
	});
}

export default displayDrinks;
