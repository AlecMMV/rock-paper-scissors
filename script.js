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

console.log(`Computer chose ${getComputerChoice(1, 3)}`);

function getHumanChoice(){
    const hum = prompt("Rock, Paper, or Scissors?", "");
    return hum;
}

console.log(`You chose ${getHumanChoice()}`)

function playRound(humanChoice, computerChoice){
    
}
