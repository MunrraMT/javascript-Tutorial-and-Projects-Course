// FIND
// RETORNA O PRIMEIRO ITEM VÁLIDO DE UM ARRAY

// ES5 - ARRAY.FIND
var inventoryA = [
	{ name: 'apples', quantity: 2 },
	{ name: 'bananas', quantity: 0 },
	{ name: 'cherries', quantity: 5 },
];

function isCherries(fruit) {
	return fruit.name === 'cherries';
}

console.log(inventoryA.find(isCherries)); // { name: 'cherries', quantity: 5 }

// ES6 - ARROW FUNCTION - ARRAY.FIND
const inventoryB = [
	{ name: 'apples', quantity: 2 },
	{ name: 'bananas', quantity: 0 },
	{ name: 'cherries', quantity: 5 },
	{ name: 'cherries', quantity: 20 },
];

const result = inventoryB.find((fruit) => fruit.name === 'cherries');

console.log(result); // { name: 'cherries', quantity: 5 }
