const slides = document.querySelectorAll('.slide');
const prevSlideBtn = document.querySelector('.prevBtn');
const nextSlideBtn = document.querySelector('.nextBtn');
let slideNumber = 0;

document.addEventListener('DOMContentLoaded', () => {
	loadSlides(slideNumber);
});

nextSlideBtn.addEventListener('click', () => {
	slideNumber++;
	loadSlides(slideNumber);
});

prevSlideBtn.addEventListener('click', () => {
	slideNumber--;
	loadSlides(slideNumber);
});

function loadSlides(num) {
	slides.forEach((el) => {
		el.style.right = `${num}00%`;
		num--;
	});
	controllerSlider();
}

function controllerSlider() {
	prevSlideBtn.style.display = 'block';
	nextSlideBtn.style.display = 'block';
	if (slideNumber === 0) return (prevSlideBtn.style.display = 'none');
	if (slideNumber === slides.length - 1)
		return (nextSlideBtn.style.display = 'none');
}
