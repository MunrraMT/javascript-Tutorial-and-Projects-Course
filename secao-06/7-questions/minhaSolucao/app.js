const articleQuestions = document.querySelectorAll('.question');

articleQuestions.forEach((element) => {
	element.querySelector('.question-btn').addEventListener('click', (e) => {
		element.classList.toggle('show-text');
	});
});
