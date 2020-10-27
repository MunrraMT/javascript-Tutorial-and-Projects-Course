class Counter {
	constructor(container) {
		this.container = container;

		this.increase = this.container.querySelector('.increase');
		this.decrease = this.container.querySelector('.decrease');
		this.reset = this.container.querySelector('.reset');
		this.value = this.container.querySelector('.value');

		window.addEventListener('DOMContentLoaded', () => {
			this.value.textContent = 0;
		});

		this.increase.addEventListener('click', () => {
			this.increaseBtn();
		});

		this.decrease.addEventListener('click', () => {
			this.decreaseBtn();
		});

		this.reset.addEventListener('click', () => {
			this.resetBtn();
		});
	}

	increaseBtn() {
		this.value.textContent++;
		this.checkColorValue();
	}

	decreaseBtn() {
		this.value.textContent--;
		this.checkColorValue();
	}

	resetBtn() {
		this.value.textContent = 0;
		this.checkColorValue();
	}

	checkColorValue() {
		if (Number(this.value.textContent) > 0) {
			this.value.style.color = 'green';
		}
		if (Number(this.value.textContent) === 0) {
			this.value.style.color = 'hsl(209, 61%, 16%)';
		}
		if (Number(this.value.textContent) < 0) {
			this.value.style.color = 'red';
		}
	}
}

const first = new Counter(document.querySelector('.first-counter'));
const second = new Counter(document.querySelector('.second-counter'));
