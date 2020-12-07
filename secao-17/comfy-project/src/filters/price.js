import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
	const priceInput = getElement('.price-filter');
	const priceValue = getElement('.price-value');

	// setup filter
	let maxPrice = store.map((product) => product.price);

	maxPrice = Math.max(...maxPrice);
	maxPrice = Math.ceil(maxPrice / 100);
	priceInput.value = maxPrice;
	priceInput.max = maxPrice;
	priceInput.min = 0;
	priceValue.textContent = `Value: $${maxPrice}`;

	priceInput.addEventListener('input', () => {
		const value = Number(priceInput.value);
		let newStore = store.filter((product) => product.price / 100 <= value);

		priceValue.textContent = `Value: $${value}`;

		display(newStore, getElement('.products-container'));

		if (newStore.length < 1) {
			const product = getElement('.products-container');

			product.innerHTML =
				'<h3 class="filter-error">sorry, no products matched your search</h3>';
		}
	});
};

export default setupPrice;
