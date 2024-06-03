
const diceElement = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');

const colors = ['yellow', 'red', 'light-blue', 'black', 'green', 'white'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function rollDice() {
    const color = getRandomColor();
    diceElement.className = `DiceGame-dice ${color}`;
}

rollButton.addEventListener('click', rollDice);
