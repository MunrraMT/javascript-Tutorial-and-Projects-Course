const setActivePage = () => {
	document.querySelectorAll('nav.navbar a').forEach((el) => {
		el.addEventListener('click', (e) => {
			if (el === e.currentTarget) {
				localStorage.setItem('activePage', JSON.stringify(el.textContent));
			}
		});
	});
};

export default setActivePage;
