//global context of window!
//it's window - default global object
console.log(this);

//it's regular function, that's why  this is refer to window
function calculateAge(year) {
	console.log(2016 - year);
	console.log(this);
}

calculateAge(1990);

var john = {
	name: 'John',
	yearOfBirth: 1990,
	calculateAge: function(){
		console.log(this);
		console.log(2016 - this.yearOfBirth);
		
		function innerFucntion(){
			console.log(this);
		}
		//it's not a method, it's a regular function, that's why this refer to window object
		innerFucntion();
	}
}

john.calculateAge();

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

//we borrow method from john
mike.calculateAge = john. calculateAge;
mike.calculateAge();







