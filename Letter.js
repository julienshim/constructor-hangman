var Letter = function(character) {

    // A string value to store the underlying character for the letter
    this.character = character;

    //A boolean value that stores wehther the letter has been guessed yet
    this.isCorrectlyGuessed = false;

    //A function that returns the underlying character if the letter has been guessed (like an underscore) if the letter has not been guessed.
    this.showLetter = function(){
        if (this.isCorrectlyGuessed){
            console.log(this.character);
        } else {
            console.log("_");
        }
    }
//A function that takes a letter as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly.

HUH?

}


var a = new Letter("a");
a.isCorrectlyGuessed = true;
a.showLetter("a");