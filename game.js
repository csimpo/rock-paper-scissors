
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return 'Tie round';
    }
    else if(playerSelection==='Rock' && computerSelection==='Scissors'){
        return 'You won'
    }
    else{
        return 'You lost'
    }
}

const playerSelection=prompt("Choose Rock, Paper or Scissors")
console.log(playRound(playerSelection,getComputerChoice()))
   