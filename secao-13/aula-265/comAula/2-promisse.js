const btn = document.querySelector('button.btn');
const content = document.querySelector('p.content');
const chuckImage = document.querySelector('[src="./chuck.png"]');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
	loading();
	getData(url)
		.then((response) => displayData(response))
		.catch((err) => {
			console.log(err.status, err.text);
			displayError(err.msg);
		});
});

function getData(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.responseType = 'json';
		xhr.open('GET', url);
		xhr.send();
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== 4) return;
			if (xhr.status !== 200) {
				reject({
					status: xhr.status,
					text: xhr.statusText,
					msg:
						'Mensagem não pode ser mostrada, tente novamente mais tarde, obrigado!',
				});
			}
			resolve(xhr);
		};
	});
}

function displayData(data) {
	const { value: joke } = data.response;
	content.textContent = joke;
	setTimeout(() => {
		chuckImage.classList.remove('shake-img');
	}, 250);
}

function displayError(msg) {
	content.textContent = msg;
	setTimeout(() => {
		chuckImage.classList.remove('shake-img');
	}, 250);
}

function loading() {
	content.textContent = '';
	content.appendChild(createIMG('./img/spin-1s-200px.svg'));
	content.appendChild(createP('Loading...'));
	chuckImage.classList.add('shake-img');
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
