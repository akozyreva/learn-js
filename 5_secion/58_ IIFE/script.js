// IIFE - функции, которые вызываются тут же, как были объявлены
//Immediately invoked fucntion expression
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}

game();

//example of iife
(function() {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

(function(goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);