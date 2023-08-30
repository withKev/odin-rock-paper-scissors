let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //Randomly choose 0, 1 or 2

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getResult() {
  let a = playerSelection;
  let b = computerSelection;

  if (a === b) {
    // console.log("It's a tie!");
    return "It's a tie!";
  } else if (a === "rock" && b === "scissors") {
    // console.log("You win! Rock beats Scissors!");
    return "You win! Rock beats Scissors!";
  } else if (a === "paper" && b === "rock") {
    // console.log("You win! Paper beats Rock!");
    return "You win! Paper beats Rock!";
  } else if (a === "scissors" && b === "paper") {
    // console.log("You win! Scissors beats Paper!");
    return "You win! Scissors beats Paper!";
  } else if (a === "rock" && b === "paper") {
    // console.log("You lose! Paper beats Rock!");
    return "You lose! Paper beats Rock!";
  } else if (a === "paper" && b === "scissors") {
    // console.log("You lose! Scissors beats Paper!");
    return "You lose! Scissors beats Paper!";
  } else if (a === "scissors" && b === "rock") {
    // console.log("You win! Rock beats Scissors!");
    return "You win! Rock beats Scissors!";
  } else {
    return "Please choose Rock, Paper or Scissors";
  }
}

getComputerChoice(); // Computer chooses Rock, Paper or Scissors

console.log("Computer chose: " + computerSelection);
console.log("You chose: " + playerSelection.toLowerCase());

getResult(); //Plays 1 game and prints if player wins or loses

console.log(getResult()); // Prints the result to console
