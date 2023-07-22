var options = ["Rock", "Paper", "Scissor"];
var userChoice;
var userScore = 0;
var computerScore = 0;

function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
    console.log(random);
    switch (random) {
        case 0:
            return options[0];
        case 1:
            return options[1];
        case 2:
            return options[2];
    }
}

function rock() {
    userChoice = options[0];
    document.getElementById('userRock').style.border = '5px';
    document.getElementById('userPaper').style.border = 'none';
    document.getElementById('userScissor').style.border = 'none';
}

function paper() {
    userChoice = options[1];
    document.getElementById('userRock').style.border = 'none';
    document.getElementById('userPaper').style.border = '5px';
    document.getElementById('userScissor').style.border = 'none';
}

function scissor() {
    userChoice = options[2];
    document.getElementById('userRock"').style.border = 'none';
    document.getElementById('userPaper').style.border = 'none';
    document.getElementById('userScissor').style.border = '5px';
}

function playGame() {
    document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'block';
    document.getElementById('section2').style.margin = '0 auto';
}

function playRound() {
    const promtDiv = document.getElementById('prompt');
    const scoreDiv = document.getElementById('score');
    const playRoundButton = document.querySelector('#play-round-button');
    promtDiv.style.display = 'block';
    var promt = "";

    let computerChoice = getComputerChoice();
    console.log("computers choice: " + computerChoice);
    console.log("Users choice: " + userChoice);
    if (userChoice === options[0] && computerChoice === options[0]) {
        promt = 'its a draw';
        console.log(promt);
        promtDiv.textContent = promt;
    }
    if (userChoice === options[1] && computerChoice === options[0]) {
        promt = 'Paper beats Rock';
        console.log(promt);
        userScore++;
        promtDiv.textContent = promt;
    }
    if (userChoice === options[2] && computerChoice === options[0]) {
        promt = 'Rock beats Scissors';
        console.log(promt);
        computerScore++;
        promtDiv.textContent = promt;
    }
    if (userChoice === options[0] && computerChoice === options[1]) {
        promt = 'Paper beats Rock';
        console.log(promt);
        computerScore++;
        promtDiv.textContent = promt;
    }
    if (userChoice === options[1] && computerChoice === options[1]) {
        promt = 'its a draw';
        console.log(promt);
        promtDiv.textContent = promt;
    }
    if (userChoice === options[2] && computerChoice === options[1]) {
        promt = 'scissors beats paper';
        console.log(promt);
        userScore++;
        promtDiv.textContent = promt;
    }
    if (userChoice === options[0] && computerChoice === options[2]) {
        promt = 'Rock beats Scissors';
        console.log(promt);
        userScore++;
        promtDiv.textContent = promt;
    }
    if (userChoice === options[1] && computerChoice === options[2]) {
        promt = 'Scissors beats paper';
        console.log(promt);
        computerScore++;
        promtDiv.textContent = promt;
    }
    if (userChoice === options[2] && computerChoice === options[2]) {
        promt = 'its a draw';
        console.log(promt);
        promtDiv.textContent = promt;
    }
    if (userChoice === undefined) {
        promt = 'Please enter a user value';
        console.log(promt);
        promtDiv.textContent = promt;
    }
    console.log('At the end of the round user score is: ' + userScore + " and computer is at: " + computerScore);
    scoreDiv.textContent = 'At the end of the round user score is: ' + userScore + " and computer is at: " + computerScore;
    scoreDiv.style.display = 'block';

    if (userScore === 5 || computerScore === 5) {
        let message = "";
        playRoundButton.disabled = true;
        if (userScore === 5) {
            message = "Congratulations, you've won yourself a cup of coffee! Want to go for another one?";
        }
        if (computerScore === 5) {
            message = "You have lost, would you like to try your luck again?";
        }
        console.log(message);
        document.getElementById('game-over').textContent = message;
        document.getElementById('game-over-box').style.display = 'block';
    }
}

function playAgain() {
    userScore = 0;
    computerScore = 0;
    document.querySelector('#play-round-button').disabled = false;
    document.getElementById('prompt').style.display = 'none';
    document.getElementById('score').style.display = ' none';
    document.getElementById('game-over-box').style.display = 'none'; 
}

function noPlayAgain() {
    userScore = 0;
    computerScore = 0;
    document.querySelector('#play-round-button').disabled = false;
    document.getElementById('section2').style.direction = 'none';
    document.getElementById('prompt').style.display = 'none';
    document.getElementById('score').style.display = ' none';
    document.getElementById('game-over-box').style.display = 'none'; 
    document.getElementById('section1').style.display = 'block'

}





