const buttons = document.querySelectorAll("img")
const result = document.querySelector("#result")  
const feedBack = document.querySelector("#feedback")
const playAgain = document.querySelector("#playAgainBtn")
const alertBox = document.querySelector("#alert");
let pressedButtonValue;



function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * choice.length)
    return choice[random]
}
getComputerChoice()

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      pressedButtonValue = event.target.getAttribute("alt");
      game(playRound());
    });
  });
  let playerScore = 0
  let computerScore = 0
  

function playRound(playerSelection, computerSelection) {  
    computerSelection = getComputerChoice()
    playerSelection = pressedButtonValue.toLowerCase()

    if(computerSelection == "rock" && playerSelection == "paper"){
        feedBack.textContent = "You Win! Paper beats Rock" 
        return "Win!"
    }else if(computerSelection == "paper" && playerSelection == "rock"){
        feedBack.textContent = "You Lose! Paper beats Rock"
        return "Lose!"
    }else if(computerSelection == "scissors" && playerSelection == "rock"){
        feedBack.textContent = "You Win! Rock beats Scissors"
        return "Win!"
    }else if(computerSelection == "rock" && playerSelection == "scissors"){
        feedBack.textContent = "You Lose! Rock beats Scissors"
        return "Lose!"
    }else if(computerSelection == "paper" && playerSelection == "scissors"){
        feedBack.textContent = "You Win! Scissors beats paper"
        return "Win!"
    }else if(computerSelection == "scissors" && playerSelection == "paper"){
        feedBack.textContent = "You Lose! Scissors beats paper"
        return "Lose!"
    }else if(computerSelection == playerSelection){
        feedBack.textContent = "Tie!"
        return 
    }else{
        alert("Wrong input!")
    }
}
function alertFunc(notification) {
    alertBox.innerHTML = notification;
    alertBox.style.display = "block";
    playAgain.style.display = "block";
}
function game(score) {
    for (let i = 0; i < 1; i++) {
        if(score === "Win!"){
          playerScore += 1
        }else if(score === "Lose!"){
          computerScore += 1
        }
    }
result.textContent = `${playerScore} - ${computerScore}`
    
    if (playerScore === 5) {
        alertFunc(`You Win! ${playerScore} - ${computerScore}`)
        result.textContent = `${playerScore} - ${computerScore}`
        playerScore = 0
        computerScore = 0
        result.textContent = `${playerScore} - ${computerScore}`
        feedBack.textContent = "New Game"
        playAgain.addEventListener("click", function(){
            alertBox.style.display = "none";
            playAgain.style.display = "none";
        })
    }else if (computerScore === 5){
        alertFunc(`You Lost! ${playerScore} - ${computerScore}`)
        result.textContent = `${playerScore} - ${computerScore}`
        playerScore = 0
        computerScore = 0
        result.textContent = `${playerScore} - ${computerScore}`
        feedBack.textContent = "New Game"
        playAgain.addEventListener("click", function(){
            alertBox.style.display = "none";
            playAgain.style.display = "none";
        })
    }
}



