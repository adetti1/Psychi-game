var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins=0;
let losses = 0;

let guessesLeft = 9; 

let guessDone = [] ;

let userGuesses = null ;

let theLetterbeingGuessed = alphabets [math.floor(mTH.random()* alphabets.length)];

console.log ("wins:" + "Losses:" + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessDone + " Computer picked: " + theLetterbeingGuessed
); 

document.onkeyup = function(event) {
// 
	let userGuesses = string.fromCharCode(event.keycode).toLowerCase();

}

if ((guessesSoFar.indexOf(userGuesses) < 0 && alphabets.indexOf(userGuesses) >= 0) {
		guessDone [guessDone.length]=userGuesses) ; 
guessesLeft -- ;
}

if ((guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9 ;
		guessesSoFar = [];
		letterToBeGuessed = alphabetsMath.floor(Math.random() * alphabets.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessDone + " Computer picked: " + theLetterbeingGuessed);
	})