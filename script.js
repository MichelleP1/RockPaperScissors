let playerScore = 0;
let computerScore = 0;
let leader = '';
let over = false;

const results = document.querySelector('#results');
const info = document.querySelector('#info');
const selectedIcons = document.querySelector('#selectedIcons');

const declareWinner = document.createElement('h2');
declareWinner.classList.add('declareWinner');
declareWinner.textContent = '';

const finalResult = document.createElement('h1');
finalResult.classList.add('finalResult');
finalResult.textContent = '';

const playerLabel = document.createElement('h3');
playerLabel.classList.add('playerLabel');
playerLabel.textContent = 'Player';

const computerLabel = document.createElement('h3');
computerLabel.classList.add('computerLabel');
computerLabel.textContent = 'Computer';

const playerIcon = document.createElement('img');
playerIcon.classList.add('playerIcon');
playerIcon.src = '';

const computerIcon = document.createElement('img');
computerIcon.classList.add('computerIcon');
computerIcon.src = '';

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id, computerPlay());
    });
});


function computerPlay() {

	let computerChoice = Math.floor(Math.random() * 3);

	switch (computerChoice) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
}

function playRound(playerSelection, computerSelection) {

	if (over) {
		finalResult.textContent = '';
	}

	over = false;

	switch (playerSelection) {
		case 'rock':
			playerIcon.src = 'images/rock.png';
			break;
		case 'paper':
			playerIcon.src = 'images/paper.png';
			break;
		case 'scissors':
			playerIcon.src = 'images/scissors.png';
			break;
	}

	switch (computerSelection) {
		case 'rock':
			computerIcon.src = 'images/rock.png';
			break;
		case 'paper':
			computerIcon.src = 'images/paper.png';
			break;
		case 'scissors':
			computerIcon.src = 'images/scissors.png';
			break;
	}

	if (playerSelection == computerSelection) {
		declareWinner.textContent = 'Tie!';
		playerIcon.style.borderColor = 'black';
		computerIcon.style.borderColor = 'black';

	} else if (playerSelection == 'paper' && computerSelection == 'rock' ||
		playerSelection == 'scissors' && computerSelection == 'paper' ||
		playerSelection == 'rock' && computerSelection == 'scissors') {
		declareWinner.textContent = 'Player Wins!';

		playerIcon.style.borderColor = '#cccc33';
		computerIcon.style.borderColor = 'black';

		playerScore++;

	} else {
		declareWinner.textContent = 'Computer Wins!';
		playerIcon.style.borderColor = 'black';
		computerIcon.style.borderColor = '#cccc33';

		computerScore++;
	}

	if (playerScore == 5) {
		declareWinner.textContent = '';
		finalResult.textContent = 'Player Wins!';
		finalResult.style.color = '#cccc33';

		over = true;
	}

	if (computerScore == 5) {
		declareWinner.textContent = '';
		finalResult.textContent = 'Computer Wins!';
		finalResult.style.color = 'black';

		over = true;
	}

	playerLabel.textContent = `Player: ${playerScore}`;
	computerLabel.textContent = `Computer: ${computerScore}`;

	results.appendChild(declareWinner);
	results.appendChild(finalResult);

	info.appendChild(playerLabel);
	info.appendChild(computerLabel);

	selectedIcons.appendChild(playerIcon);
	selectedIcons.appendChild(computerIcon);

	if (over) {
		playerScore = 0;
		computerScore = 0;
	}
}