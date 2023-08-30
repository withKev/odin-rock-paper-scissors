let playerSelection = null;
let computerSelection = null;

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

  if (a === b) {
    return "It's a tie!";
  } else if (a === "rock" && b === "scissors") {
    return "You win! Rock beats Scissors!";
  } else if (a === "paper" && b === "rock") {
    return "You win! Paper beats Rock!";
  } else if (a === "scissors" && b === "paper") {
    return "You win! Scissors beats Paper!";
  } else if (a === "rock" && b === "paper") {
    return "You lose! Paper beats Rock!";
  } else if (a === "paper" && b === "scissors") {
    return "You lose! Scissors beats Paper!";
  } else if (a === "scissors" && b === "rock") {
    return "You win! Rock beats Scissors!";
  } else {
    return "Please choose Rock, Paper or Scissors";
  }
}

function game(numberOfGames) {
  for (let i = 1; i <= numberOfGames; i++) {
    getPlayerChoice();
    getComputerChoice();
    console.log("Game " + i + " result: " + getResult());
  }
}

console.log(game(3));
