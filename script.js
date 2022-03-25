'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 29;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Adding the event listener for the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Check if there is no number inside the input field
  if (!guess) {
    displayMessage('No number No game!!😡');
  } else if (score > 1) {
    if (guess === secretNumber) {
      // Check if the number if equal to the secret number🔐
      displayMessage('Correct Number🎉');
      document.querySelector('.number').textContent = guess;
      document.querySelector('.number').style.width = '30rem'; // Changing the width
      document.querySelector('body').style.backgroundColor = '#60b347'; // Changing the background color
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage(
      'You lost the game. How failure you are to lose this stupid game kill yourself you must die you piece of shit 💥'
    );
    document.querySelector('.score').textContent = 0;
  }
});

////////////////////////////////// Coding Challenge #1 //////////////////////////////////
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // Create a new secret number then assign it to the secretNumber variable and not creating a new variable
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222'; // Changing the background color
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
