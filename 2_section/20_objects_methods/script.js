//http://codingheroes.io/resources/
//https://learn.javascript.ru/function-declaration-expression
/*v1.0
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		//for receiveing context
		return 2016 - this.yearOfBirth;
	}
}

console.log(john);
console.log(john.family[1]);

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);
*/


// v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
//after that value will be create
console.log(john);

var mike = {
    name: 'Mike',
    yearOfBirth: 1960,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};
mike.calculateAge();
console.log(mike);