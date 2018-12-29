//Lecture: Closures

function retirement(retirementAge) {
	var a = ' years left until retirement';
	return function (yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
//retirement(66)(1990);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


console.log('==========================')
function interviewQuestion(job) {
	var questions = {
		designer: "can you please explain what UX is?",
		teacher: "what subject? do you teach"
	};
	return function (name) {
		//console.log(job, questions[job]);
		if (questions[job] != undefined) {
			console.log(`${name} ${questions[job]} `);
		} else {
			console.log(`${name} What do you do? `);
		}

	}
}
var interviewDesigner = interviewQuestion('teacher');
interviewDesigner('Jack');
//interviewQuestion('teacher')('Jack');
var interviewExpert = interviewQuestion('expert');
interviewExpert('Julia');
