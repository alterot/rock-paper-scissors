//Rock, paper scissor game. Only for console. In future also add fail safe for player input. 
//(Like cancel function if !specific string?)

const buttons = document.querySelectorAll('.button');
const displayResult = document.getElementById('result');
const displayWins = document.getElementById('wins');
const displayLosses = document.getElementById('losses');
const displayDraws = document.getElementById('draws');
const displayRounds = document.getElementById('rounds');
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', reset);

let rounds = 0;
let wins = 0;
let losses = 0;
let draws = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const playerChoice = button.id.toUpperCase();
        const computerChoice = getComputerChoice();
        const result = playRound (playerChoice, computerChoice);
        let resultMessage = '';

        rounds ++;
        if (result === 'draw') {
            draws ++;
            resultMessage = `Oh you both chose ${playerChoice}, it\'s a draw mate!`;
        } else if (result === 'win') {
            wins ++;
            resultMessage = `DANG! You chose ${playerChoice}, and computer chose ${computerChoice}, you frikkin won the round!`;
        } else {
            losses ++;
            resultMessage = `No no bro ${playerChoice} sucks against ${computerChoice}, you lost the round!.`;
        }

        displayResult.textContent = resultMessage;   
        displayWins.textContent = wins;
        displayLosses.textContent = losses;
        displayDraws.textContent = draws;
        displayRounds.textContent = rounds;

        if (wins === 5) {
            displayResult.textContent = `CONGRATULATIONS, you won five out of ${rounds} games and are victorious!`;
        }
        if (losses === 5) {
            displayResult.textContent = `OH NO, you lost ${losses} (and ${draws} where draw) and are, unfortunately a bit of a loser. Rematch?`;
        } 
        if (wins === 5 || losses === 5) {
            displayResult.style.cssText = 'border: 2px dashed red; background-color: pink; padding: 10px;';
            document.getElementById("options").style.display = "none"; 
        }

    });
});

function getComputerChoice () { //function for random computer choice
    const randomNumber = Math.ceil(Math.random() * 3);
    
    switch(randomNumber) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSORS';
        default:
            return false; //avoiding infinite loops..
    }
};

function playRound (playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {  //if else for all possible outcomes
        return 'draw';

    } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'|| playerChoice === 'SCISSORS' && computerChoice === 'PAPER'|| playerChoice === 'PAPER' && computerChoice === 'ROCK') {
        return 'win'

    } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER' || playerChoice === 'SCISSORS' && computerChoice === 'ROCK' || playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        return 'lose';

    } else {
        return false;
    }
};

function reset () {

    rounds = 0;
    wins = 0;
    losses = 0;
    draws = 0;

    displayResult.textContent = 'Well did you win?';   
    displayWins.textContent = wins;
    displayLosses.textContent = losses;
    displayDraws.textContent = draws;
    displayRounds.textContent = rounds;

    displayResult.style.cssText = '';
    document.getElementById("options").style.cssText = "";

};