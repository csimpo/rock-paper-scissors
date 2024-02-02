function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1);

    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerChoice(choice){
    return choice.toLowerCase()

}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie round";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player won";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer won";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player won";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer won";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer won";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player won";
    } else {
        // Invalid input or unexpected scenario
        return "Invalid round";
    }

    
}
function playGame(){
    
    for (let i=0; i<5; i++){
        let computerSelection=getComputerChoice();
        let playerSelection=playerChoice(prompt("Choose rock paper or scissors"))
        console.log(playRound(playerSelection,computerSelection))
    }

}



