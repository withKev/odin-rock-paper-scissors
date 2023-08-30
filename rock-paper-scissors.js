let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //Randomly choose 0, 1 or 2

  if (randomNumber === 0) {
    computerSelection = "rock";
  } else if (randomNumber === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  return computerSelection;
}

function getPlayerChoice() {
  let userInput = prompt("Rock, Paper or Scissors?");
  playerSelection = userInput.toLowerCase();
  return playerSelection;
}

function getResult() {
  let a = playerSelection;
  let b = computerSelection;
  let result = "";

  if (a === b) {
    return "It's a tie!";
  } else if (a === "rock" && b === "scissors") {
    playerScore++;
    result = "You won! Rock beats Scissors!";
  } else if (a === "paper" && b === "rock") {
    playerScore++;
    result = "You won! Paper beats Rock!";
  } else if (a === "scissors" && b === "paper") {
    playerScore++;
    result = "You won! Scissors beats Paper!";
  } else if (a === "rock" && b === "paper") {
    computerScore++;
    result = "Aw too bad you lost! Paper beats Rock!";
  } else if (a === "paper" && b === "scissors") {
    computerScore++;
    result = "Aw too bad you lost! Scissors beats Paper!";
  } else if (a === "scissors" && b === "rock") {
    computerScore++;
    result = "Aw too bad you lost! Rock beats Scissors!";
  } else {
    result = "Please choose Rock, Paper or Scissors";
  }

  return result;
}

function game(numberOfGames) {
  for (let i = 1; i <= numberOfGames; i++) {
    getPlayerChoice();
    getComputerChoice();
    console.log("Game " + i + " result: " + getResult());
    console.log(playerScore + " : " + computerScore);
  }

  let result = "";

  if (playerScore === computerScore) {
    result = "It's a tie! Play again!";
  } else if (playerScore > computerScore) {
    result = "You won against the computer!";
  } else if (playerScore < computerScore) {
    result = "You lost against the computer! Better luck next time.";
  }

  console.log(result);
  return result;
}

game(5); //Plays the game "n" number of times and displays end result
