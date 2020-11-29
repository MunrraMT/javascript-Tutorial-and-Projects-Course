const displayButtons = (container, pages, activeIndex) => {
	let btns = pages.map((item, pageIndex) => {
		return `<button class="page-btn ${
			activeIndex === pageIndex ? 'active-btn' : ''
		}" data-index="${pageIndex}">${pageIndex + 1}</button>`;
	});

	btns.unshift('<button class="prev-btn">preview</button>');
	btns.push('<button class="next-btn">next</button>');

	container.innerHTML = btns.join('');
};

export default displayButtons;
