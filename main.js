
//initialize an empty score var to be used later to count victories/losses. 
var humanScore = 0;
var cpuScore = 0; 
const victoryCondition = 5;

function getComputerChoice(){
    //this randomly returns either 'rock' 'paper' or 'scissors'
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomNo = Math.floor(Math.random() * choices.length);
    return choices[randomNo]
}

function game(){
    //use a loop to play a 5-round game that keeps score and announces the winner. 
    alert("DO YOU WANT TO PLAY A GAME \nYou will now play a 5-round game against the computer. \nIf you win, you get to live.")
    for (let i = 0; i < 3; i++){
        let  choice = prompt("Type your choice of either rock, paper, or scissors").toUpperCase();
        if ((choice == "ROCK") || (choice == "PAPER") || (choice == "SCISSORS")){
            let message = RPSround(choice, getComputerChoice());
            console.log(message);
            console.log(`The score is \nHuman: ${humanScore} CPU: ${cpuScore}`);
        } else{
            console.log("Not an option. You broke the game. Restart")
            //This if-statement block is to make sure the user passes in a string that works with the game.
            break;
        }
        // let message = RPSround(choice, getComputerChoice());
        // console.log(message);
        // console.log(`The score is \nHuman: ${humanScore} CPU: ${cpuScore}`);
    }
    console.log(`    The FINAL score is \n    Human: ${humanScore} CPU: ${cpuScore}`)
    if (humanScore > cpuScore){
        console.log("    Human WINS");

    } else if(humanScore < cpuScore){
        console.log("    Machine WINS");

    } else {
        console.log("    Let's call it a draw")
    }
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

//Make sure score will update on webpage
document.getElementById("h-score").innerText = humanScore;
document.getElementById("cpu-score").innerText = cpuScore;



//This code will allow for player button selection to be sent to game function
let rockButton = document.querySelector(".rock-butt")
rockButton.addEventListener("click", rockPress)

function rockPress(){
    alert("You pressed the rock button");
    
}

let paperButton = document.querySelector(".paper-butt");
paperButton.addEventListener("click", paperPress);
function paperPress(){
    alert("You pressed the paper button")
}

let scissorsButton = document.querySelector(".scissors-butt");
scissorsButton.addEventListener("click", scissorPress);
function scissorPress(){
    alert("you pressed the scissors button");
}





//this will tell me if a button is pressed at all
let button = document.querySelectorAll(".button");
button.forEach(button => button.addEventListener("click", testButton));

function testButton(){
    alert("This button works");
}



//Run this line to change one of the scores

function updateScoreboard(){
    document.getElementById("h-score").innerText = humanScore;
    document.getElementById("cpu-score").innerText = cpuScore;
    checkWinner();
}


function checkWinner(){
    if ((humanScore < victoryCondition) && (cpuScore < victoryCondition)) return;
    if ((humanScore >= victoryCondition) || (cpuScore = victoryCondition)){
        alert(`    The FINAL score is \n    Human: ${humanScore} CPU: ${cpuScore}`)
        if (humanScore > cpuScore){
            alert("    Human WINS");
            document.getElementById("final-results-readout").innerText = "HUMAN WINS"

        } else if(humanScore < cpuScore){
            alert("    Machine WINS");
            document.getElementById("final-results-readout").innerText = "MACHINE WINS"

        } else {
            alert("    Let's call it a draw")
            document.getElementById("final-results-readout").innerText = "DRAW???"
        }
    }
}
    