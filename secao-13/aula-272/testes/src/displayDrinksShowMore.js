function displayDrinks(drinksContainer, arrData, more) {
	let count = 0;
	let limit = 6;

	if (!more) {
		drinksContainer.textContent = '';
	}

	if (more) {
		count = document.querySelectorAll('.cocktail').length;
		limit = document.querySelectorAll('.cocktail').length + 6;
	}

	for (let index = count; index < limit; index++) {
		const div = document.createElement('div');
		const a = document.createElement('a');
		const img = document.createElement('img');
		const h3 = document.createElement('h3');

		div.classList.add('cocktail');
		div.id = arrData[index].idDrink;
		a.href = './drink.html';
		img.src = arrData[index].strDrinkThumb;
		h3.textContent = arrData[index].strDrink;

		a.appendChild(img);
		a.appendChild(h3);
		div.appendChild(a);

		drinksContainer.appendChild(div);
	}

	if (limit < arrData.length) {
		if (!document.querySelector('.show-more-btn')) {
			const button = document.createElement('button');
			button.classList.add('show-more-btn');
			button.textContent = 'Show More';
			button.style.margin = 'auto';
			button.style.width = '50%';
			button.style.display = 'flex';
			button.style.justifyContent = 'center';

			document.querySelector('section.section.cocktails').appendChild(button);
		}
	}

	if (limit >= arrData.length) {
		document.querySelector(
			'section.section.cocktails'
		).lastElementChild.style.display = 'none';
	}
}

export default displayDrinks;
