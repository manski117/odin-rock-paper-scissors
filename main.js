


function getComputerChoice(){
    //this randomly returns either 'rock' 'paper' or 'scissors'
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomNo = Math.floor(Math.random() * choices.length);
    return choices[randomNo]
}

function RPSround(playerSelection, computerSelection){
    //This function plays a single round of RPS and returns a string that declares the winner of the round
    //This function is case-insensitive, so you can type any combo of capital and lowercase
    let playerMove = playerSelection.toUpperCase();
    let computerMove = computerSelection.toUpperCase();
    console.log(playerMove, computerMove);
    switch(playerMove){
        case "ROCK":
            console.log(`You slected ${playerMove}`)
            console.log(`and CPU selected ${computerMove}`)
            if (computerMove == "ROCK"){
                console.log("DRAW. Nobody wins.")
                console.log(`${playerMove} ties with ${computerMove}`)
            } else if (computerMove == "SCISSORS"){
                console.log("YOU WIN!!!!!!!!!!!!!!!")
                console.log(`${playerMove} beats ${computerMove}`)

            } else if (computerMove == "PAPER"){
                console.log("You LOOSE!!!!!!!!!!!!!!!!")
                console.log(`${computerMove} covers up ${playerMove}`)
            }
            break;
        
        case "PAPER":
            console.log(`You slected ${playerMove}`)
            console.log(`and CPU selected ${computerMove}`)
            break;

        case "SCISSORS":
            console.log(`You slected ${playerMove}`)
            console.log(`and CPU selected ${computerMove}`)
            break;
    }
    console.log('code still continues to run past switch block TRUE')

}