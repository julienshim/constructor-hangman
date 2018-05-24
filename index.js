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
var guessArray = [];
var guessesLeft = 10;


var userPrompt = function() { 
    console.log("\n"+randomWord.displayWord()+"\n");
    if (randomWord.displayWord().includes("_") === false) {
        result("win");
    } else if(guessesLeft === 0) {
        result("lose");
    } else {
        function validateUserGuess(input){
            if ( input.length > 1 ) {
                return "Please enter a single letter." //If more than one input
            } else if( /^[a-zA-Z]/.test(input) ){
                    return true;
            } else {
                return "Please enter a letter." //If not a letter.
            }
        }
        inquirer.prompt(
            [{
                message: "Pick a letter!",
                type: "input",
                name: "userGuess",
                validate: validateUserGuess
            }]
            ).then(answers => {
            if ( guessArray.indexOf(answers.userGuess) > -1 ) {
                console.log("You already guess that letter.")
            } else {
                guessArray.push(answers.userGuess.toLowerCase());
                if (randomWord.lettersCheck(answers.userGuess)) {
                    statusDisplay("Correct!");
                } else {
                    guessesLeft--;
                    statusDisplay("Wrong! Try again.");
                }
            }
            userPrompt();
            });
    }
}

function statusDisplay(guessFeedback){
    console.log(`\n${guessFeedback}`);
    console.log(`Guesses Left: ${guessesLeft}`);
    console.log(`Guesses made: ${guessArray.join(', ')}`);
}

function result(end){
    if(end === "win"){
        continuePrompt("Congratulations! You got it right!");
    } else {
        continuePrompt("You didn't get it right, but it was a great effort!");
    }
}

function continuePrompt(endMessage) {
    inquirer.prompt([
        {
        message: `${endMessage} Play again?"`,
        type: "confirm",
        name: "userConfirm"
        }
        ]).then(answers => {
                if(answers.userConfirm === true) {
                    guessArray = [];
                    guessesLeft = 10;
                    randomWord = new Word(NBA[Math.floor(Math.random() * NBA.length)]);

// This is spaced this way because the ticks are white space sensitive.
console.log(`
/////////////////////
/     Next Team     /
/////////////////////
`);
                    userPrompt();
                } else {
                    console.log("\nThanks for playing!\n")
                }
            });

}

console.log(`
╔╗╔╔╗ ╔═╗            
║║║╠╩╗╠═╣            
╝╚╝╚═╝╩ ╩            
╦ ╦╔═╗╔╗╔╔═╗╔╦╗╔═╗╔╗╔
╠═╣╠═╣║║║║ ╦║║║╠═╣║║║
╩ ╩╩ ╩╝╚╝╚═╝╩ ╩╩ ╩╝╚╝
`);

userPrompt();