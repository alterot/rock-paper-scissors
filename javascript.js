console.log('KÄMPA BROR!');

let computerChoice = '';

function getComputerChoice () {
    let randomNumber = Math.ceil(Math.random() * 3);
    
    switch(randomNumber) {
        case 1:
            computerChoice = 'ROCK';
            break;
        case 2:
            computerChoice = 'PAPER';
            break;
        case 3:
            computerChoice = 'SCISSORS';
            break;
            
    }
    return computerChoice;
}

let playerChoice = prompt('Rock, Paper och Scissors?', 'Come on no numbers please').toUpperCase();
getComputerChoice();

console.log(playerChoice);
console.log(computerChoice);

function playRound (player, computer) {

    let winnerMessage = '';

    if (playerChoice === computerChoice) {
        winnerMessage = 'It is a draw, bro!';

    } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        winnerMessage = 'You win, rock beats scissors!';

    } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
        winnerMessage = 'You L O S E, paper beats rock!';

    } else {
        winnerMessage = 'Didnt get this far yet...';
    }
    console.log(`You chose ${playerChoice}.`);
    console.log(`Computer "chose" ${computerChoice}.`);
    console.log(winnerMessage);
}