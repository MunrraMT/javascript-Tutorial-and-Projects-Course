// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const linksContainer = document.querySelector('.links-container');

document.querySelector('.nav-toggle').addEventListener('click', () => {
	linksContainer.classList.toggle('show-links');
});

document.addEventListener('scroll', () => {
	showTopBtn();
	showMenuFixed();
});

const banner = document.querySelector('.banner');
const sectionAboutUs = document.querySelector('#about');
const scrollLink = document.querySelector('[class="scroll-link top-link"]');
const navMenuBar = document.querySelector('#nav');
const navBarHeight = navMenuBar.getBoundingClientRect().height;

function showTopBtn() {
	const distanceTop = sectionAboutUs.getBoundingClientRect().top;
	distanceTop <= navBarHeight && scrollLink.classList.add('show-link');
	distanceTop > navBarHeight && scrollLink.classList.remove('show-link');
}

function showMenuFixed() {
	const distanceScrollTop = window.pageYOffset;

	if (distanceScrollTop >= navBarHeight) {
		navMenuBar.classList.add('fixed-nav');
		banner.setAttribute('style', `margin-top: ${navBarHeight}px`);
	}
	if (distanceScrollTop <= navBarHeight) {
		navMenuBar.classList.remove('fixed-nav');
		banner.setAttribute('style', '');
	}
}

document.querySelectorAll('.scroll-link').forEach((element) => {
	element.addEventListener('click', (e) => {
		e.preventDefault();

		element.textContent === 'home' && moveSection('#home');
		element.textContent === 'about' && moveSection('#about');
		element.textContent === 'services' && moveSection('#services');
		element.textContent === 'tours' && moveSection('#tours');
		element.textContent === 'explore tours' && moveSection('#tours');

		if (element.classList.contains('top-link')) {
			linksContainer.classList.toggle('show-links');
			return window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		}
	});
});

function moveSection(navLink) {
	const sectionName = document.querySelector(navLink);
	const location = sectionName.offsetTop - navBarHeight;

	linksContainer.classList.toggle('show-links');
	window.scroll({ top: location, left: 0, behavior: 'smooth' });
}

const date = new Date();
document.querySelector('#date').textContent = date.getFullYear();
