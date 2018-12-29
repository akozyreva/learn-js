//Functions returning functions

function interviewQuestion(job){
	if(job === 'designer'){
		return function(name){
			console.log(`${name} can you please explain what UX is? `);
		}
	} else if(job === 'teacher'){
		return function(name){
			console.log(`${name} what subject? do you teach`);
		}
	} else{
		return function(name){
			console.log(`${name} What do you do?`);
		}
	}
}

//teacherQuestion - мы присвоили ей кишки функции!
var teacherQuestion = interviewQuestion('teacher');
console.log(interviewQuestion);
//а здесь уже мы обращаемся ко вторым функциям и получаем результат
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Mike');

//another way to name it
interviewQuestion('teacher')('Mark');