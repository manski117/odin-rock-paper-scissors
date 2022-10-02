


function getComputerChoice(){
    //this randomly returns either 'rock' 'paper' or 'scissors'
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomNo = Math.floor(Math.random() * choices.length);
    return choices[randomNo]
}

function RPSround(playerSelection, computerSelection){
    //This function plays a single round of RPS and returns a string that declares the winner of the round
    //This function is case-insensitive, so you can type any combo of capital and lowercase
    let playerMove = playerSelection
    let computerMove = computerSelection;
    console.log(playerMove, computerMove);
}