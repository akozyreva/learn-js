// Lecture rest parametrs

/* ES5
// if we don't know number of arguments we don't write arguments in brackets
function isFullAge5() {
	// arguments like array-like structure, but not array
	console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function (cur) {
		console.log((2016 - cur) >= 18);
	})
}

isFullAge5(1990, 1999, 1965);


// ES 6
//...eyars = transform arguments into the array
function isFullAge6(...years) {
	years.forEach(cur => {
			console.log((2016 - cur) >= 18);
		}
	)
}

isFullAge6(1990, 1999, 1965);
*/

//ES5
// if we don't know number of arguments we don't write arguments in brackets
function isFullAge5(limit) {
	// arguments like array-like structure, but not array
	console.log(arguments);
	//using slice we cut 1 argument, we leave only array
	var argsArr = Array.prototype.slice.call(arguments, 1);

	argsArr.forEach(function (cur) {
		console.log((2016 - cur) >= limit);
	})
}

isFullAge5(18, 1990, 1999, 1965);


// ES 6
//...eyars = transform arguments into the array
function isFullAge6(limit, ...years) {
	years.forEach(cur => {
			console.log((2016 - cur) >= limit);
		}
	)
}

isFullAge6(18, 1990, 1999, 1965);



