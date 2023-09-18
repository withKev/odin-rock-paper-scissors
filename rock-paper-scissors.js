window.addEventListener("load", () => {
  resetGameValues();
});

let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let winOrLoseRound;
let winOrLoseGame;

const userChoices = ["Rock", "Paper", "Scissors"];
const content = document.querySelector(".content");

function createDiv(choice) {
  const div = document.createElement("div");
  div.classList.add(choice.toLowerCase());
  div.dataset.choice = choice;
  div.addEventListener("click", () => {
    const clickedChoice = div.dataset.choice;
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

function updateScoreValues(winner) {
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
    result = "It's a tie! Try Again!";
  } else if (a === "rock" && b === "scissors") {
    updateScoreValues("user");
    result = "You won! Rock beats Scissors!";
  } else if (a === "paper" && b === "rock") {
    updateScoreValues("user");
    result = "You won! Paper beats Rock!";
  } else if (a === "scissors" && b === "paper") {
    updateScoreValues("user");
    result = "You won! Scissors beats Paper!";
  } else if (a === "rock" && b === "paper") {
    updateScoreValues("computer");
    result = "Aw too bad you lost! Computer chose Paper!";
  } else if (a === "paper" && b === "scissors") {
    updateScoreValues("computer");
    result = "Aw too bad you lost! Computer chose Scissors!";
  } else if (a === "scissors" && b === "rock") {
    updateScoreValues("computer");
    result = "Aw too bad you lost! Computer chose Rock!";
  } else {
    result = "Please choose Rock, Paper or Scissors";
  }
  console.log(result);
  winOrLoseRound = result;
  return result;
}

function getFirstToFive() {
  let result = "";

  if (playerScore >= 2) {
    result = "You won against the computer!";
    gameOver = true;
    console.log(result);
    winOrLoseGame = result;
    return result;
  } else if (computerScore >= 2) {
    result = "You lost against the computer! Better luck next time.";
    gameOver = true;
    console.log(result);
    winOrLoseGame = result;
    return result;
  } else return (gameOver = false);
}

function resetGameValues() {
  playerSelection = null;
  computerSelection = null;
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  winOrLoseRound = null;
  winOrLoseGame = null;

  return "Game Values Reset.";
}

function updateScoreBoard() {
  const output = document.querySelector(".output");
  output.textContent =
    "(You) " + playerScore + " - " + computerScore + " (Computer)";
  output.classList.add("score");

  addGameWinnerBanner();
}

function addGameWinnerBanner() {
  const output = document.querySelector(".output");
  const gameWinner = document.createElement("p");
  gameWinner.classList.add("score");
  gameWinner.textContent = winOrLoseGame;

  output.appendChild(gameWinner);
}

function clearOutputBox() {
  const output = document.querySelector(".output");
  const gameWinner = document.querySelector(".score");

  if (gameWinner && gameWinner.parentElement === output) {
    output.removeChild(gameWinner);
  }
}

function showPlayAgainButton() {
  if (gameOver === true) {
    addPlayAgainButton();
  } else return (gameOver = false);
}

function addPlayAgainButton() {
  const buttons = document.querySelector(".buttons");
  const playAgainButton = document.createElement("button");
  playAgainButton.classList.add("playAgain");
  playAgainButton.textContent = "Play Again";
  playAgainButton.addEventListener("click", () => {
    newGame();
  });

  buttons.appendChild(playAgainButton);
}

function removePlayAgainButton() {
  const buttons = document.querySelector(".buttons");
  const playAgainButton = document.querySelector(".playAgain");
  buttons.removeChild(playAgainButton);
}

function updateTitle() {
  const topTitle = document.querySelector(".title");
  topTitle.textContent = winOrLoseRound;
}

function resetTitle() {
  const topTitle = document.querySelector(".title");
  topTitle.textContent = "Let's Play Rock Paper Scissors!";
}

function resetMessage() {
  const outputMessage = document.querySelector(".message");
  outputMessage.textContent = "Choose an option to play!";
}

function playGame(choice) {
  getComputerChoice();
  playerSelection = choice;
  getResult();
  getFirstToFive();
  updateTitle();
  updateScoreBoard();
  showPlayAgainButton();
  console.log("Score: " + playerScore + " - " + computerScore);
  console.log(gameOver);
}

function newGame() {
  resetGameValues();
  resetTitle();
  // resetMessage();
  removePlayAgainButton();
  clearOutputBox();
  updateScoreBoard();
  console.log(gameOver);
}
