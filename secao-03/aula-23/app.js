const name = 'john';
const lastname = 'teste';

let fullname = name + ' ' + lastname;

// Concatenação de Strings
console.log('Hello, your name is: ' + name + ' ' + lastname);

// Concatenação de String com Variável no final
console.log('Hello, your name is: ' + fullname);

// Concatenação com Template Strings
console.log(`Hello, your name is: ${name} ${lastname}`);

const website = 'udemy';
const url = 'https://www.' + website + '.com';
console.log(url);
