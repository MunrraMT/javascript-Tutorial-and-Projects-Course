const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.addEventListener('click', (e) => {
	showSidebar(e);
});

closeBtn.addEventListener('click', (e) => {
	showSidebar(e);
});

function showSidebar(e) {
	e.preventDefault();
	sidebar.classList.toggle('show-sidebar');
}
