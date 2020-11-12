const btn = document.querySelector('button.btn');
const content = document.querySelector('p.content');
const chuckImage = document.querySelector('[src="./chuck.png"]');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', async () => {
	loading();
	getDataAjax();
});

async function getDataAjax() {
	try {
		const data = await fetch(url, { method: 'GET' });
		const response = await data.json();

		if (data.status >= 400) {
			return displayError();
		}

		displayData(response);
	} catch (e) {
		console.log(e);
		displayError();
	}
}

function loading() {
	content.textContent = '';
	content.appendChild(createIMG('./img/spin-1s-200px.svg'));
	content.appendChild(createP('Loading...'));
}

function displayData({ value: joke }) {
	content.textContent = joke;
	chuckImage.classList.add('shake-img');
	setTimeout(() => {
		chuckImage.classList.remove('shake-img');
	}, 250);
}

function displayError() {
	content.textContent = 'Ocorreu um erro, tente novamente!';
	chuckImage.classList.add('shake-img');
	setTimeout(() => {
		chuckImage.classList.remove('shake-img');
	}, 250);
}

function createIMG(link) {
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
