var Letter = require("./Letter.js");

var Word = function(chicken) {
    
    //An array of `new` Letter objects representing the letters of the underlying word

    this.letterArr = [];

    for (var i = 0; i < chicken.length; i++) {
        var newLetter = this.letterArr.push(new Letter(chicken[i]));
    }

    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    this.displayWord = function() {
        var string = "";
        for (var i = 0; i < this.letterArr.length; i++) {
            string = string += this.letterArr[i].displayLetter();
        }
        return string;
    }

    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

    this.lettersCheck = function(letter) {
        isCorrect = false;
        for (var i = 0; i < this.letterArr.length; i++) {
            if(this.letterArr[i].guessedCheck(letter)){
                isCorrect = true;
            }
        }
        return isCorrect;
    }
}

module.exports = Word;
