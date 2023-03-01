console.log('KÄMPA BROR!');

function getComputerChoice () { //function for random computer choice
    let randomNumber = Math.ceil(Math.random() * 3);
    
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
}

function playRound (playerChoice, computerChoice) {
    
    let winnerMessage = ''; //declare the winning message variable

    if (playerChoice === computerChoice) {  //if else for all possible outcomes
        winnerMessage = 'It is a draw, bro!';
        return 'draw';

    } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'|| playerChoice === 'SCISSORS' && computerChoice === 'PAPER'|| playerChoice === 'PAPER' && computerChoice === 'ROCK') {
        winnerMessage = 'You win, rock beats scissors!';
        return 'win'

    } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER' || playerChoice === 'SCISSORS' && computerChoice === 'ROCK' || playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        winnerMessage = 'You L O S E, paper beats rock!';
        return 'lose';

    } else {
        winnerMessage = 'Something is not right..'; // avoiding infinite loops
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        //prompt for player choice, toUpperCase for comparison
        const computerChoice = getComputerChoice();
        const playerChoice = prompt('Rock, Paper och Scissors?', 'rock').toUpperCase(); 

        //log player and computer messages for error check
        console.log(`You chose ${playerChoice}.`); 
        console.log(`Computer "chose" ${computerChoice}.`);
        
        //Count result
        const result = playRound(playerChoice, computerChoice);
        if (result === 'draw') {
            console.log('It is a draw');
            draws ++;
        } else if (result === 'win') {
            console.log('You won the round!');
            wins ++;
        } else {
            console.log('You lost the round!');
            losses ++;
        }
    }
    
    //print winner
    if (wins >= losses) {
        console.log(`CONGRATULATIONS, you won ${wins} out of five games and are victorious!`);
    } else if (losses > wins) {
        console.log(`OH NO, you lost ${losses} out of five games and are, unfortunately a bit of a loser. Rematch?`);
    } else {
        console.log('Well how about that, a tie. What an anticlimax. Rematch maybe?');
    }

    console.log(`Number of wins: ${wins}`);
    console.log(`Number of losses: ${losses}`);
    console.log(`Number of draws: ${draws}`);
    
}
