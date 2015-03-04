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
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var playerMove;
var computerMove;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
    playerMove = move;
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    computerMove = move;
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
if (playerMove === computerMove) {
    winner = "tie";
    } 
else if (playerMove === "rock") {
    if (computerMove === "scissors") {
        winner = "player";
    } else {
        winner = "computer";
        }
    }
else if (playerMove === "paper") {
    if (computerMove === "rock") {
        winner = "player";
    } else {
        winner = "computer";
    }
}
else if (playerMove === "scissors") {
    if (computerMove === "rock") {
        winner = "computer";
    } else {
        winner = "player";
    }
}
return winner;
}

function game() {
    getPlayerMove();
    getComputerMove();
    return getWinner(playerMove, computerMove);
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

   while (playerWins < 5 & computerWins < 5) {  ///ASK ABOUT 'SHORT CIRCUITING' OPERATORS
        var winner = game();
        if (winner === "player") {
            playerWins += 1;
        } else if (winner === "computer") {
            computerWins += 1;
        } else {
            console.log("DRAW!!!");
        }
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently: Player - " + playerWins + " to Computer - " + computerWins + "\n");
    }

    return [playerWins, computerWins];
}
