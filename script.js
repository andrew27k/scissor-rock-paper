const startBtn = document.getElementById('startBtn')
const cssRoundWon = "background: #222; color: #aacc00";
const cssRoundLost = "background: #222; color: #bc4749";
const cssRoundTie = "background: #222; color: #ffff3f";


let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice;
    let computerNumber = Math.floor(Math.random() * 3 + 1);
    if (computerNumber == 1) {
        computerChoice = "scissor";
    } else if (computerNumber == 2) {
        computerChoice = "rock";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = window.prompt("Choose between Scissor, Rock or Paper");
    if (humanChoice === null || humanChoice === "") {
        window.alert("You have to enter a value")
        getHumanChoice();
    } else {
        return humanChoice.toLowerCase();
    }
    
}

const playGame = () => {

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("%cIt's a TIE", cssRoundTie);
            console.log(`Score -> \n Human: ${humanScore} \n Computer: ${computerScore}`)
        } else if (humanChoice == "scissor") {
            if(computerChoice == "rock") {
                computerScore++
                console.log(`%cYou lost with ${humanChoice}, Computer took ${computerChoice}`, cssRoundLost);
                console.log(`Score -> \n You: ${humanScore} \n Computer: ${computerScore}`);
            } else {
                humanScore++;
                console.log(`%cYou won with ${humanChoice}, Computer took ${computerChoice}`, cssRoundWon);
                console.log(`Score -> \n You: ${humanScore} \n Computer: ${computerScore}`);
            }
        } else if (humanChoice =="rock"){
            if(computerChoice == "paper") {
                computerScore++;
                console.log(`%cYou lost with ${humanChoice}, Computer took ${computerChoice}`, cssRoundLost);
                console.log(`Score -> \n You: ${humanScore} \n Computer: ${computerScore}`);
            } else {
                humanScore++;
                console.log(`%cYou won with ${humanChoice}, Computer took ${computerChoice}`, cssRoundWon);
                console.log(`Score -> \n You: ${humanScore} \n Computer: ${computerScore}`);
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissor") {
                computerScore++;
                console.log(`%cYou lost with ${humanChoice}, Computer took ${computerChoice}`, cssRoundLost);
                console.log(`Score -> \n You: ${humanScore} \n Computer: ${computerScore}`);
            } else {
                humanScore++;
                console.log(`%cYou won with ${humanChoice}, Computer took ${computerChoice}`, cssRoundWon);
                console.log(`Score -> \n You: ${humanScore} \n Computer: ${computerScore}`);
            }
        } 
    }
        while (humanScore <= 5 || computerScore <= 5) {
            if(humanScore == 5) {
                window.alert('You won the Game! \n press enter to start a new Game!');
                humanScore = 0;
                computerScore = 0;
            } else if (computerScore == 5) {
                window.alert('Computer won the Game! \n press enter to start a new Game!');
                computerScore = 0;
                humanScore = 0;
            } else {
                playRound(getHumanChoice(), getComputerChoice());
            }

        }
}

startBtn.onclick = playGame;