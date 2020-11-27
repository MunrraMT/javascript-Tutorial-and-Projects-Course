import getElement from './getElement.js';
import toggleLoading from './toggleLoading.js';
import getLocalStorage from './getLocalStorage.js';

const urlSingleDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=
${getLocalStorage('selectedDrink').id}`;

const loadingIcon = getElement('section.loading');
const drinkImg = getElement('img.drink-img');
const drinkName = getElement('h2.drink-name');
const drinkDisc = getElement('p.drink-desc');
const drinkIngredients = getElement('ul.drink-ingredients');

window.addEventListener('DOMContentLoaded', async () => {
	const data = await fetch(urlSingleDrink, { method: 'GET' });
	const response = await data.json();
	const apiJson = await response.drinks[0];

	drinkImg.src = apiJson.strDrinkThumb;
	drinkName.textContent = apiJson.strDrink;
	drinkDisc.textContent = apiJson.strInstructions;

	document.title = apiJson.strDrink;

	for (const item in apiJson) {
		if (/^strIngredient/.test(item) && apiJson[item]) {
			const li = document.createElement('li');
			const i = document.createElement('i');
			const text = document.createTextNode(apiJson[item]);

			i.classList.add('far');
			i.classList.add('fa-check-square');

			li.appendChild(i);
			li.appendChild(text);
			drinkIngredients.appendChild(li);
		}
	}

	toggleLoading(loadingIcon);
});
