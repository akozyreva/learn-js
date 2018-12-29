//http://codingheroes.io/resources/
//https://learn.javascript.ru/function-declaration-expression

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
}

console.log(john.lastName);
//another way to read values
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john[xyz] = 'programmer';
console.log(john.lastName, john.job);

var jane = new Object();
jane.name = 'jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane.isMarried = true;

console.log(jane);