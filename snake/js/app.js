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
