const h1 = document.querySelector('h1');
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
	const p = document.createElement('p');

	if (xhr.readyState === 4 && xhr.status === 200) {
		p.textContent = xhr.responseText;
		h1.insertAdjacentElement('afterend', p);
	}
	if (xhr.readyState === 4 && xhr.status !== 200) {
		p.textContent = 'Erro ao tentar ler conteudo do arquivo';
		h1.insertAdjacentElement('afterend', p);
	}
};

xhr.open('GET', './api/sample.txt');
xhr.send();
