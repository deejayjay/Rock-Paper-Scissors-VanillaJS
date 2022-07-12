const resultComputer = document.getElementById("resultComputer");
const resultPlayer = document.getElementById("resultPlayer");
const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");

let playerScore = 0,
  computerScore = 0;

resultComputer.textContent = computerScore;
resultPlayer.textContent = playerScore;

btnRock.addEventListener("click", findWinnerAndUpdateScore);
btnPaper.addEventListener("click", findWinnerAndUpdateScore);
btnScissors.addEventListener("click", findWinnerAndUpdateScore);

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function findWinnerAndUpdateScore(e) {
  const btnClicked = e.currentTarget;
  const playerChoice = btnClicked.dataset.choice;
  const computerChoice = getComputerChoice();

  console.log({
    playerChoice,
    computerChoice
  });

  if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("computer");
    computerScore++;
    resultComputer.textContent = computerScore;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("player");
    playerScore++;
    resultPlayer.textContent = playerScore;
  } else {
    console.log("draw");
  }

  console.log({ playerScore, computerScore });
  if (playerScore === 3) {
    console.log("Player has won!");
  } else if (computerScore === 3) {
    console.log("Computer has won!");
  }
}
