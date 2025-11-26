let humanScore = 0;
let computerScore = 0;

function getComputerChoice (min, max){
    const comp = Math.floor(Math.random() * (max - min + 1) + min);
    
    if (comp === 1){
        return "Rock";
    } if (comp === 2){
        return "Scissors";
    } if (comp === 3){
        return "Paper";
    }
}




function getHumanChoice(){
    const hum = prompt("Rock, Paper, or Scissors?", "");
    return hum;
}

function playGame(){

function playRound(humanChoice, computerChoice){
    
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

   
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    
    if (humanChoice === computerChoice){
        return "it's a tie!";
    } 
    
    if (
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper") ||
              (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins.";
    }
}

let humanChoice = getHumanChoice();           
let computerChoice = getComputerChoice(1, 3);
 

console.log(playRound(humanChoice, computerChoice));
console.log(`You: ${humanScore}`, `Computer: ${computerScore}`);

function win(){
if (humanScore === 5){
    return "Congratulations!";
} else if (computerScore === 5){
    return "Game Over";
} else {
    playGame();
}
}
console.log(win());

}

playGame();


