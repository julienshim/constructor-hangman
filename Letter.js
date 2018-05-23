var Letter = function(character) {

    // A string value to store the underlying character for the letter
    this.character = character;

    //A boolean value that stores wehther the letter has been guessed yet
    this.isCorrectlyGuessed = false;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.showLetter = function(){
        if (this.isCorrectlyGuessed){
            return this.character + " ";
        } else if (character === " ") { //accounts for spaces
            return "   ";
        } else {
            return "_ ";
        }
    }
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    this.guessedLetterCheck = function(characterGuessed){
        if (characterGuessed.toUpperCase() === this.character.toUpperCase()){ //Case-insensitive comparison
            this.isCorrectlyGuessed = true;    
        }
    }
}

module.exports = Letter;