document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector("span");
  const startButton = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0; // first div in our grid // primeira div no grid
  let appleIndex = 0; // first div in our grid // primeira div no grid

  let currentSnake = [2, 1, 0];
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;
});

// to start, and restart the game // para começar e recomeçar o jogo
function startGame() {
  currentSnake.forEach((index) => squares[index].classList.remove("snake"));
  squares[appleIndex].classList.remove("apple");
  clearInterval(interval);
  score = 0;
  randomApple();
  direction = 1;
  scoreDisplay.innerText = score;
  intervalTime = 1000;
  currentSnake = [2, 1, 0];
  currentIndex = 0;
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
  interval = setInterval(movesOutcomes, intervalTime);
}
