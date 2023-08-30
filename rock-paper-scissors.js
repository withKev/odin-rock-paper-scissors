let playerChoice = prompt("Rock, Paper or Scissors?");
let computerChoice;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //Randomly choose 0, 1 or 2

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

getComputerChoice();

console.log(computerChoice);
console.log(playerChoice);
