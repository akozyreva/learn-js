// Lecture: arrays

const boxes = document.querySelectorAll('.box');

// ES 5
/*
//change color for boxes
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
	cur.style.backgroundColor = 'dodgerblue';
});

// change the text, using loop
for( var i = 0; i < boxesArr5.length; i++) {
	
	if(boxesArr5[i].className === 'box blue') {
		continue;
	}
	boxesArr5[i].textContent = " I changed to blue ";
	
}
*/

// ES 6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach( (cur) => cur.style.backgroundColor = 'dodgerblue');

for(const cur of boxesArr6) {
	if(cur.className.includes('blue')) {
		continue;
	}
	cur.textContent = " I changed to blue ";
}


// ES 5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
	return cur >=18;
})
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES 6
//return the index of element
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));





