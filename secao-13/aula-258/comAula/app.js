const btn = document.querySelector('button.btn');
const content = document.querySelector('p.content');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
	getData(url);
});

function getData(url) {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.send();

	xhr.responseType = 'json';
	content.textContent = '';
	content.appendChild(addSVG('./img/spin-1s-200px.svg'));
	content.appendChild(createP('Loading...'));

	xhr.onreadystatechange = () => {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 200) {
			console.log({ status: xhr.status, text: xhr.statusText });
			return (content.textContent =
				'Mensagem não pode ser mostrada, tente novamente mais tarde, obrigado!');
		}

		const { value: joke } = xhr.response;
		content.textContent = joke;
	};
}

function addSVG(link) {
	const img = document.createElement('img');

	img.src = link;
	img.alt = 'Loading';
	img.style.width = '100px';
	img.style.height = '100px';

	return img;
}

function createP(text) {
	const p = document.createElement('p');
	p.textContent = text;
	return p;
}
