//http://codingheroes.io/resources/
//https://learn.javascript.ru/function-declaration-expression

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

/*for (var i = 0; i < names.length; i++){
	console.log(names[i]);
}

console.log('-=--');
for(var i = names.length - 1; i >= 0; i--){
	console.log(names[i]);
}
*/
var i = 0;
while ( i < names.length ){
	console.log(names[i]);
	i++;
}

for (var i = 0; i <= 5; i++){
	console.log(i);
	
	if(i === 3){
		break;
	}
}

	 
for (var i = 0; i <= 5; i++){
	
	if(i === 3){
		// 3 not print because of continue (skip step)
		continue;
	}
	console.log(i);
}