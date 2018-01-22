// variables

var allCities = ["tokyo", "seoul", "osaka", "manila", "mumbai", "dehli", "jakarta", "lagos", "calcutta", "cairo", "moscow", "shanghai", "paris", "istanbul", "beijing", "chicago", "london", "tehran", "bogota", "lima", "santiago", "paris", "rome"];

var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersAlreadyGuessed = [];

var correctLetters = [];

var correctLetterCount = 0;

var correctGuesses = [];

var incorrectLetters = [];

var guessesLeft = 10;

var winCount = 0;

var city = chooseCity();

var wordGuessed;

var underscoreCount = correctLetters.length;

var pressKeyToStart = document.getElementById("pressKeyToStart");

var wins = document.getElementById("wins");

var guessesRemaining = document.getElementById("guessesRemaining");

var lettersGuessed = document.getElementById("lettersGuessed");
 
var correctPlace1 = document.getElementById("correctPlace1"); 

var correctPlace2 = document.getElementById("correctPlace2"); 

var correctPlace3 = document.getElementById("correctPlace3"); 

var correctPlace4 = document.getElementById("correctPlace4"); 

var correctPlace5 = document.getElementById("correctPlace5"); 

var correctPlace6 = document.getElementById("correctPlace6"); 

var correctPlace7 = document.getElementById("correctPlace7"); 

var correctPlace8 = document.getElementById("correctPlace8"); 


// function to choose a city

function chooseCity() {
    return allCities[Math.floor(Math.random() * allCities.length)];
    allCities.pop(city);
}


// function to turn word into letters

function wordIntoLetters() {
	for (var i = 0; i < city.length; i++) {
	correctLetters.push(city.charAt(i));
}
}


// function to generate underscores

 function generateUnderscores() {
	if (typeof correctLetters[0] === "string") {
		correctPlace1.textContent = "_";
	}
	if (typeof correctLetters[1] === "string") {
		correctPlace2.textContent = "_";
	}
	if (typeof correctLetters[2] === "string") {
		correctPlace3.textContent = "_";
	}
	if (typeof correctLetters[3] === "string") {
		correctPlace4.textContent = "_";
	}
	if (typeof correctLetters[4] === "string") {
		correctPlace5.textContent = "_";
	}
	if (typeof correctLetters[5] === "string") {
		correctPlace6.textContent = "_";
	}
	if (typeof correctLetters[6] === "string") {
		correctPlace7.textContent = "_";
	}
	if (typeof correctLetters[7] === "string") {
		correctPlace8.textContent = "_";
	}
}


// function to confirm key is a letter

function testIfLetter() {
	for (var i = 0; i < possibleLetters.length; i++) {
		if (event.key === possibleLetters[i]) {
			return true;
		}
	}
}


// function to send letter to lettersGuessed array

function sendToGuessed() {
	lettersAlreadyGuessed.push(event.key);
}


// function to compare key to letters already guessed

function testIfGuessed() {
	for (var i = 0; i < lettersAlreadyGuessed.length; i++) {
		if (event.key === lettersAlreadyGuessed[i]) {
			return true;
		}
	}
}


// function to compare key to correct letters

function testIfCorrect() {
	for (var i = 0; i < correctLetters.length; i++ ) {
		if (event.key === correctLetters[i]) {
			return true;	
		}
	}
}


// function to send to correctGuesses array

function sendToCorrectGuesses() {
	correctGuesses.push(event.key);
}


// function to update DOM with correct letter(s) guessed

function correctPlaceUpdate() {
	if (correctLetters[0] === event.key) {
		correctPlace1.textContent = event.key;
		correctLetterCount++;
	}
	if (correctLetters[1] === event.key) {
		correctPlace2.textContent = event.key;
		correctLetterCount++;
	}
	if (correctLetters[2] === event.key) {
		correctPlace3.textContent = event.key;
		correctLetterCount++;
	}
	if (correctLetters[3] === event.key) {
		correctPlace4.textContent = event.key;
		correctLetterCount++;
	}
	if (correctLetters[4] === event.key) {
		correctPlace5.textContent = event.key;
		correctLetterCount++;
	}
	if (correctLetters[5] === event.key) {
		correctPlace6.textContent = event.key;
		correctLetterCount++;
	}
	if (correctLetters[6] === event.key) {
		correctPlace7.textContent = event.key;
		correctLetterCount++;
	}
	if (correctLetters[7] === event.key) {
		correctPlace8.textContent = event.key;
		correctLetterCount++;
	}
}


// function to add to incorrect letters array

function addToIncorrectLetters() {
	incorrectLetters.push(event.key);
}


// function to update DOM with letters guessed

function updateLettersGuessed() {
	lettersGuessed.textContent = incorrectLetters;
}


// function to change number of guesses remaining

function changeGuessesLeft() {
	guessesLeft--;
}


// function to update DOM with number of guesses remaining

function updateGuessesRemaining() {
	guessesRemaining.textContent = guessesLeft;
}


// function to recognise when word is guessed 

function fullWordGuessed() {
	return correctLetters.length - correctLetterCount
}

var wordGuessed = fullWordGuessed();


// function to change winCount

function changeWinCount() {
	winCount++;
}

// function to update DOM with wins

function updateWins() {
	wins.textContent = winCount;
}

// function to reset after word guessed

function bigReset() {
	lettersAlreadyGuessed.length = 0;
	correctLetters.length = 0;
	correctGuesses.length = 0;
	incorrectLetters.length = 0;
	updateLettersGuessed();
	guessesLeft = 10;
	updateGuessesRemaining();
	correctLetterCount = 0;
}

// function to display game over

function gameOver() {
	document.getElementById("game").innerHTML = "<h3> GAME OVER </h3>";
}

// function to prompt for new word

function pressForNewWord() {
	pressKeyToStart.textContent = "NICE WORK! PRESS C TO GO SOMEWHERE ELSE"
}

// function to get rid of press key prompts

function hidePressKey() {
	pressKeyToStart.textContent = " "
}



// action!

chooseCity();

wordIntoLetters();

generateUnderscores();

document.onkeyup = function(event) {

	var isLetter = testIfLetter();

	var alreadyGuessed = testIfGuessed();

	var correctGuess = testIfCorrect();

	hidePressKey();

	if (correctLetters.length - correctLetterCount > 0) {

		if (guessesLeft > 0) {

			testIfLetter();

			if (isLetter === true) {
				sendToGuessed();
				testIfGuessed();
				if (alreadyGuessed !== true) {
					testIfCorrect();
					if (correctGuess === true) {
						sendToCorrectGuesses();
						correctPlaceUpdate();	
					}
					else {
						addToIncorrectLetters();
						updateLettersGuessed();
						changeGuessesLeft();
						updateGuessesRemaining();
					}
				}
			}
		}
		else {
			gameOver();
		}
	}
	else {
		pressForNewWord();
		document.onkeyup = function(event) {
			bigReset();
			changeWinCount();
			chooseCity();
			wordIntoLetters();
			generateUnderscores();
		}
	}
}
