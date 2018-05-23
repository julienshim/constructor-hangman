var Word = require("./Word.js");
var inquirer = require("inquirer");

var NBA = [
"Atlanta Hawks",
"Boston Celtics",
"Brooklyn Nets",
"Charlotte Hornets",
"Chicago Bulls",
"Cleveland Cavaliers",
"Dallas Mavericks",
"Denver Nuggets",
"Detroit Pistons",
"Golden State Warriors",
"Houston Rockets",
"Indiana Pacers",
"LA Clippers",
"LA Lakers",
"Memphis Grizzlies",
"Miami Heat",
"Milwaukee Bucks",
"Minnesota Timberwolves",
"New Orleans Hornets",
"New York Knicks",
"Oklahoma City Thunder",
"Orlando Magic",
"Philadelphia Sixers",
"Phoenix Suns",
"Portland Trail Blazers",
"Sacramento Kings",
"San Antonio Spurs",
"Toronto Raptors",
"Utah Jazz",
"Washington Wizards"]

var randomWord = new Word(NBA[Math.floor(Math.random() * NBA.length)]);

//To speed up testing:
randomWord.chicken("r");
randomWord.chicken("s");
randomWord.chicken("t");
randomWord.chicken("l");
randomWord.chicken("n");
randomWord.chicken("e");
randomWord.chicken("a");




var userPrompt = function() { 
    console.log(randomWord.displayWord());
    if (randomWord.displayWord().includes("_")) {
        function validateUserGuess(input){
            if(/^[a-zA-Z]/.test(input)){
                return true;
            } else {
                return "Your guess should be a letter!"
            }
        }

        var questions = [{
            message: "Pick a letter!",
            type: "input",
            name: "userGuess",
            validate: validateUserGuess
        }]

        inquirer.prompt(questions).then(answers => {
        randomWord.chicken(answers.userGuess);
        userPrompt();
        });
    } else {
        // end game
    }

}

userPrompt();

//The file containing the logic for the course of the game, which depends on `Word.js` and:

// Randomly selections word and uses the `Word` constructor to store it.

//Prompts the user for each guess and keeps track of user's remaining gueses.