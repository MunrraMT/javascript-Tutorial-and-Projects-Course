const person = {
	name: 'johrn',
	lastName: 'peters',
	age: 40,
	education: false,
	married: false,
	siblings: ['anny', 'susan', 'peter'],
	greeting: function greeting() {
		console.log('greeting');
		return 'ok';
	},
};

console.table(person);
console.log(person.name);
console.log(person.siblings);
console.table(person.siblings);
console.log(person.age);
console.log(person.greeting());
console.log(`Meu nome é ${person.name}`);
console.log(`Meu nome é ${person.greeting()}`);

person.name = 'André';
console.log(person.name);

person.teste = 'deu certo';
console.log(person.teste);

console.table(person);
