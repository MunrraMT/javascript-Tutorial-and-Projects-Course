const h1 = document.querySelector('h1');
const article = document.createElement('article');
const btn = document.createElement('button');

btn.textContent = 'Show Peoples';

h1.insertAdjacentElement('afterend', article);
article.appendChild(btn);

btn.addEventListener('click', getData);

function getData() {
	const xhr = new XMLHttpRequest();

	xhr.responseType = 'json';
	xhr.open('GET', './api/people.json');
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const div = document.createElement('div');
			Array.from(xhr.response).forEach((el) => {
				const p = document.createElement('p');
				p.textContent = el.name;
				div.appendChild(p);
				article.appendChild(div);
			});
		}

		if (xhr.readyState === 4 && xhr.status !== 200) {
			const p = document.createElement('p');
			p.textContent = 'Falhou ao tentar ler o arquivo JSON';
			div.appendChild(p);
		}
	};
	xhr.send();
}
