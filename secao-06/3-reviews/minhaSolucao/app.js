// local reviews data
const reviews = [
	{
		id: 1,
		name: 'susan smith',
		job: 'web developer',
		img:
			'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
		text:
			"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: 'anna johnson',
		job: 'web designer',
		img:
			'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
		text:
			'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		id: 3,
		name: 'peter jones',
		job: 'intern',
		img:
			'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
		text:
			'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		id: 4,
		name: 'bill anderson',
		job: 'the boss',
		img:
			'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
		text:
			'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
];

// MINHA SOLUÇÃO
const personImg = document.querySelector('#person-img');
const personAuthor = document.querySelector('#author');
const personJob = document.querySelector('#job');
const personInfo = document.querySelector('#info');

showPerson(reviews, 1);
let currentItem = 1;

document.addEventListener('click', (e) => {
	const target = e.target;
	const targetClass = target.className;

	if (target.tagName === 'BUTTON' || target.tagName === 'I') {
		e.preventDefault();

		targetClass === 'fas fa-chevron-right' && currentItem++;
		targetClass === 'fas fa-chevron-left' && currentItem--;
		targetClass === 'random-btn' &&
			(currentItem = rand(0, reviews.length - 1));
		currentItem === reviews.length && (currentItem = 0);
		currentItem < 0 && (currentItem = reviews.length - 1);

		showPerson(reviews, currentItem);
	}
});

function showPerson(arr, index) {
	personImg.setAttribute('src', arr[index].img);
	personAuthor.textContent = arr[index].name;
	personJob.textContent = arr[index].job;
	personInfo.textContent = arr[index].text;
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
