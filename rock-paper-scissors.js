let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //Randomly choose 0, 1 or 2

  if (randomNumber === 0) {
    computerSelection = "rock";
  } else if (randomNumber === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  console.log("Computer chose: " + computerSelection);
  return computerSelection;
}

function getPlayerChoice(input) {
  playerSelection = input.toLowerCase();
  console.log("You chose: " + playerSelection);
  return playerSelection;
}

function updateScore(winner) {
  if (winner === "user") {
    playerScore++;
    return playerScore;
  } else if (winner === "computer") {
    computerScore++;
    return computerScore;
  } else return;
}

function getResult() {
  let a = playerSelection;
  let b = computerSelection;
  let result = "";

  if (a === b) {
    result = "It's a tie!";
  } else if (a === "rock" && b === "scissors") {
    updateScore("user");
    result = "You won! Rock beats Scissors!";
  } else if (a === "paper" && b === "rock") {
    updateScore("user");
    result = "You won! Paper beats Rock!";
  } else if (a === "scissors" && b === "paper") {
    updateScore("user");
    result = "You won! Scissors beats Paper!";
  } else if (a === "rock" && b === "paper") {
    updateScore("computer");
    result = "Aw too bad you lost! Computer chose Paper!";
  } else if (a === "paper" && b === "scissors") {
    updateScore("computer");
    result = "Aw too bad you lost! Computer chose Scissors!";
  } else if (a === "scissors" && b === "rock") {
    updateScore("computer");
    result = "Aw too bad you lost! Computer chose Rock!";
  } else {
    result = "Please choose Rock, Paper or Scissors";
  }
  console.log(result);
  return result;
}

function getFirstToFive() {
  let result = "";

  if (playerScore >= 1) {
    result = "You won against the computer!";
    gameOver = true;
    console.log(result);
    return result;
  } else if (computerScore >= 1) {
    result = "You lost against the computer! Better luck next time.";
    gameOver = true;
    console.log(result);
    return result;
  } else return (gameOver = false);
}

function showPlayAgainButton() {
  if (gameOver === true) {
    addPlayAgainButton();
  } else return (gameOver = false);
}

function resetGameValues() {
  playerSelection = null;
  computerSelection = null;
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  return "Done.";
}

function clearOutput() {}

function newGame() {
  resetGameValues();
  removePlayAgainButton();
  // clearOutput(); // should reset the output box of all values
}

function playGame(choice) {
  getComputerChoice();
  playerSelection = choice;
  getResult();
  getFirstToFive();
  showPlayAgainButton();
  console.log("Score: " + playerScore + " - " + computerScore);
}

const userChoices = ["Rock", "Paper", "Scissors"];
const content = document.querySelector(".content");

function createDiv(choice) {
  const div = document.createElement("div");
  div.classList.add(choice.toLowerCase());
  div.dataset.choice = choice;
  div.addEventListener("click", () => {
    const clickedChoice = div.dataset.choice;
    // playGame(clickedChoice.toLowerCase());
    getPlayerChoice(clickedChoice);
  });
  div.textContent = choice;
  content.appendChild(div);
}

userChoices.forEach((choice) => {
  createDiv(choice);
});

const confirmButton = document.querySelector(".confirm");
confirmButton.addEventListener("click", () => {
  playGame(playerSelection);
  playerSelection = null;
});

let playAgainButton;

function addPlayAgainButton() {
  const buttons = document.querySelector(".buttons");
  playAgainButton = document.createElement("button");
  playAgainButton.classList.add("playAgain");
  playAgainButton.textContent = "Play Again";
  playAgainButton.addEventListener("click", () => {
    newGame();
  });

  buttons.appendChild(playAgainButton);
}

function removePlayAgainButton() {
  const buttons = document.querySelector(".buttons");
  if (playAgainButton) {
    buttons.removeChild(playAgainButton);
  }
}
