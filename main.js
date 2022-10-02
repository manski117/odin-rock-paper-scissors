
//initialize an empty score var to be used later to count victories/losses. 
var humanScore = 0;
var cpuScore = 0;

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
    let message2player
    //This switch statement will take the function to 1 of 3 if-statements to evaluate the results of combat
    switch(playerMove){
        case "ROCK":
            console.log(`You slected ${playerMove}`)
            console.log(`and CPU selected ${computerMove}`)
            if (computerMove == "ROCK"){
                message2player = `Draw. Nobody wins. ${playerMove} ties with ${computerMove}`;
                return message2player;
            } else if (computerMove == "SCISSORS"){
                message2player = `YOU WIN!!!!!!!!!! ${playerMove} beats ${computerMove}`;
                humanScore ++;
                return message2player;

            } else if (computerMove == "PAPER"){
                message2player = `YOU LOSE!!!!!! ${computerMove} covers up ${playerMove}`;
                cpuScore ++;
                return message2player;
            }
            break;
        
        case "PAPER":
            console.log(`You slected ${playerMove}`)
            console.log(`and CPU selected ${computerMove}`)
            if (computerMove == "PAPER"){
                message2player = `Draw. Nobody wins. ${playerMove} ties with ${computerMove}`;
                return message2player;
            } else if (computerMove == "ROCK"){
                message2player = `YOU WIN!!!!!!!!!! ${playerMove} covers up the ${computerMove}`;
                humanScore ++;
                return message2player;

            } else if (computerMove == "SCISSORS"){
                message2player = `YOU LOSE!!!!!! ${computerMove} cuts right through ${playerMove}`;
                cpuScore ++;
                return message2player;
            }
            break;
            break;

        case "SCISSORS":
            console.log(`You slected ${playerMove}`)
            console.log(`and CPU selected ${computerMove}`)
            if (computerMove == "SCISSORS"){
                message2player = `Draw. Nobody wins. ${playerMove} ties with ${computerMove}`;
                return message2player;
            } else if (computerMove == "PAPER"){
                message2player = `YOU WIN!!!!!!!!!! ${playerMove} cut up the ${computerMove}`;
                humanScore ++;
                return message2player;

            } else if (computerMove == "ROCK"){
                message2player = `YOU LOSE!!!!!! ${computerMove} crushes the ${playerMove}`;
                cpuScore ++;
                return message2player;
            }
            break;
    }
    console.log('code still continues to run past switch block TRUE')

}