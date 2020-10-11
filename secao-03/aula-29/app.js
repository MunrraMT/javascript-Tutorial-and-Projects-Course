function hello() {
	// logic
	console.log('hello Bob');
	console.log('hello John');
	console.log('hello Susy');
}

// come code here
hello();

// come code here
hello();

// come code here
hello();

let nomes = ['André', 'Camila', 'Rodrigo', 'Pérola'];
function darOla(arr) {
	percorreArray(arr);

	function percorreArray(arr) {
		for (let i = 0; i < arr.length; i++) {
			mensagem(i);
		}
	}

	function mensagem(i) {
		if (nomeFeminino(i)) {
			let pronome = 'senhora';
			return mensagemNaTela(pronome, i);
		}
		pronome = 'senhor';
		return mensagemNaTela(pronome, i);
	}

	function nomeFeminino(i) {
		return nomes[i][nomes[i].length - 1] === 'a';
	}

	function mensagemNaTela(pronome, i) {
		return document.write(`<p>Bom dia, ${pronome} ${nomes[i]}</p>`);
	}
}
darOla(nomes);
