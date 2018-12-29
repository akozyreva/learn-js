// Lecture default parametrs


// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
	
	// if construction for setting default paramett for the last name
	lastName === undefined ? lastName = 'Smith' : lastName;
	
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1993, 'Diaz');
*/

// ES 6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality) {
	
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1993, 'Diaz');