const btn = document.querySelector('button.btn');
const content = document.querySelector('p.content');
const chuckImage = document.querySelector('[src="./chuck.png"]');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
	loading();
	fetch(url, { method: 'GET' })
		.then((data) => {
			if (data.ok) {
				return data.json();
			} else {
				displayError();
			}
		})
		.then((response) => displayData(response))
		.catch((err) => console.log(err));
});

function loading() {
	content.textContent = '';
	content.appendChild(createIMG('./img/spin-1s-200px.svg'));
	content.appendChild(createP('Loading...'));
	chuckImage.classList.add('shake-img');
}

function displayData({ value: joke }) {
	content.textContent = joke;
	setTimeout(() => {
		chuckImage.classList.remove('shake-img');
	}, 250);
}

function displayError() {
	content.textContent = 'Ocorreu um erro, tente novamente!';
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
