// Function Constructor

let Question = function (question, answers, correctAnswer) {
	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
}

//create function for console.log question

Question.prototype.view = function () {
	console.log(this.question);
	// length of answers
	let len = Object.keys(this.answers).length;
	for (let i = 0; i < len; i++) {
		console.log(`${i} ${this.answers[i]}`);
	}
}

let quesFirst = new Question('What is my name?', {
		0: "Anna",
		1: "Kate",
		2: "Mike"
	},
	0);

let quesSecond = new Question("What is my city of birth?", {
		0: "Berlin",
		1: "London",
		2: "Moscow"
	},
	2);
let quesThird = new Question("What have i?", {
		0: "Cat",
		1: "Dog",
		2: "Pig"
	},
	0);

let arrQuestions = [quesFirst, quesSecond, quesThird];
let score = 0;
function randomQuestion(arrQuestions) {	
	let n = Math.floor(Math.random() * 3);
	console.log("===================")
	console.log(`Question ${n}`);
	let question = arrQuestions[n];
	question.view();
	return function (val) {	
		//console.log(val, arrQuestions[n].correctAnswer);
		if (question.correctAnswer == val) {
			score ++;
			console.log("Correct answer");
		} else if (val === 'exit'){
			return
		} 
		else {
			console.log("Answer is not correct");
		}
		console.log(`You score is ${score}`);
		(function () {
			let answer = randomQuestion(arrQuestions);
			let inp = prompt("Please answer the question");
			if (inp === 'exit') {
				return;
			} else {
				answer(inp);
			}
		})();
	}
}


let answer = randomQuestion(arrQuestions);
let inp = prompt("Please answer the question");
if(inp != 'exit'){
	answer(inp);
}

