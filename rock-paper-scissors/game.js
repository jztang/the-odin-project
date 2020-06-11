const game = document.querySelector("#game");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result-text");
const end = document.querySelector("#end-text");
const start = document.querySelector("#start-game-button");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let move = Math.floor(Math.random() * 3);

    if(move === 0) {
        return "rock";
    } else if(move === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playOneRound(playerMove, computerMove) {
    console.log(playerMove + ", " + computerMove);
    if(playerMove === "rock") {
        if (computerMove === "rock") {
            result.textContent = "Rock is equal to rock";
        } else if (computerMove === "paper") {
            computerScore++;
            result.textContent = "Rock loses to paper";
        } else if (computerMove === "scissors") {
            playerScore++;
            result.textContent = "Rock beats scissors";
        }
    } else if(playerMove === "paper") {
        if (computerMove === "rock") {
            playerScore++;
            result.textContent = "Paper beats rock";
        } else if (computerMove === "paper") {
            result.textContent = "Paper is equal to paper";
        } else if (computerMove === "scissors") {
            computerScore++;
            result.textContent = "Paper loses to scissors";
        }
    } else if(playerMove === "scissors") {
        if (computerMove === "rock") {
            computerScore++;
            result.textContent = "Scissors loses to rock";
        } else if (computerMove === "paper") {
            playerScore++;
            result.textContent = "Scissors beats paper";
        } else if (computerMove === "scissors") {
            result.textContent = "Scissors is equal to scissors";
        }
    }

    playerScoreText.textContent = "Your score: " + playerScore;
    computerScoreText.textContent = "Computer score: " + computerScore;

    if(playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function playGame() {
    game.style.display = "block";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    result.textContent = "";
    end.textContent = "";
    start.style.display = "none";

    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = "Your score: 0";
    computerScoreText.textContent = "Computer score: 0";
}

function endGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    if(playerScore > computerScore) {
        end.textContent = "You win!";
    } else {
        end.textContent = "You lose!";
    }

    start.style.display = "block";
    start.textContent = "New game";
}

start.addEventListener("click", () => {
    playGame();
});

rock.addEventListener("click", () => {
    playOneRound("rock", computerPlay());
});

paper.addEventListener("click", () => {
    playOneRound("paper", computerPlay());
});

scissors.addEventListener("click", () => {
    playOneRound("scissors", computerPlay());
});