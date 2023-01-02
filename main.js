function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * choice.length)
    return choice[random]
}
getComputerChoice()
function playRound(playerSelection, computerSelection) {  
    computerSelection = getComputerChoice()
    playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase()
    if(computerSelection == "rock" && playerSelection == "paper"){
        //alert("You Win! Paper beats Rock")
        return "Win!"
    }else if(computerSelection == "paper" && playerSelection == "rock"){
        //alert("You Lose! Paper beats Rock")
        return "Lose!"
    }else if(computerSelection == "scissors" && playerSelection == "rock"){
        //alert("You Win! Rock beats Scissors")
        return "Win!"
    }else if(computerSelection == "rock" && playerSelection == "scissors"){
        //alert("You Lose! Rock beats Scissors")
        return "Lose!"
    }else if(computerSelection == "paper" && playerSelection == "scissors"){
        //alert("You Win! Scissors beats paper")
        return "Win!"
    }else if(computerSelection == "scissors" && playerSelection == "paper"){
        //alert("You Lose! Scissors beats paper")
        return "Lose!"
    }else if(computerSelection == playerSelection){
        //alert("It's a tie")
    }else{
        alert("Wrong input!")
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let result = playRound()
          if(result === "Win!"){
            playerScore ++
          }else if(result === "Lose!"){
            computerScore ++
          }
    }
    if (playerScore > computerScore) {
        alert(`You Win! ${playerScore} - ${computerScore}`)
    }else if (playerScore < computerScore){
        alert(`You Lose! ${playerScore} - ${computerScore}`)
    }else {
        alert(`It's a tie! ${playerScore} - ${computerScore}`)
    }
}
game()
