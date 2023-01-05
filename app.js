//Rock Paper Scissors

//Player Score
let playerScore = 0;
//Computer Score
let computerScore = 0;
//Results
let result;
//Max Score 
let winningScore = 6;

//Player Selection
let computerSelection;
let playerSelection;

//Event listener for all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {

    playerSelection = button.id;//Gets player value from button id
    computerSelection = getComputerChoice();//Gets computer value from function
    playRound(playerSelection, computerSelection);//Runs the game function once
    playerChoice.textContent = playerSelection;//Displays player choice
    computerChoice.textContent = computerSelection;//Displays computer choice
    resultDisplay.textContent = playRound(playerSelection, computerSelection);//Displays the result of one game
    updateScores(playerScore, computerScore);//Displays updated scores

    // CONSOLE.LOG THE RESULTS - TEMP
    console.log("Player Picks: ", playerSelection);
    console.log("Computer picks: ", computerSelection);
    console.log("Players Score is ", playerScore);
    console.log("Computer Score is ", computerScore);
    console.log(resultDisplay.innerText);

}))

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
        return ("It's a Draw.");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return ("Paper covers Rock, You Lose!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return ("Rock beats Scissors. You Win!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return ("Paper covers Rock. You Win!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return ("Scissors cuts Paper. You Lose!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return ("Rock beats Scissors. You Lose!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return ("Scissors cuts Paper. You Win!");
    } else {
        return ("Try again, yo.");
    }
}

//UPDATE SCORES
function updateScores(playerScore, computerScore) {
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
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



//UI
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');

//RESET BUTTON
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', reset)
function reset() {
    location.reload(); //WILL TRY TO RESET WITHOUT RELOADING WHOLE PAGE.
}
