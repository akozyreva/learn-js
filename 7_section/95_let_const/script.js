// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6  = 23;
// this will be error
//name6 = 'Jane Miller';
console.log(name6);
*/


// ES5
function driversLisense(passedTest) {
	
	if(passedTest){
		var firstName = 'John';
		var yearOfBirth = 1990;	
	}
	console.log(firstName, yearOfBirth);
}


driversLisense(true);


// ES6
function driversLisense6(passedTest) {
	
	if(passedTest){
		//not work!!!!
		//console.log(firstName);
		let firstName = 'John';
		const yearOfBirth = 1990;	
		console.log(firstName, yearOfBirth);
	}
	//will be error!
	//console.log(firstName, yearOfBirth);
}

//var function-scoped, const and let = block-scoped /means this = {}
driversLisense6(true);

/* we can't declare const in one block and name it in another. This example shoudn't work.
function driversLisense6(passedTest) {
	let firstName, const yearOfBirth;
	if(passedTest){
		//this work
		firstName = 'John';
		//this not!!!!!
		yearOfBirth = 1990;	
		console.log(firstName, yearOfBirth);
	}
	//will be error!
	//console.log(firstName, yearOfBirth);
}

*/


let i = 23;

for (let i = 0; i < 5; i++){
	console.log(i);
}

console.log(i);

























