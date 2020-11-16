let count = 0;

window.addEventListener('load', async () => {
	loadingIcon('active');
	await getPersonApi();
	showPerson('name', count);
	loadingIcon('disable');
});

document.querySelectorAll('button.icon').forEach((el) => {
	el.addEventListener('mouseenter', (e) => {
		showPerson(e.currentTarget.getAttribute('data-label'), count);
	});
});

document.querySelector('button.btn').addEventListener('click', () => {
	count = rand(getLocalHost('listPerson'));
	showPerson('name', count);
});

document.querySelectorAll('div.arrows .icon').forEach((el) => {
	el.addEventListener('click', (e) => {
		if (e.currentTarget.getAttribute('data-label') === 'prev') {
			count--;
			if (count < 0) {
				count = getLocalHost('listPerson').length - 1;
			}
			return showPerson('name', count);
		}

		if (e.currentTarget.getAttribute('data-label') === 'next') {
			count++;
			if (count === getLocalHost('listPerson').length) {
				count = 0;
			}
			return showPerson('name', count);
		}
	});
});

async function getPersonApi() {
	const url = 'https://randomuser.me/api/?results=100';
	const data = await fetch(url, { method: 'Get' });
	const responseApi = await data.json();
	const arrApi = responseApi.results;

	setLocalHost(arrApi, 'listPerson');
}

function showPerson(item, id) {
	const container = document.querySelector('div.container');
	const userValue = container.querySelector('p.user-value');
	const userTitle = container.querySelector('p.user-title');

	showPhoto(id);
	showGender(id);

	switch (item) {
		case 'name':
			userTitle.textContent = showName(id).title;
			userValue.textContent = showName(id).name;
			break;
		case 'email':
			userTitle.textContent = showEmail(id).title;
			userValue.textContent = showEmail(id).email;
			break;
		case 'age':
			userTitle.textContent = showAge(id).title;
			userValue.textContent = showAge(id).age;
			break;
		case 'street':
			userTitle.textContent = showStreet(id).title;
			userValue.textContent = showStreet(id).street;
			break;
		case 'phone':
			userTitle.textContent = showPhone(id).title;
			userValue.textContent = showPhone(id).phone;
			break;
		case 'password':
			userTitle.textContent = showPassword(id).title;
			userValue.textContent = showPassword(id).password;
			break;
	}
}

function showPhoto(id) {
	const photo = getLocalHost('listPerson')[id].picture.large;
	document.querySelector('img.user-img').src = photo;
}

function showName(id) {
	const firstName = getLocalHost('listPerson')[id].name.first;
	const lastName = getLocalHost('listPerson')[id].name.last;
	const titleName = getLocalHost('listPerson')[id].name.title;

	return {
		title: 'My name is',
		name: `${titleName} ${firstName} ${lastName}`,
	};
}

function showEmail(id) {
	return {
		title: 'My email is',
		email: getLocalHost('listPerson')[id].email,
	};
}

function showAge(id) {
	return {
		title: `I'm have ${getLocalHost('listPerson')[id].dob.age} years old`,
		age: `I was born in ${getLocalHost('listPerson')[id].dob.date.slice(
			0,
			4
		)}`,
	};
}

function showStreet(id) {
	return {
		title: `I live in ${getLocalHost('listPerson')[id].location.country}`,
		street: `in the state of ${
			getLocalHost('listPerson')[id].location.state
		}/${getLocalHost('listPerson')[id].nat}`,
	};
}

function showPhone(id) {
	return {
		title: 'My phone number is',
		phone: getLocalHost('listPerson')[id].phone,
	};
}

function showPassword(id) {
	return {
		title: `My login is "${getLocalHost('listPerson')[id].login.username}"`,
		password: `My password is "${
			getLocalHost('listPerson')[id].login.password
		}"`,
	};
}

function showGender(id) {
	const root = document.documentElement;
	if (getLocalHost('listPerson')[id].gender === 'female') {
		root.style.setProperty('--clr-grey-10', '#f8f1f7', 'important');
	} else {
		root.style.setProperty('--clr-grey-10', '#f1f5f8', 'important');
	}
}

function setLocalHost(responseApi, listName) {
	const dataJson = responseApi;
	localStorage.setItem(listName, JSON.stringify(dataJson));
}

function getLocalHost(listName) {
	return JSON.parse(localStorage.getItem(listName));
}

function loadingIcon(state) {
	const container = document.querySelector('div.container');
	const userValue = container.querySelector('p.user-value');
	const userTitle = container.querySelector('p.user-title');
	const img = document.createElement('img');
	img.src = './img/Infinity-1.5s-100px.svg';
	img.classList.add('loading-icon');

	if (state === 'active') {
		userTitle.textContent = ' ';
		userValue.textContent = ' ';
		container.insertBefore(img, userValue);
	}

	if (state === 'disable') {
		const imgDOM = container.querySelector('.loading-icon');
		imgDOM.remove();
	}
}

function rand(responseApi) {
	const max = responseApi.length;
	return Math.floor(Math.random() * (max - 0)) + 0;
}
