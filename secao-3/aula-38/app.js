// Switch
// dice values: 1-6

const dice = 2;

switch (dice) {
	case 1:
		console.log('you got one');
		break;

	case 2:
		console.log('you got two');
		break;

	case 3:
		console.log('you got three');
		break;

	default:
		console.log('you did not roll the dice');
		break;
}

// Minha Solução
if (dice >= 1 && dice <= 6) {
	console.log(`you got ${dice}`);
} else {
	console.log('you did not roll the dice');
}
