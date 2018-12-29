//http://codingheroes.io/resources/
let height1 = 200;
let height2 = 200;
let age1 = 20;
let age2 = 25;
let score1 = height1 + age1 * 5;
let score2 = height2 + age2 * 5;
let height3 = 200;
let age3 = 21;
let score3 = height3 + age3*5;
if (score1 === score2 && score1 === score3 && score2 === score3r){
	console.log( score1 + score2 + 'winners 2')
} else if( score1 > score2 && score1 > score3){
	console.log(score1 + 'winner1')
} else if (score2 > score3 && score2 > score1){
	console.log(score2 + 'winner2')
} else if( score1 === score2 && score1 > score3) {
	console.log( score1, score2, 'winners 1 and 2');
} else if( score1 === score3 && score1 > score2) {
	console.log( score1, score2, 'winners 1 and 3');
} else if( score2 === score3 && score2 > score1) {
	console.log( score1, score2, 'winners 2 and 3');
}
else{
	console.log(score3 + 'score3');
}
console.log(score1, score2, score3);
//'It\'s challenge'