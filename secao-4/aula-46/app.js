// Arrays and for loop
const name = ['anna', 'susy', 'bob'];
const lastname = 'shakeandbake';

let newArray = [];

// for loop
for (let i = 0; i < name.length; i++) {
	newArray.push(`${name[i]} ${lastname}`);
}
console.log(newArray); // [ 'anna shakeandbake', 'susy shakeandbake', 'bob shakeandbake' ]
