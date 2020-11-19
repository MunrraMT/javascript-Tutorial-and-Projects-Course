import peoples from './data.js';

const slideContainer = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let slideNumber = 0;
let autoMoveSlide;

window.addEventListener('DOMContentLoaded', () => {
	loadReviews();
	autoMoveSlide = setInterval(() => {
		changeSlide('next');
	}, 3000);
});

nextBtn.addEventListener('click', () => {
	changeSlide('next');
	stopInterval(autoMoveSlide);
});

prevBtn.addEventListener('click', () => {
	changeSlide('prev');
	stopInterval(autoMoveSlide);
});

function loadReviews() {
	peoples.forEach((el, index) => {
		const article = document.createElement('article');
		article.classList.add('slide');
		article.innerHTML = `
			<img
				src="${el.img}"
				class="img"
				alt="${el.name}"
				/>
			<h4>${el.name}</h4>
			<p class="title">${el.job}</p>
			<p class="text">
				${el.text}
			</p>
			<div class="quote-icon">
				<i class="fas fa-quote-right"></i>
			</div>
		`;

		slideNumber === index - 1 && article.classList.add('next');
		slideNumber === index && article.classList.add('active');

		slideContainer.appendChild(article);
	});

	showBtn();
}

function maxSlideNumber() {
	slideNumber < 0 && (slideNumber = peoples.length - 1);
	slideNumber === peoples.length && (slideNumber = 0);
}

function showBtn() {
	nextBtn.style.display = 'none';
	prevBtn.style.display = 'none';

	if (peoples.length > 1) {
		nextBtn.style.display = 'block';
		prevBtn.style.display = 'block';
	}
}

function changeSlide(direction) {
	const slides = document.querySelectorAll('.slide');
	slides.forEach((el) => (el.className = 'slide'));

	direction === 'next' && slideNumber++;
	direction === 'prev' && slideNumber--;

	maxSlideNumber();

	slides[slideNumber - 1] &&
		(slides[slideNumber - 1].className = 'slide last');

	!slides[slideNumber - 1] &&
		(slides[slides.length - 1].className = 'slide last');

	slides[slideNumber].className = 'slide active';

	slides[slideNumber + 1] &&
		(slides[slideNumber + 1].className = 'slide next');

	!slides[slideNumber + 1] && (slides[0].className = 'slide next');
}

function stopInterval(interval) {
	clearInterval(interval);
}
