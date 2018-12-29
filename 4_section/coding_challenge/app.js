/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


find score of first player
textContent - add only text
innerHTML = add html
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' ;
// how we can store the text
var x = document.querySelector("#score-0").textContent
change css -change to display property none
document.querySelector('.dice').style.display = 'none';
*/

var scores, roundScores, activePlayer, gamePlaying, gameScore;

// 0 = firstPlayer, 1 = second player


/*Math.floor()  - обрезает десятую часть
Math.random()= от 0 до 1. *6 - от 0 до 5. +1 добавляет к сгенериров. числу +1
*/


/*callback function - is function, which is called by another function, without us!
bellow is callback function, which is called by addEventListener
*/

init();


document.querySelector('.btn-score').addEventListener('click', function () {
	gameScore = document.getElementById("input").value;
	document.getElementById('score').textContent = gameScore;
});


document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
		//generate number of dice
		var prevDice = Math.floor(Math.random() * 6) + 1;
		var dice = Math.floor(Math.random() * 6) + 1;
		//we need to print dice, because it's not displayed
		//diceDom - для сокращения места

		var prevDiceDom = document.querySelector('.dice-1');
		var diceDom = document.querySelector('.dice-2');
		prevDiceDom.style.display = 'block';
		diceDom.style.display = 'block';
		prevDiceDom.src = `dice-${prevDice}.png`;
		diceDom.src = `dice-${dice}.png`;
		
		if (dice === 1 || (prevDice === dice && dice === 6) || prevDice === 1) {
			// next player
			nextPlayer();
		} else {
			//add score
			roundScore += dice;
			roundScore += prevDice;
			document.getElementById('current-' + activePlayer).textContent = roundScore;
		}
	}

});


document.querySelector('.btn-hold').addEventListener('click', function () {
	if (gamePlaying) {
		// add Current score to global score
		scores[activePlayer] += roundScore;

		//Update the UI 
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		//Check if player won the game
		if (scores[activePlayer] >= gameScore) {
			document.getElementById('name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice-1').style.display = 'none';
			document.querySelector('.dice-2').style.display = 'none';
			document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
			document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
			gamePlaying = false;

		} else {
			//Next player
			nextPlayer();
		}
	}


});



function nextPlayer() {

	//example - ternary operator, simple way of writing!!!	
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	//обнуляем текущий счет у игроков
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	//delete active class from active player using toggle
	//document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	//display none the dice of previous player
	//i acn't see dice 1, it's not good
	//document.querySelector('.dice').style.display = 'none';
};

//init without ()!
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
	gameScore = 100;
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	//default settings - all zero
	
	document.querySelector('.dice-1').style.display = 'none';
	document.querySelector('.dice-2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.getElementById('score').textContent = gameScore;

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');


};
