//http://codingheroes.io/resources/
//https://learn.javascript.ru/function-declaration-expression

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(names[0]);
names[1] = 'Ben';
console.log(names[1]);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
//add to the begining
john.unshift('Mr.');
//delete the last element
john.pop();
//delete the first elemet
john.shift();
console.log(john);

//return the index of element
console.log(john.indexOf('Smith'));

if(john.indexOf('teacher') === -1 ){
	console.log('John is not a teacher');
}