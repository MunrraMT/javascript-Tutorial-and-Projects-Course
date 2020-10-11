const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	total < 100 && console.log('Menos que cem');
	total >= 100 && console.log('Mais que cem');
	return total;
}

const gasTotal = calculateTotal(gas); // 160
const foodTotal = calculateTotal(food); // 100
const randomTotal = calculateTotal([200, 4000, 500, 1]); // 4701

console.log(calculateTotal([...gas, ...food])); // 260

console.log({ gas: gasTotal, food: foodTotal, random: randomTotal }); // { gas: 160, food: 100, random: 4701 }
