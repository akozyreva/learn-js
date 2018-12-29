calculateAge(1990);

function calculateAge(year){
	console.log(2016 - year);
}

var retirement = function(year){
	console.log(65 - (2016 - year));
}

retirement(1990);


//it's undefined, but no bugs!!
console.log(age);
var age = 23;


function foo(){
	var age = 65;
	console.log(age);
}

foo();
//age = 23, because var age is gloabal
console.log(age);