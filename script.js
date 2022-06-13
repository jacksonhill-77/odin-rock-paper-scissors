function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rolledNumber = Math.floor(Math.random() * (max - min) + min);
    return rolledNumber
}

function computerPlay() {
    let result = randomNumber(1, 3);
    let computerChoice;
    if (result === 1) {
        computerChoice = 'Scissors';
        console.log("The computer has selected " + computerChoice);
        return computerChoice
    } else if (result === 2) {
        computerChoice = 'Paper';
        console.log("The computer has selected " + computerChoice);
        return computerChoice
    } else {
        computerChoice = 'Rock';
        console.log("The computer has selected " + computerChoice);
        return computerChoice
    }
}

function capitaliseFirstLetter(string) {
    let capitalisedString = string.toLowerCase();
    capitalisedString = capitalisedString.charAt(0).toUpperCase() + capitalisedString.slice(1);
    return capitalisedString
}

function playerPlay() {
    let playerInput = prompt("Enter the hand you wish to play (scissors, paper, or rock):");
    playerInput = capitaliseFirstLetter(playerInput);
    if (playerInput === 'Rock' || playerInput === 'Scissors' || playerInput === 'Paper') {
        console.log("You have selected " + playerInput)
        return playerInput
    } else console.log("Unknown input. Please enter rock, paper or scissors.")
}

function oneRound() {
    let playerHand = playerPlay();
    let computerHand = computerPlay();
    // Tie case
    if (playerHand === computerHand) {
        console.log(`${playerHand} vs ${computerHand} means you both tie!`)
        return 'Tie'
    }
    // Lose case 
    else if ((playerHand === 'Scissors' && computerHand === 'Rock') ||
        (playerHand === 'Paper' && computerHand === 'Scissors') ||
        (playerHand === 'Rock' && computerHand === 'Paper')) {
        console.log(`${playerHand} vs ${computerHand} means you lose!`)
        return 'Lose'
    }
    // Win case
    else {
        console.log(`${playerHand} vs ${computerHand} means you win!`)
        return 'Win'
    }
}

function game() {
    let lossCounter = 0;
    let winCounter = 0;
    for (let i = 0; i < 5; i++) {
        let result = oneRound();
        if (result === 'Lose') {
            lossCounter++;
        } else if (result === 'Win') {
            winCounter++;
        }
    }
    if (winCounter > lossCounter) {
        console.log(`You scored ${winCounter} and the computer scored ${lossCounter}. You win!`)
    } else if (lossCounter > winCounter) {
        console.log(`You scored ${winCounter} and the computer scored ${lossCounter}. You lose!`)
    } else {
        console.log(`You scored ${winCounter} and the computer scored ${lossCounter}. You both tie!`)
    }
}
game();