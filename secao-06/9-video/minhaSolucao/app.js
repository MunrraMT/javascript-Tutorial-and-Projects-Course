const controlVideoBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

controlVideoBtn.addEventListener('click', (e) => {
	controlVideoBtn.classList.toggle('slide');
	videoControl(controlVideoBtn.className === 'switch-btn slide');
});

function videoControl(switchControl) {
	switchControl ? video.pause() : video.play();
}

window.addEventListener('load', () => {
	document.querySelector('.preloader').classList.add('hide-preloader');
});
