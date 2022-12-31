//Rock Paper Scissors
let playerScore = 0
let computerScore = 0

//LOOP THE GAME FUNCTION 5 TIMES
for (let i = 0; i < 5; i++) {
    //ASK PLAYERS CHOICE
    let playerPrompt = prompt("Rock, Paper, or Scissors?");
    //LOWERCASE USER INPUT
    let playerSelection = playerPrompt.toLowerCase();
    //GET RANDOM COMPUTER CHOICE
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
    //STORE COMPUTER CHOICE
    const computerSelection = getComputerChoice();
    //CREATE FUNCTION TO PLAY A ROUND
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return ("TIE GAME");
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            return ("Paper covers Rock, You Lose!");
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            return ("Rock beats Scissors. You Win!");
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            return ("Paper covers Rock. You Win!");
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return ("Scissors cuts Paper. You Lose!");
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return ("Rock beats Scissors. You Lose!");
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore, computerScore
            playerScore++
            return ("Scissors cuts Paper. You Win!");
        } else {
            return ("Try again, yo.");
        }
    }
    //CONSOLE.LOG THE RESULTS
    console.log("Computer picks: ", computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Players Score is ", playerScore);
    console.log("Computer Score is ", computerScore);
}
//CHECK IF GAME IS OVER
function isGameOver() {
    if (playerScore === computerScore) {
        return ("TIE GAME. PLAY AGAIN");
    } else if (playerScore > computerScore) {
        return ("YOU WIN");
    } else {
        return ("You lose sucka!")
    }
}

console.log(isGameOver())