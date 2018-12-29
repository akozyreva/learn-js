// Lecture spread operators

function addFourAges (a, b, c, d) {
	return a + b+ c+ d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES 5 
var ages = [18, 30, 12, 21];
// apply takes any function arguments as an array
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// Es 6
//spread operator make the same as apply method
const sum3 = addFourAges(...ages);
console.log(sum3);

//spread two arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith,'Lily', ...familyMiller];
console.log(bigFamily);

//spread is useful for nodes
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
// for uniting spread = we find h and all elements with class = box
const all = [h, ...boxes];

//convert all to aray
Array.from(all).forEach( (cur) => cur.style.color = 'purple');