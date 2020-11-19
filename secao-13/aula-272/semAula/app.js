import getElement from './src/getElement.js';
import getData from './src/fetchDrinks.js';
import toggleLoading from './src/toggleLoading.js';
import displayDrinks from './src/displayDrinks.js';
import searchForm from './src/searchForm.js';
import presentDrinks from './src/presentDrinks.js';
import getLocalStorage from './src/getLocalStorage.js';

const url =
	'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
const form = getElement('.search-form');
const input = getElement('.search-form input');
const loadingIcon = getElement('article.loading');
const title = getElement('h2.title');
const sectionCenter = getElement('div.section-center');

window.addEventListener('DOMContentLoaded', async () => {
	const data = await getData(url);

	displayDrinks(sectionCenter, getLocalStorage('drinks').drinks);

	if (!data.ok) {
		serverNotFound();
	}

	toggleLoading(loadingIcon);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
});

input.addEventListener('input', (e) => {
	displayDrinks(sectionCenter, searchForm(input));
	presentDrinks(title);

	if (sectionCenter.textContent === '') {
		presentDrinks(title, true);
	}
});

document.addEventListener('click', (e) => {
	if (e.target.parentElement.parentElement.className === 'cocktail') {
		const selectId = { id: e.target.parentElement.parentElement.id };
		localStorage.setItem('selectedDrink', JSON.stringify(selectId));
	}
});

function serverNotFound() {
	title.textContent = 'sorry, server not found';
	sectionCenter.textContent = '';
}
