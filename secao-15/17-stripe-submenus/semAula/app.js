import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sideWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linksBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
	sideWrapper.classList.add('show');
});

closeBtn.addEventListener('click', () => {
	sideWrapper.classList.remove('show');
});

linksBtns.forEach((el) => {
	el.addEventListener('mouseenter', () => {
		showProducts(el.textContent);
		submenu.classList.add('show');
	});
});

linksBtns.forEach((el) => {
	el.addEventListener('mouseout', () => {
		submenu.classList.remove('show');
	});
});

function showProducts(product) {
	const index = sublinks.findIndex((item) => item.page === product);

	submenu.innerHTML = `<h3>${sublinks[index].page}<h3>`;

	for (const link of sublinks[index].links) {
		submenu.innerHTML += `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
	}
}
