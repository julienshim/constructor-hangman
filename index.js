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
    } else {
        function validateUserGuess(input){
            if ( input.length > 1 ) {
                return "Please input only one letter."
            } else if( /^[a-zA-Z]/.test(input) ){
                    return true;
            } else {
                return "Your guess should be a letter!"
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
                console.log("You guessed that letter already!")
            } else {
                guessArray.push(answers.userGuess);
                if (randomWord.lettersCheck(answers.userGuess)) {
                    console.log("Correct!");
                } else {
                    
                    guessesLeft--;
                    if(guessesLeft === 0) {
                        result("lose");
                    } else {
                        console.log("Incorrect!");
                        console.log(`Guesses Left: ${guessesLeft}`);
                    }
                    
                }
            }
            userPrompt();
            });
    }
}

function result(end){
    if(end === "win"){
        console.log("You answered correctly");
        continuePrompt();
    } else {
        console.log("You lose!");
        continuePrompt();
    }
}

function continuePrompt() {

    var questions = 
    
    inquirer.prompt([
        {
        message: "You answered correctly! Play again?",
        type: "input",
        name: "userConfirm"
        }
        ]).then(answers => {
                if(answers.userConfirm === "y") {
                    guessArray = [];
                    guessesLeft = 10;
                    randomWord = new Word(NBA[Math.floor(Math.random() * NBA.length)]);
                    userPrompt();
                } else {
                    return false;
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