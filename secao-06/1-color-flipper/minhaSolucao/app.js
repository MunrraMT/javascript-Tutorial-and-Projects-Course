const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

// MINHA SOLUÇÃO
const btn = document.querySelector('#btn');
const textColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

document.addEventListener('click', (e) => {
	const clicked = e.target.tagName;

	if (clicked === 'BUTTON') {
		e.preventDefault();
		const newColor = nextArrayItem(colors);

		textColor.textContent = newColor;
		bodyColor.setAttribute('style', `background-color: ${newColor};`);
	}
});

let contador = 0;
function nextArrayItem(arr) {
	if (contador === arr.length - 1) {
		contador = 0;
		return arr[contador];
	}
	contador++;
	return arr[contador];
}
