import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const url = 'https://randomuser.me/api/';
const btn = get('.btn');

const showUser = async () => {
	// get user from api
	const person = await getUser(url);
	displayUser(person);

	// display user
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
