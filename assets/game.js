// Create array for cities

var cities = ["Tokyo", "Seoul", "Osaka", "Manila", "Mumbai", "Dehli", "Jakarta", "Lagos", "Caulcutta", "Cairo", "Moscow", "Shanghai", "Paris", "Istanbul", "Beijing", "Chicago", "London", "Tehran", "Bogota", "Lima", "Santiago", "Paris", "Rome"];

// Create blank array for letters guessed (push one var {i.e. letter guessed to an array})

// Create array for letters of city

// Create array of all possible letters

var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var cityLetters =[];

var guessedArray = [];

// var userGuess = event.key;

var noOfGuesses = 0;

// Press any key to get started

	// wrap this in a function


// Generate random index position from array
	var city = cities[Math.floor(Math.random()*cities.length)];
	var city = city.toLowerCase();

console.log(city);

// Split the word into letters

for (var i = 0; i < city.length; i++) {
	cityLetters.push(city.charAt(i));
}

console.log(cityLetters);

// Display number of letters in word as that many underscores 

	// (forEach function (print _ for every letter)

	// Count number of letters in word

console.log(cityLetters.length)

	// Generate that many underscores



	// Change html to underscores 

// Listen to key pressed
document.onkeyup = function(event) {

	// use that event.key as a variable 
	if (event.key === lettersGuessed[event.key]) {

	}
// Check if userGuess matches anything in guessedArray

	// IF it does match

		// do nothing (maybe go back to "listen to key pressed")

	// IF it doesn't

		// push that variable into guessedArray

// Check if letter pressed matches any of the letters in the word

// IF letter matches

	// find the underscore of the position of the letter(s)	

	// change underscore(s) to that letter

// If letter doesn't match

	// add to letters already guessedArray

	// subtract one from guesses remaining
}

// If all letters guessed before guesses remaining = 0 (when guessedArray.length = original number of guesses)

	// (If guessedArray.length = number of guesses)

	// add 1 to wins

	// display picture of winning word

	// change text at top to winning word

	// clear guessedArray

	// reset guesses remaining to 0

	// go back to step 2 (generate random word from list)

// If guesses remaining = 0 before all letters guessed

	// display game over


