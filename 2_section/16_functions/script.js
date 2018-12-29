//http://codingheroes.io/resources/
//https://learn.javascript.ru/function-declaration-expression

function calculateAge(yearOfBirth){
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn, ageMike, ageMary);

function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age;
	if(retirement > 0){
		console.log(name, retirement);
	}else{
		console.log(`${name} already retired`);
	}
	
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1948);