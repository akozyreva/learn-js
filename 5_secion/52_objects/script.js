// Function Constructor

var Person = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}


// adding function, using prototype
Person.prototype.calculateAge = function () {
	console.log(2016 - this.yearOfBirth);
}


// we can add property, using prototype, but it's not common
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);