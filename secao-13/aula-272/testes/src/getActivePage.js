const getActivePage = () => {
	const activePage = JSON.parse(localStorage.getItem('activePage'));

	document.querySelectorAll('nav.navbar a').forEach((el) => {
		if (el.textContent === activePage) {
			el.classList.add('active');
		} else {
			el.classList.remove('active');
		}
	});
};

export default getActivePage;
