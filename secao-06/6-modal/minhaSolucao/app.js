const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalOverlay = document.querySelector('.close-btn');

modalBtn.addEventListener('click', (e) => {
	showModal(e);
});

closeModalOverlay.addEventListener('click', (e) => {
	showModal(e);
});

function showModal(e) {
	e.preventDefault();
	modalOverlay.classList.toggle('open-modal');
}
