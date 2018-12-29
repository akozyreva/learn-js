//http://codingheroes.io/resources/
let years = [1965, 2008, 1992];
let years1 = [1980, 1980, 2000];
let ages = [];
/*for (let i = 0; i < years.length; i++) {
	ages.push(2018 - years[i]);
}
for (let i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log(`full ${ages[i]}`);
	} else {
		console.log(`not full ${ages[i]}`);
	}
}
*/
function printFullAge(years) {
	let full = [];
	for (let i = 0; i < years.length; i++) {
		ages.push(2018 - years[i]);
		if (ages[i] >= 18) {
			console.log(`full ${ages[i]}`);
			full.push(true);
		} else {
			console.log(`not full ${ages[i]}`);
			full.push(false);
		}
	}
	return full;
}
let full_1 = printFullAge(years);
let full_2 = printFullAge(years1);
console.log(full_1, full_2);