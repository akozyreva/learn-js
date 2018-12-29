class Element {
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Element {
	constructor(name,
		buildYear,
		numTrees,
		area,
		age) {
		super(name, buildYear);
		this.numTrees = numTrees;
		this.area = area;
		this.age = age;
	}
	treeDensity() {
		const density = this.numTrees / this.area;
		console.log(`${this.name} has density ${density}`);
	}
}

class Street extends Element {
	constructor(name, buildYear, len, size = 3) {
		super(name, buildYear);
		this.len = len;
		this.size = size;
	}

	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(`${this.name} has size = ${classification.get(this.size)}`);
	}
}


let park1 = new Park('Park 1', 1990, 1001, 1022, 100);
let park2 = new Park('Park 22', 199, 999, 150, 20);
let park3 = new Park('Park 33', 1980, 1050, 120, 2);

let street1 = new Street('Avenue', 1992, 12, 1);
let street2 = new Street('Avenue12', 192, 12, 5);
let street3 = new Street('Avenue test', 1920, 12);
let street4 = new Street('Avenue788', 19921, 12);


//function for calc average for streets and parks
function calc(arr) {
	// good methos from es5 to calc prev + cur
	const sum = arr.reduce((prev, cur, index) =>
		prev + cur, 0);
	return [sum, sum / arr.length];
}

function reportParks(...p) {
	//density
	p.forEach(el => el.treeDensity());
	
	//average
	const ages = p.map(el => 2018- el.buildYear);
	const [totalAge, avgAge] = calc(ages);
	console.log(totalAge, avgAge);
	
	//which park is biggest
	// using method findIndex we'll find index of el
	const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
	console.log(`${p[i].name}`);
}

function reportStreets(...s) {
	//total age and average
	const [totalLength, avgLength] = calc(s.map(el => el.len));
	console.log(totalLength, avgLength);
	
	//classify Street
	s.forEach( el => el.classifyStreet());

}

reportParks(park1, park2, park3);
reportStreets(street1, street2, street3, street4);
