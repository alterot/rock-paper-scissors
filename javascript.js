//Rock, paper scissor game. Only for console. In future also add fail safe for player input. 
//(Like cancel function if !specific string?)

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
}

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
}

function playGame() { //don't hard code five rounds? Use function game(numRounds)
    let wins = 0;
    let losses = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        //prompt for player choice, toUpperCase for string comparison
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
    
    console.log(`Number of wins: ${wins}`);
    console.log(`Number of losses: ${losses}`);
    console.log(`Number of draws: ${draws}`);    

    //print winner
    if (wins >= losses) {
        console.log(`CONGRATULATIONS, you won ${wins} out of five games and are victorious!`);
    } else if (losses > wins) {
        console.log(`OH NO, you lost ${losses} (and ${draws} where draw) out of five games and are, unfortunately a bit of a loser. Rematch?`);
    } else {
        console.log('Well how about that, a tie. What an anticlimax. Rematch maybe?');
    } 

}
