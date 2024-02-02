function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1);

    if (x === 1) {
        return "Rock";
    } else if (x === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie round";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Player won";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Computer won";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Player won";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Computer won";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Computer won";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Player won";
    } else {
        // Invalid input or unexpected scenario
        return "Invalid round";
    }

    
}

