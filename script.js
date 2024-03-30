let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (userGuess, computerGuess, target) => {
  if ((userGuess < 0 || userGuess > 9)) {
    alert('Please choose a number between 0-9.');
    throw new Error("Error message!");
  }
  let userDiff = getAbsoluteDistance(target, userGuess);
  let computerDiff = getAbsoluteDistance(target, computerGuess);
  return computerDiff >= userDiff ? true : false;
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;

