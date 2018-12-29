// Lecture: Destructuring

// ES 5 
var john = ['John', 26];
var name = john[0];
var age = john[1];

// ES 6
//create const with name and year
const [name6, age6] = ['John', 26];
console.log(name6, age6);


//destruct obj
const obj = {
	firstName: 'John',
	lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName, lastName);

const{firstName: a, lastName: b} = obj;
console.log(a,b);


function calcAgeRetiremnet(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

// destructure to store reutrn values

const [age2, retirement] = calcAgeRetiremnet(1990);
console.log(age2);
console.log(retirement);