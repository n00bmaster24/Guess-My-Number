'use strict';

let secretNumber = generateRandomNum();

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
    checkGuess(guess, secretNumber);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateRandomNum();
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

function checkGuess(guess, secretNumber) {
  if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('😭 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function generateRandomNum() {
  return Math.trunc(Math.random() * 20) + 1;
}
