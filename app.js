//Rock Paper Scissors
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');

//Player Score & Display
let playerScore = 0
playerScoreDisplay.textContent = playerScore;
//Computer Score & Display
let computerScore = 0
computerScoreDisplay.textContent = computerScore;
//Results
let result = 0;
//Max Score 
let maxScore = 5;

//Event listener for all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // playerChoice.textContent = button.id;//print player choice on display
        // console.log(button.id);//TEMP console log

        function game() {
            let playerSelection = button.id;
            playerChoice.textContent = playerSelection;
            let computerSelection = getComputerChoice();
            computerChoice.textContent = computerSelection;
            return playRound(playerSelection, computerSelection);

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
        }
    })
})






//CONSOLE.LOG THE RESULTS - TEMP
console.log("Computer picks: ", computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log("Players Score is ", playerScore);
console.log("Computer Score is ", computerScore);

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

//RESET BUTTON
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', reset)
//TRY TO RESET WITHOUT RELOADING WHOLE PAGE.
function reset() {
    location.reload();
}
