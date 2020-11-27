import getElement from './src/getElement.js';
import getData from './src/fetchDrinks.js';
import toggleLoading from './src/toggleLoading.js';
import displayDrinks from './src/displayDrinks.js';
import searchForm from './src/searchForm.js';
import presentDrinks from './src/presentDrinks.js';
import getLocalStorage from './src/getLocalStorage.js';
import setActivePage from './src/setActivePage.js';
import getActivePage from './src/getActivePage.js';
import displayDrinksShowMore from './src/displayDrinksShowMore.js';

const url = './apiTeste.json';
const form = getElement('.search-form');
const input = getElement('.search-form input');
const loadingIcon = getElement('article.loading');
const title = getElement('h2.title');
const sectionCenter = getElement('div.section-center');

window.addEventListener('DOMContentLoaded', async () => {
	setActivePage();
	getActivePage();
	const data = await getData(url);

	if (document.querySelector('nav.navbar a.active').textContent === 'Base') {
		localStorage.setItem('activePage', JSON.stringify('Base'));
		displayDrinks(sectionCenter, getLocalStorage('drinks').drinks);
	}

	if (
		document.querySelector('nav.navbar a.active').textContent === 'Show More'
	) {
		displayDrinksShowMore(
			sectionCenter,
			getLocalStorage('drinks').drinks,
			false,
			0,
			6
		);

		document.querySelector('.show-more-btn').addEventListener('click', () => {
			displayDrinksShowMore(
				sectionCenter,
				getLocalStorage('drinks').drinks,
				true
			);
		});
	}

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
