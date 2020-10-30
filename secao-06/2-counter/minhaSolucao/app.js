const contador = document.querySelector('#value');
contador.textContent = 0;

document.addEventListener('click', (e) => {
	const target = e.target;
	const clicked = target.textContent;

	console.log(target.textContent);

	if (target.tagName === 'BUTTON') {
		e.preventDefault();
		clicked === 'increase' && contador.textContent++;
		clicked === 'reset' && (contador.textContent = 0);
		clicked === 'decrease' && contador.textContent--;

		if (clicked === 'increase') return contador.textContent++;
	}

	contador.textContent < 0 && (contador.style.color = 'red');
	contador.textContent > 0 && (contador.style.color = 'green');
	Number(contador.textContent) === 0 &&
		(contador.style.color = 'var(--clr-grey-1)');
});
