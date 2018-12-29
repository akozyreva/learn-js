// lecture : string

let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES 5
console.log("test test " + firstName + lastName + yearOfBirth + calcAge(yearOfBirth));

// ES 6

console.log(`${firstName} bla bla ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
//new mothod - if it starts with J letter
let a = n.startsWith('j');
let b  = n.endsWith('h');
let c = n.includes(' ');
//repeat string 5 times
let d =  firstName.repeat(5);
console.log(a, b, c, d);












