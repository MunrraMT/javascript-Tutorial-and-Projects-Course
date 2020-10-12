// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
	console.log('current target', e.currentTarget);
	console.log('target', e.target);
	if (e.target.classList.contains('link')) {
		console.log('you clicked on the link');
	}
}

container.addEventListener('click', showBubbling);
list.addEventListener('click', showBubbling);
document.addEventListener('click', showBubbling);
window.addEventListener('click', showBubbling);
