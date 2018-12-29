//Lecture Bind, Call, apply
var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay){
		if(style === 'formal'){
			console.log(`Good ${timeOfDay} I\m super ${this.name} ${this.job} ${this.age}`);
		}else if(style === 'friendly'){
			console.log(`Hey! What\'s up? I\m super ${this.name} ${this.job} ${this.age}. Have a nice ${timeOfDay}`);
		}
	}
};


/*
The only difference is:
call() takes any function arguments separately.
apply() takes any function arguments as an array.
*/

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};
john.presentation('formal', 'morning');

//call method for another object
//borrowing method
john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon'])

//bind meothod for copying function and store it
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
johnFriendly('night');



//=======================
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}


// arrayCalc has only one argument for isFullAge
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);