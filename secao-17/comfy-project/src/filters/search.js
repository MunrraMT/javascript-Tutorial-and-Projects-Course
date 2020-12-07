import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupSearch = (store) => {
	const form = getElement('.input-form');
	const nameInput = getElement('.search-input');

	form.addEventListener('input', () => {
		if (nameInput.value) {
			const value = nameInput.value;
			const newStore = store.filter((product) => {
				let { name } = product;

				name = name.toLowerCase();

				if (name.startsWith(value)) {
					return product;
				}
			});

			display(newStore, getElement('.products-container'));
			if (newStore.length < 1) {
				const product = getElement('.products-container');

				product.innerHTML =
					'<h3 class="filter-error">sorry, no products matched your search</h3>';
			}
		} else {
			display(store, getElement('.products-container'));
		}
	});
};

export default setupSearch;
