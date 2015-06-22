////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           My Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

var playerMove = getPlayerMove();
var computerMove = getComputerMove();


function getWinner() {
    if (winnerIsPlayer()){
        return 'player';
    }
    if (winnerIsComputer()){
        return 'computer';
    }
    return '...nevermind, it is a tie.';
}
function winnerIsPlayer() {
    if (playerMove === 'scissors' && computerMove === 'paper') {
        return 'player';
    } if (playerMove === 'rock' && computerMove === 'scissors') {
        return 'player';
    } if (playerMove === 'paper' && computerMove === 'rock') {
        return 'player';
    } 
}

    
function winnerIsComputer() {
    if (computerMove === 'scissors' && playerMove === 'paper') {
        return 'computer';
    } if (computerMove === 'rock' && playerMove === 'scissors') {
        return 'computer';
    } if (computerMove === 'paper' && playerMove === 'rock') {
        return 'computer';
    }
}
    
    function playToFive() {
    console.log('Lets play Rock Paper Scissors');
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
        
        if (getWinner() === 'player') {
            playerWins ++;
}
        else if (getWinner() === 'computer') {
            computerWins ++;
}
        
        console.log('You chose '+ [playerMove] + ' while computer chose '+ [computerMove]);
        console.log('The winner is ' + getWinner());
        console.log('The score is currently '+playerWins+' to '+computerWins);
        
        if (playerWins === 5 || computerWins === 5) {
            console.log('The game is over, ' + getWinner() + ' has won.');
}
        return [playerWins, computerWins];
}

}
    

playToFive();