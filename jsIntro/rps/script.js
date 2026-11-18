// 0 is rock, 1 is paper, 2 is scissors

let player = -1;
let computer = -1;
const choiceText = document.querySelector(".choice");
const resultText = document.querySelector(".result");
const playerText = document.querySelector(".playerChoice");
const computerText = document.querySelector(".computerChoice");
const scoreText = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  random = Math.random();
  if (random < 0.33) {
    return 0;
  } else if (random < 0.66) {
    return 1;
  } else {
    return 2;
  }
}

function playRound() {
  // 0 is tie, 1 is player won, -1 is computer won
  computer = getComputerChoice();
  playerText.textContent = "You picked: " + changeNums(player);
  computerText.textContent = "The computer picked: " + changeNums(computer);
  if (player == -1) {
    resetPlayer();
    return -2;
  }
  if (player == computer) {
    resetPlayer();
    return 0;
  }
  let tempComputer = computer + 1;
  if (tempComputer > 2) {
    tempComputer = 0;
  }
  if (tempComputer == player) {
    playerScore += 1;
    resetPlayer();
    return 1;
  } else {
    computerScore += 1;
    resetPlayer();
    return -1;
  }
}

function resetPlayer() {
  player = -1;
  choiceText.textContent =
    "Current selection: N/A " + String.fromCodePoint(0x1f6ab);
}

function resetAll() {
  player = -1;
  computer = -1;
  playerScore = 0;
  computerScore = 0;
  choiceText.textContent =
    "Current selection: N/A " + String.fromCodePoint(0x1f6ab);
  resultText.textContent = "Result:";
  playerText.textContent = "You picked: N/A " + String.fromCodePoint(0x1f6ab);
  computerText.textContent =
    "The computer picked: N/A " + String.fromCodePoint(0x1f6ab);
  scoreText.textContent =
    "Score: Player " + playerScore + ", Computer " + computerScore;
}

function changeNums(a) {
  switch (a) {
    case -1:
      return "N/A " + String.fromCodePoint(0x1f6ab);
    case 0:
      return "Rock " + String.fromCodePoint(0x1faa8);
    case 1:
      return "Paper " + String.fromCodePoint(0x1f4c3);
    case 2:
      return "Scissors " + String.fromCodePoint(0x2702, 0xfe0f);
  }
}

let menu = document.querySelector("#menu");
menu.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      player = 0;
      choiceText.textContent = "Current selection: " + changeNums(player);
      break;
    case "paper":
      player = 1;
      choiceText.textContent = "Current selection: " + changeNums(player);
      break;
    case "scissors":
      player = 2;
      choiceText.textContent = "Current selection: " + changeNums(player);
      break;
    case "play":
      result = playRound();
      switch (result) {
        case -2:
          resultText.textContent = "Please select a choice.";
          break;
        case 0:
          resultText.textContent = "Result: TIE!";
          break;
        case 1:
          resultText.textContent = "Result: You win!";
          scoreText.textContent =
            "Score: Player " + playerScore + ", Computer " + computerScore;
          break;
        case -1:
          resultText.textContent = "Result: You lose!";
          scoreText.textContent =
            "Score: Player " + playerScore + ", Computer " + computerScore;
          break;
      }
      break;
    case "reset":
      resetAll();
      break;
  }
});
