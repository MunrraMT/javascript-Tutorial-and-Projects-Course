document.querySelector('#about').addEventListener('click', (e) => {
	e.target.classList.contains('tab-btn') && handleTabBar(e.target);
});

function handleTabBar(tabBar) {
	document.querySelectorAll('.tab-btn').forEach((element) => {
		element.classList.remove('active');
	});
	document.querySelectorAll('.content').forEach((element) => {
		element.classList.remove('active');
	});

	tabBar.classList.add('active');
	document.querySelector(`#${tabBar.dataset.id}`).classList.add('active');
}
