class PersonInfo {
	constructor(container, url) {
		this.container = container;
		this.url = url;

		this.count = 0;

		this.userImg = container.querySelector('img.user-img');
		this.userValue = container.querySelector('p.user-value');
		this.userTitle = container.querySelector('p.user-title');
		this.icons = container.querySelectorAll('button.icon');
		this.btnRandom = container.querySelector('button.btn');
		this.btnNext = container.querySelector(`[data-label="next"]`);
		this.btnPrev = container.querySelector(`[data-label="prev"]`);

		this.init = this.init.bind(this);
		this.randPerfil = this.randPerfil.bind(this);
		this.nextPerfil = this.nextPerfil.bind(this);
		this.prevPerfil = this.prevPerfil.bind(this);
		this.touchIcons = this.touchIcons.bind(this);
		this.root = document.documentElement;

		this.events();
	}

	events() {
		window.addEventListener('DOMContentLoaded', this.init);
		this.btnRandom.addEventListener('click', this.randPerfil);
		this.btnNext.addEventListener('click', this.nextPerfil);
		this.btnPrev.addEventListener('click', this.prevPerfil);
		this.icons.forEach((el) => {
			el.addEventListener('mouseenter', this.touchIcons);
		});
	}

	async init() {
		this.loadingIcon('enable');
		await this.getPersonApi();
		this.showPerson('name');
		this.loadingIcon('disable');
	}

	loadingIcon(state) {
		const img = document.createElement('img');
		img.src = './img/Infinity-1.5s-100px.svg';
		img.classList.add('loading-icon');

		if (state === 'enable') {
			this.userTitle.textContent = ' ';
			this.userValue.textContent = ' ';
			this.container.insertBefore(img, this.userValue);
		}

		if (state === 'disable') {
			this.container.querySelector('.loading-icon').remove();
		}
	}

	async getPersonApi() {
		try {
			localStorage.removeItem('listPerson');
			const data = await fetch(this.url, { method: 'Get' });
			const responseApi = await data.json();
			const apiJson = responseApi.results;

			this.setLocalHost(apiJson);
		} catch (error) {
			this.loadingIcon('disable');
			this.userTitle.textContent = 'Information not found';
			this.userValue.textContent = 'Try again later';
		}
	}

	setLocalHost(responseApi) {
		const dataJson = responseApi;
		localStorage.setItem('listPerson', JSON.stringify(dataJson));
	}

	showPerson(item) {
		this.showPhoto();
		this.showGender();

		switch (item) {
			case 'name':
				this.userTitle.textContent = this.showName().title;
				this.userValue.textContent = this.showName().name;
				break;
			case 'email':
				this.userTitle.textContent = this.showEmail().title;
				this.userValue.textContent = this.showEmail().email;
				break;
			case 'age':
				this.userTitle.textContent = this.showAge().title;
				this.userValue.textContent = this.showAge().age;
				break;
			case 'street':
				this.userTitle.textContent = this.showStreet().title;
				this.userValue.textContent = this.showStreet().street;
				break;
			case 'phone':
				this.userTitle.textContent = this.showPhone().title;
				this.userValue.textContent = this.showPhone().phone;
				break;
			case 'password':
				this.userTitle.textContent = this.showPassword().title;
				this.userValue.textContent = this.showPassword().password;
				break;
		}
	}

	showPhoto() {
		const photo = this.getLocalHost()[this.count].picture.large;
		this.userImg.setAttribute('width', '150');
		this.userImg.setAttribute('height', '150');
		this.userImg.src = photo;
	}

	getLocalHost() {
		return JSON.parse(localStorage.getItem('listPerson'));
	}

	showGender() {
		if (this.getLocalHost()[this.count].gender === 'female') {
			this.root.style.setProperty('--clr-grey-10', '#f8f1f7', 'important');
		} else {
			this.root.style.setProperty('--clr-grey-10', '#f1f5f8', 'important');
		}
	}

	showName() {
		const firstName = this.getLocalHost()[this.count].name.first;
		const lastName = this.getLocalHost()[this.count].name.last;
		const titleName = this.getLocalHost()[this.count].name.title;

		return {
			title: 'My name is',
			name: `${titleName} ${firstName} ${lastName}`,
		};
	}

	showEmail() {
		return {
			title: 'My email is',
			email: this.getLocalHost()[this.count].email,
		};
	}

	showAge() {
		return {
			title: `I'm have ${this.getLocalHost()[this.count].dob.age} years old`,
			age: `I was born in ${this.getLocalHost()[this.count].dob.date.slice(
				0,
				4
			)}`,
		};
	}

	showStreet() {
		return {
			title: `I live in ${this.getLocalHost()[this.count].location.country}`,
			street: `in the state of ${
				this.getLocalHost()[this.count].location.state
			} / ${this.getLocalHost()[this.count].nat}`,
		};
	}

	showPhone() {
		return {
			title: 'My phone number is',
			phone: this.getLocalHost()[this.count].phone,
		};
	}

	showPassword() {
		return {
			title: `My login is "${this.getLocalHost()[this.count].login.username}"`,
			password: `My password is "${
				this.getLocalHost()[this.count].login.password
			}"`,
		};
	}

	randPerfil() {
		this.count = this.rand(this.getLocalHost());
		this.showPerson('name', this.count);
	}

	rand(responseApi) {
		const max = responseApi.length;
		return Math.floor(Math.random() * (max - 0)) + 0;
	}

	nextPerfil() {
		this.count++;
		if (this.count === this.getLocalHost().length) {
			this.count = 0;
		}
		this.showPerson('name', this.count);
	}

	prevPerfil() {
		this.count--;
		if (this.count < 0) {
			this.count = this.getLocalHost().length - 1;
		}
		this.showPerson('name', this.count);
	}

	touchIcons(e) {
		this.showPerson(e.currentTarget.getAttribute('data-label'), this.count);
	}
}

const cadastrados = new PersonInfo(
	document.querySelector('div.container'),
	'https://randomuser.me/api/?results=100'
);

const cadastrados2 = new PersonInfo(
	document.querySelector('div.container.container2'),
	'https://randomuser.me/api/?results=100'
);
