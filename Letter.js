var Letter = function(character) {

    // A string value to store the underlying character for the letter
    this.character = character;

    //A boolean value that stores wehther the letter has been guessed yet
    this.isGuessed = false;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.displayLetter = function(){
        if (this.isGuessed){
            return this.character + " ";
        } else if (character === " ") { //accounts for spaces
            return "  ";
        } else {
            return "_ ";
        }
    }
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    this.guessedCheck = function(characterGuessed){
        if (characterGuessed.toUpperCase() === this.character.toUpperCase()){ //Case-insensitive comparison
            this.isGuessed = true;
            return true;
        }
    }
}

module.exports = Letter;