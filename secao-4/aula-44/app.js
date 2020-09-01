const name = 'john';
const age = 25;

const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';
console.log(sentence);

const sentenceAndre = `Hey it's ${name} and he is ${age} years old`;
console.log(sentenceAndre);

const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
	4 + 4
}`;
console.log(value);
