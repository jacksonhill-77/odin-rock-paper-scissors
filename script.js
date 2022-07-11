// Initalise click counter and score trackers
let clickCounter = 0
let winCounter = 0
let lossCounter = 0

// Randomly selects a number between min and max. Used in the computerPlay()
// function.
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rolledNumber = Math.floor(Math.random() * (max - min) + min);
    return rolledNumber
}

// This function randomly selects a hand for the computer to play in scissors, 
// paper, rock, and returns it.

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

// This function capitalises the first letter of any string. It is used in the 
// playerPlay() function
function capitaliseFirstLetter(string) {
    let capitalised = string.toLowerCase();
    capitalised = capitalised.charAt(0).toUpperCase() + capitalised.slice(1);
    return capitalised
}


// Creates the HTML structure for the game: 3 buttons for scissors,
// paper and rock, 1 div to hold the results, and 1 div to display
// the inputs.
function createGame() {


    // Create the results div
    let resultDiv = document.createElement('div')
    resultDiv.style.width = '400px'
    resultDiv.style.height = '400px'
    resultDiv.setAttribute('id', 'results')
    document.body.appendChild(resultDiv)

    // Create the results div
    let scoreDiv = document.createElement('div')
    scoreDiv.style.width = '400px'
    scoreDiv.style.height = '200px'
    scoreDiv.setAttribute('id', 'results')
    document.body.appendChild(scoreDiv)

    // Create the buttons
    const buttonNames = ["Scissors", "Paper", "Rock"]
    for (const name of buttonNames) {
        const button = document.createElement('button');
        button.style.width = '200px'
        button.style.height = '120px'
        button.textContent = name;
        button.addEventListener('click', () => oneRound(name))
        document.body.appendChild(button)
    }

    // Determine the winner and loser, outputting the score as well
    if (winCounter > lossCounter) {
        console.log(`You scored ${winCounter} and the computer scored ${lossCounter}. You win!`)
    } else if (lossCounter > winCounter) {
        console.log(`You scored ${winCounter} and the computer scored ${lossCounter}. You lose!`)
    } else {
        console.log(`You scored ${winCounter} and the computer scored ${lossCounter}. You both tie!`)
    }
}

// This function asks the player for an input and returns it as a string where
// the first letter is capitalised
function playerPlay() {
    let playerInput = prompt("Enter the hand you wish to play (scissors, paper, or rock):");
    playerInput = capitaliseFirstLetter(playerInput);
    if (playerInput === 'Rock' || playerInput === 'Scissors' || playerInput === 'Paper') {
        console.log("You have selected " + playerInput)
        return playerInput
    } else console.log("Unknown input. Please enter rock, paper or scissors.")
}

// Plays one round of scissors, paper, rock
function oneRound(playerHand) {

    clickCounter = ++clickCounter;

    if (clickCounter > 5) {
        alert("5 rounds have been played! You cannot play any more.")
        return
    }

    //Determines the hand played by the computer
    let computerHand = computerPlay();

    // Determines if the game resulted in a tie, returning the string 'Tie'
    if (playerHand === computerHand) {

        results = document.getElementById("results")
        results.textContent += `${playerHand} vs ${computerHand} means you both tie!` + "\n\n"
        return
    }

    // Determines if the game resulted in a loss, returning the string 'Lose'
    else if ((playerHand === 'Scissors' && computerHand === 'Rock') ||
        (playerHand === 'Paper' && computerHand === 'Scissors') ||
        (playerHand === 'Rock' && computerHand === 'Paper')) {
        lossCounter = lossCounter++;
        results = document.getElementById("results")
        results.textContent += `${playerHand} vs ${computerHand} means you lose!` + "\n\n"
        return
    }

    // // Determines if the game resulted in a win, returning the string 'Win'
    else {
        winCounter = winCounter++;
        results = document.getElementById("results")
        results.textContent += `${playerHand} vs ${computerHand} means you win!` + "\n\n"
        return
    }
}

createGame();