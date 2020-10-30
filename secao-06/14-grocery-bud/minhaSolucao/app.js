// ****** SELECT ITEMS **********
const groceryForm = document.querySelector('.grocery-form');
const alertMesg = document.querySelector('.alert');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const groceryInput = document.querySelector('#grocery');
const clearAllItens = document.querySelector('.clear-btn');

let collectionItens = [];

// edit option
const submitBtn = document.querySelector('.submit-btn');
let editId = '';

// ****** EVENT LISTENERS **********
window.addEventListener('DOMContentLoaded', () => {
	inputEmpty();
	collectionItens = getLocalStorage();
	showItem(collectionItens);
});

groceryForm.addEventListener('submit', (e) => {
	e.preventDefault();

	if (submitBtn.textContent === 'submit') {
		isValid(groceryInput.value);
		inputEmpty();
	}

	if (submitBtn.textContent === 'edit') {
		editItem();
	}
});

clearAllItens.addEventListener('click', () => {
	itensEmpty();
});

// ****** FUNCTIONS **********
function isValid(input) {
	if (!input) return displayAlertMsg('Please enter value', 'danger');

	displayAlertMsg('item added to the list', 'success');
	addItem(input);
}

function toggleContainerList() {
	if (collectionItens.length <= 0) {
		return groceryContainer.classList.remove('show-container');
	}

	groceryContainer.classList.add('show-container');
}

function inputEmpty() {
	groceryInput.value = '';
	groceryInput.focus();
}

function addItem(value) {
	const singleItem = { name: value, id: rand() };
	collectionItens.push(singleItem);
	showItem(collectionItens);
	addLocalStorage(collectionItens);
}

function showItem(arr) {
	groceryList.textContent = '';

	for (const item of arr) {
		const article = document.createElement('article');
		article.setAttribute('data-id', item.id);
		article.classList.add('grocery-item');
		article.innerHTML += `
            <p class="title">${item.name}</p>
            <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>       
        `;

		const deleteBtn = article.querySelector('.delete-btn');
		deleteBtn.addEventListener('click', deleteItem);

		const editBtn = article.querySelector('.edit-btn');
		editBtn.addEventListener('click', prepareEdition);

		groceryList.appendChild(article);
	}

	toggleContainerList();
}

function displayAlertMsg(msg, className) {
	alertMesg.classList.add(`alert-${className}`);
	alertMesg.textContent = msg;

	setTimeout(() => {
		alertMesg.classList.remove(`alert-${className}`);
		alertMesg.textContent = '';
	}, 2000);
}

function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	const elementId = element.getAttribute('data-id');
	const newCollectionItens = collectionItens.filter(function (item) {
		return Number(item.id) !== Number(elementId);
	});

	collectionItens = newCollectionItens;

	addLocalStorage(collectionItens);
	showItem(collectionItens);

	if (groceryList.textContent === '') {
		return displayAlertMsg('empty list', 'danger');
	}

	displayAlertMsg('item removed', 'danger');
}

function prepareEdition(e) {
	const element = e.currentTarget.parentElement.parentElement;
	editId = element.getAttribute('data-id');

	submitBtn.textContent = 'edit';
	groceryInput.value = element.innerText;
}

function editItem() {
	const newCollectionItens = collectionItens.map(function (item) {
		if (Number(item.id) === Number(editId)) {
			item.name = groceryInput.value;
			return item;
		}
		return item;
	});

	collectionItens = newCollectionItens;
	submitBtn.textContent = 'submit';

	addLocalStorage(collectionItens);
	showItem(collectionItens);
	inputEmpty();
	displayAlertMsg('item edited', 'danger');
}

function itensEmpty() {
	const vazio = [];
	collectionItens = vazio;
	addLocalStorage(vazio);
	showItem(collectionItens);
	displayAlertMsg('empty list', 'danger');
	inputEmpty();
	toggleContainerList();
}

function rand(min = 1000000000, max = 9999999999) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// ****** LOCAL STORAGE **********
function addLocalStorage(list) {
	localStorage.setItem('listItens', JSON.stringify(list));
}

function getLocalStorage() {
	return localStorage.getItem('listItens')
		? JSON.parse(localStorage.getItem('listItens'))
		: [];
}

// ****** SETUP ITEMS **********
