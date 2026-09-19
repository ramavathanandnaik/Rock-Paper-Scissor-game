let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScoreText = document.querySelector("#user-score");
const computerScoreText = document.querySelector("#comp-score");
const restartButton = document.querySelector("#restart-game");
const darkModeButton = document.querySelector("#dark-mode");
const musicButton = document.querySelector("#music-btn");
const music = document.querySelector("#bg-music");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * options.length)];
};

const showWinner = (userWins, userChoice, computerChoice) => {
    if (userWins) {
        userScore++;
        userScoreText.textContent = userScore;
        message.textContent = `You win! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScoreText.textContent = computerScore;
        message.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        message.textContent = "It's a draw. Play again!";
        message.style.backgroundColor = "#f59e0b";
        return;
    }

    const userWins =
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper");

    showWinner(userWins, userChoice, computerChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});

restartButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScoreText.textContent = "0";
    computerScoreText.textContent = "0";
    message.textContent = "Play your move";
    message.style.backgroundColor = "#40c71e";
});

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkModeButton.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

let musicOn = false;

musicButton.addEventListener("click", async () => {
    if (musicOn) {
        music.pause();
        musicButton.textContent = "🔇 Music Off";
    } else {
        await music.play();
        musicButton.textContent = "🔊 Music On";
    }

    musicOn = !musicOn;
});



