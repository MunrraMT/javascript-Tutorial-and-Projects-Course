function getElement(selection) {
	const element = document.querySelector(selection);
	if (element) {
		return element;
	}
	throw new Error(
		`Please check "${selection}" selector, no such element exists`
	);
}

class Gallery {
	constructor(section, modal) {
		this.section = section;
		this.modal = modal;

		this.closeModal = this.closeModal.bind(this);
		this.nextImage = this.nextImage.bind(this);
		this.lastImage = this.lastImage.bind(this);
		this.chooseImage = this.chooseImage.bind(this);

		this.init();
	}

	init() {
		this.imgs = this.section.querySelectorAll('img.img');

		this.closeBtn = this.modal.querySelector('.close-btn');
		this.nextBtn = this.modal.querySelector('.next-btn');
		this.prevBtn = this.modal.querySelector('.prev-btn');

		this.section.addEventListener('click', (e) => {
			if (e.target.tagName === 'IMG' && e.target.className === 'img') {
				this.showModalImages(e);
				this.openModal();
			}
		});
	}

	openModal() {
		this.modal.classList.add('open');

		this.closeBtn.addEventListener('click', this.closeModal);
		this.nextBtn.addEventListener('click', this.nextImage);
		this.prevBtn.addEventListener('click', this.lastImage);
		this.modalImages.addEventListener('click', this.chooseImage);
	}

	closeModal() {
		this.modal.classList.remove('open');

		this.closeBtn.removeEventListener('click', this.closeModal);
		this.nextBtn.removeEventListener('click', this.nextImage);
		this.prevBtn.removeEventListener('click', this.lastImage);
		this.modal.addEventListener('click', this.chooseImage);
	}

	showModalImages(e) {
		this.modalImages = this.modal.querySelector('.modal-images');
		this.modalImages.textContent = '';

		for (const img of this.imgs) {
			const image = document.createElement('img');

			image.src = img.getAttribute('src');
			image.title = img.getAttribute('title');
			image.id = img.getAttribute('data-id');
			image.alt = img.getAttribute('alt');
			image.className = 'modal-img';

			if (e.target.title === image.title)
				image.className = 'modal-img selected';

			this.modalImages.appendChild(image);
		}

		this.showMainImage(this.modalImages.querySelector('.selected'));
	}

	showMainImage(img) {
		this.modalContent = this.modal.querySelector('.modal-content');

		this.mainImage = this.modalContent.querySelector('img.main-img');
		this.mainImageName = this.modalContent.querySelector('h3.image-name');

		this.mainImage.setAttribute('src', img.src);
		this.mainImageName.textContent = img.title;
	}

	nextImage() {
		const selected = this.modalImages.querySelector('.selected');
		const next =
			selected.nextElementSibling || this.modalImages.firstElementChild;

		selected.classList.remove('selected');
		next.classList.add('selected');
		this.showMainImage(next);
	}

	lastImage() {
		const selected = this.modalImages.querySelector('.selected');
		const prev =
			selected.previousElementSibling ||
			this.modalImages.lastElementChild;

		selected.classList.remove('selected');
		prev.classList.add('selected');
		this.showMainImage(prev);
	}

	chooseImage(e) {
		const selected = this.modalImages.querySelector('.selected');
		if (e.target.className === 'modal-img') {
			selected.classList.remove('selected');

			this.showMainImage(e.target);
			e.target.classList.add('selected');
		}
	}
}

const nature = new Gallery(
	getElement('section.nature'),
	getElement('div.modal')
);

const city = new Gallery(getElement('section.city'), getElement('div.modal'));
