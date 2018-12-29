// Class for park, street

class Place {
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Place {
	constructor(name,
		buildYear,
		numberOfTrees,
		parkArea,
		age) {
		super(name, buildYear);
		this.numberOfTrees = numberOfTrees;
		this.parkArea = parkArea;
		this.age = age;
		this.density = numberOfTrees / parkArea;
	}
}

class Street extends Place {
	constructor(name, buildYear, length, size) {
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}
}

let park1 = new Park('Park 1', 1990, 1001, 1022, 100);
let park2 = new Park('Park 22', 199, 999, 150, 20);
let park3 = new Park('Park 33', 1980, 1050, 120, 2);

let street1 = new Street('Avenue', 1992, 12, 100);
let street2 = new Street('Avenue12', 192, 12, 200);
let street3 = new Street('Avenue test', 1920, 12);
let street4 = new Street('Avenue788', 19921, 12);


function parkReport(...parks) {
	console.log("Park report");
	let sum = 0;
	parks.map((el) => {
		sum += el.age;
		if (el.numberOfTrees > 1000) {
			console.log(`${el.name} has more 1000 trees`)
		}
		console.log(`${el.name} has ${el.density}`);
	});
	console.log(`Our ${parks.length} parks has average ${(sum / parks.length)}`);
	console.log('==============');
};

parkReport(park1, park2, park3);

const question = new Map();
question.set(100, 'tiny');
question.set(200, 'small');
question.set(300, 'normal');
question.set(400, 'big');
question.set(500, 'huge');
question.set(undefined, 'normal');


function streetReport(...streets) {
	console.log("Street report");
	let sum = 0;
	streets.map((el) => {
		sum += el.length;
		for (let [key, value] of question.entries()) {
			if (el.size <= key) {
				console.log(`${el.name} has ${value} size`);
				break;
			}  if (el.size === undefined) {
				console.log(`${el.name} has ${question.get(el.size)} size`);
				break;
			}
		}
	});
	console.log(`Our ${streets.length} parks has average ${(sum / streets.length)}`);
	console.log(`Total len ${sum}`);
	console.log('==============');
};

streetReport(street1, street2, street3, street4)
