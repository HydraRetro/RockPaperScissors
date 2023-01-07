//Rock Paper Scissors

//Player Score
let playerScore = 0;
//Computer Score
let computerScore = 0;
//Results
let result;
//Max Score 
let winningScore = 3;
//Player Selection
let computerSelection;
let playerSelection;

//Event listener for all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {

    playerSelection = button.textContent;//Gets player value from button id
    computerSelection = getComputerChoice();//Gets computer value from function
    playRound(playerSelection, computerSelection);//Runs the game function once
    playerChoice.textContent = playerSelection;//Displays player choice
    computerChoice.textContent = computerSelection;//Displays computer choice
    resultDisplay.textContent = result;//Displays the result of one game
    updateScores(playerScore, computerScore);//Displays updated scores
    getWinner(winningScore);

    // CONSOLE.LOG THE RESULTS - TEMP
    // console.log("Player Picks: ", playerSelection);
    // console.log("Computer picks: ", computerSelection);
    // console.log("Players Score is ", playerScore);
    // console.log("Computer Score is ", computerScore);
    // console.log(resultDisplay.innerText);

}))

//GET RANDOM COMPUTER CHOICE
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return ("ROCK");
    } else if (rand === 1) {
        return ("PAPER");
    } else {
        return ("SCISSORS");
    }
}

//CREATE FUNCTION TO PLAY A ROUND
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = ("It's a Draw.");
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore += 1;
        result = ("Paper covers Rock, You Lose!");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore += 1;
        result = ("Rock beats Scissors. You Win!");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore += 1;
        result = ("Paper covers Rock. You Win!");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore += 1;
        result = ("Scissors cuts Paper. You Lose!");
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore += 1;
        result = ("Rock beats Scissors. You Lose!");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore += 1;
        result = ("Scissors cuts Paper. You Win!");
    } else {
        result = ("Try again, yo.");
    }
}

//UPDATE SCORES
function updateScores(playerScore, computerScore) {
    playerScoreDisplay.innerHTML = playerScore;
    playerScoreDisplay.style.color = '#ffffe0';
    computerScoreDisplay.innerHTML = computerScore;
    computerScoreDisplay.style.color = '#ffffe0';
}

//CHECK FOR WINNER AND DISPLAY RESULTS
function getWinner(winningScore) {
    if (playerScore === winningScore) {
        const winnerDisplay = document.getElementById('winner');
        const content = document.createElement('h3');
        content.textContent = "Game Over. You Win!";
        content.style.color = "green";
        playerScoreDisplay.style.color = 'green';
        computerScoreDisplay.style.color = 'red';
        winnerDisplay.appendChild(content);
        //Disables Buttons
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;

    } else if (computerScore === winningScore) {
        const winnerDisplay = document.getElementById('winner');
        const content = document.createElement('h3');
        content.textContent = "Game Over. You Lose!";
        content.style.color = "red";
        playerScoreDisplay.style.color = 'red';
        computerScoreDisplay.style.color = 'green';
        winnerDisplay.appendChild(content);
        //Disables Buttons
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
}

//UI
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');
const resetButton = document.querySelector('#resetButton');

//RESET BUTTON
resetButton.addEventListener('click', reset)
function reset() {
    location.reload();
}
