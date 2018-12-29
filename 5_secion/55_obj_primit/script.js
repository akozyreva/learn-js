// Primitives vs Objects
var a = 23;
// b looks on itself, so b = 23; they don't reference on any another thing
var b = a;
a = 46;
console.log(a, b);



var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1, obj2);


//Functions
var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
}

function change(a, b){
	a = 30;
	b.city = 'San Franciso';
}

change(age, obj);
console.log(age, obj);