// Lecture Maps
// new data-structure in es 6

const question = new Map();
question.set('question', 'What is the official name of the latest version JS?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong');

console.log(question.get('question'));
console.log(question.size);


/*if (question.has(4)) {
	//delete value by keyword
	question.delete(4);
}

//delete question
question.clear()

question.forEach((value,key)=>
	console.log(`This is key ${key} and value ${value}`));
*/

for (let [key,value] of question.entries()) {
	if(typeof(key) === 'number') {
		console.log(`${value}`);
	}
}

const ans = parseInt(prompt("Write the correct answer"));

console.log(question.get(
	ans === question.get('correct')
));