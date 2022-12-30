//Rock Paper Scissors


//Ask player for choice
let playerPrompt = prompt("Rock, Paper, or Scissors?")

//Take players answer, convert to all lowercase
let playerSelection = playerPrompt.toLowerCase();


//Computer Random Choice
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return ("rock");
    } else if (rand === 1) {
        return ("paper");
    } else {
        return ("scissors");
    }
}


//Function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return ("TIE GAME");
        } else if (computerSelection === "paper") {
            return ("Paper covers Rock, You Lose!");
        } else if (computerSelection === "scissors") {
            return ("Rock beats Scissors, You Win!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return ("TIE GAME");
        } else if (computerSelection === "rock") {
            return ("Paper covers Rock, You Win");
        } else if (computerSelection === "scissors") {
            return ("Scissors cuts Paper, You Lose!");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return ("TIE GAME");
        } else if (computerSelection === "rock") {
            return ("Rock beats Scissors, You Lose!");
        } else if (computerSelection === "paper") {
            return ("Scissors cuts Paper, You Win!");
        }
    } else {
        return ("Error! try again, yo.");
    }
}
// console.log(playerSelection);
console.log("Computer picks: ", computerSelection);

console.log(playRound(playerSelection, computerSelection));

//Put the playRound function in a loop to play 5 rounds


//keep the score and report winner at end.