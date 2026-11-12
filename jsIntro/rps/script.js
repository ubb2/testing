// 0 is rock, 1 is paper, 2 is scissors

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

function getPlayerChoice() {
  let choice = "";
  while (true) {
    choice = prompt(
      "Choose rock, paper, or scissors",
      "answer here",
    ).toLowerCase();
    if (choice == "rock") {
      return 0;
    } else if (choice == "paper") {
      return 1;
    } else if (choice == "scissors") {
      return 2;
    }
  }
}

function playRound(computerChoice, playerChoice) {
  // 0 is tie, 1 is player won, -1 is computer won
  if (computerChoice == playerChoice) {
    return 0;
  }
  let tempComputerChoice = computerChoice + 1;
  if (tempComputerChoice > 2) {
    tempComputerChoice = 0;
  }
  if (tempComputerChoice == playerChoice) {
    return 1;
  } else {
    return -1;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let computerChoice = 10;
  let playerChoice = 10;
  roundScore = 0;
  for (let i = 1; i < 6; i++) {
    console.log("Round " + i + ":");
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    roundScore = playRound(computerChoice, playerChoice);
    console.log("player chooses " + changeNums(playerChoice));
    console.log("computer chooses " + changeNums(computerChoice));
    console.log("therefore, " + changeResult(roundScore));
    if (roundScore > 0) {
      playerScore++;
    } else if (roundScore < 0) {
      computerScore++;
    }
  }
  console.log("The player has scored " + playerScore + " points.");
  console.log("The computer has scored " + computerScore + " points.");
  let result = "";
  if (playerScore > computerScore) {
    result = "Player has won.";
  } else if (playerScore < computerScore) {
    result = "Computer has won.";
  } else {
    result = "Tied game.";
  }
  console.log(result);
}

function changeNums(a) {
  if (a == 0) {
    return "rock";
  } else if (a == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function changeResult(a) {
  if (a == 0) {
    return "tie";
  } else if (a == -1) {
    return "computer won";
  } else {
    return "player won";
  }
}

playGame();
