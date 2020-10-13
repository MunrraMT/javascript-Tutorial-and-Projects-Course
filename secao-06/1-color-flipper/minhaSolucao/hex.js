const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// MINHA SOLUÇÃO
const btn = document.querySelector('#btn');
const textColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

document.addEventListener('click', (e) => {
	const clicked = e.target.tagName;

	if (clicked === 'BUTTON') {
		e.preventDefault();
		const newColor = newColorHex();

		textColor.textContent = '#' + newColor;
		bodyColor.setAttribute('style', `background-color: #${newColor};`);
	}
});

function newColorHex() {
	let newColor = [];
	for (let i = 0; i < 6; i++) {
		newColor.push(hex[rand(0, hex.length)]);
	}
	return newColor.join('');
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
