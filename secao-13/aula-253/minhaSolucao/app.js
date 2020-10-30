const h1 = document.querySelector('h1');
const div = document.createElement('div');
const btn = document.createElement('button');

btn.textContent = 'Show Text';

h1.insertAdjacentElement('afterend', btn);
btn.insertAdjacentElement('afterend', div);

btn.addEventListener('click', getText);

function getText() {
	const xhr = new XMLHttpRequest();
	const p = document.createElement('p');

	xhr.open('GET', './api/sample.txt');
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			p.textContent = xhr.responseText;
			div.appendChild(p);
		}
		if (xhr.readyState === 4 && xhr.status !== 200) {
			p.textContent = 'Falhou ao tentar ler o arquivo de texto';
			div.appendChild(p);
		}
	};
	xhr.send();
}
