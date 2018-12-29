// Lecture Classes

// ES5
var Person5 = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function () {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge() {
		let age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}
	
	//it's private class, which will not be inherited
	static greeting() {
		console.log("test")
	}
}

const john6 = new Person6('John', 1990, 'teacher');
john5.calculateAge();
//not working
//john6.greeting();
// but this work
Person6.greeting();