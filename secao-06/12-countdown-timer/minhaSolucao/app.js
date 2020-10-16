const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const prazoSorteio = 10;
const tempDate = new Date();
const futureDate = new Date(
	tempDate.getFullYear(),
	tempDate.getMonth(),
	tempDate.getDate() + prazoSorteio,
	9,
	30,
	0
);
const Countdown = setInterval(timeLeftCalc, 1000);

function init() {
	showDeadline();
	timeLeftCalc();
}
init();

function showDeadline() {
	document.querySelector('.giveaway').textContent = `
    giveaway ends on ${weekdays[futureDate.getDay()]},
    ${futureDate.getDate()} ${months[futureDate.getMonth()]}
  ${futureDate.getFullYear()}, ${horario12h(futureDate)}
`;
}

function horario12h(getDate) {
	let hour = getDate.getHours();
	if (hour > 12) {
		hour -= 12;
		return `${leftZero(hour)}:${getDate.getMinutes()}pm`;
	}
	return `${leftZero(hour)}:${getDate.getMinutes()}am`;
}

function leftZero(num) {
	if (num > 10) return num;
	return `0${num}`;
}

function timeLeftCalc() {
	const today = new Date().getTime();
	const timeLeft = futureDate.getTime() - today;

	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	const days = Math.floor(timeLeft / oneDay);
	const hours = Math.floor((timeLeft % oneDay) / oneHour);
	const minutes = Math.floor((timeLeft % oneHour) / oneMinute);
	const seconds = Math.floor((timeLeft % oneMinute) / 1000);

	showTimeLeft([days, hours, minutes, seconds]);
	stopCountdown(timeLeft);
}

function showTimeLeft(values) {
	document
		.querySelectorAll('.deadline-format h4')
		.forEach((element, index) => {
			element.textContent = values[index];
		});
}

function stopCountdown(time) {
	if (time < 0) {
		clearInterval(Countdown);
		document.querySelector(
			'.deadline'
		).innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
	}
}
