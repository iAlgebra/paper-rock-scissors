const $buttons = document.querySelectorAll('button');

$buttons.forEach(function(button) {
  button.onclick = function() {
    const MACHINE_WINS_MESSAGE = 'MACHINE WINS!';
    const USER_WINS_MESSAGE = 'USER WINS!';
    const $resultDisplay = document.querySelector('.result');
    const machineList = ['rock', 'paper', 'scissors'];
    const userChoice = this.value;
    document.querySelector('.display.user').textContent = userChoice;
    const index = Math.floor(Math.random() * machineList.length);
    const machineChoice = machineList[index];
    document.querySelector('.display.machine').textContent = machineChoice;
    if (machineChoice === userChoice) {
      $resultDisplay.textContent = 'DRAW!';
    } else {
      if (userChoice === 'rock') {
        if (machineChoice === 'paper') {
          $resultDisplay.textContent = MACHINE_WINS_MESSAGE;
        } else {
          $resultDisplay.textContent = USER_WINS_MESSAGE;
        }
      }

      if (userChoice === 'paper') {
        if (machineChoice === 'scissors') {
          $resultDisplay.textContent = MACHINE_WINS_MESSAGE;
        } else {
          $resultDisplay.textContent = USER_WINS_MESSAGE;
        }
      }

      if (userChoice === 'scissors') {
        if (machineChoice === 'rock') {
          $resultDisplay.textContent = MACHINE_WINS_MESSAGE;
        } else {
          $resultDisplay.textContent = USER_WINS_MESSAGE;
        }
      }
    }
  };
});
