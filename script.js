const startBtn = document.getElementById('startBtn')
const cssRoundWon = "background: #222; color: #aacc00";
const cssRoundLost = "background: #222; color: #bc4749";
const cssRoundTie = "background: #222; color: #ffff3f";


let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice;
    let computerNumber = Math.floor(Math.random() * 3 );
    if (computerNumber == 0) {
        computerChoice = "scissor";
    } else if (computerNumber == 2) {
        computerChoice = "rock";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}



playAgainBtn.addEventListener('click', () => {
    modal.close();
    location.reload();
    modal.style.visibility = "hidden";
})


valueBtn.forEach(button => {
    button.addEventListener('click', getHumanChoice)
});


function getHumanChoice(e) {
   let humanChoice = e.target.id;
   if (humanChoice == "scissor") {
        humanImg.innerText = "✂️";
   } else if (humanChoice == "rock") {
        humanImg.innerText = "🪨";
   }else {
        humanImg.innerText = "🧻";
   }

    playRound(humanChoice, getComputerChoice());

}

function checkRound() {
    if (humanScore == 5) {
        modal.showModal();
        modal.style.visibility = "visible"
        modalMsg.style.color = winnerColor;
        modalMsg.style.filter = `drop-shadow(0 0 15px ${winnerColor})`;
        modalMsg.innerHTML = "You Won!";
    } else if (computerScore == 5) {
        modal.showModal();
        modal.style.visibility = "visible"
        modalMsg.style.color = loserColor;
        modalMsg.style.filter = `drop-shadow(0 0 15px ${loserColor})`;
        modalMsg.innerHTML = "You LOSE!";
    }
}



function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            info.innerHTML = "Its a TIE!";
        } else if (humanChoice == "scissor") {
            if(computerChoice == "rock") {
                computerScore++;
                computerCounter.innerHTML = computerScore;
                info.innerHTML = "Rock crushes Scissor! Computer wins this round!";
            } else {
                humanScore++;
                humanCounter.innerHTML = humanScore;
                info.innerHTML = "Scissor cuts Paper! You win this round!";
            }
        } else if (humanChoice =="rock"){
            if(computerChoice == "paper") {
                computerScore++;
                computerCounter.innerHTML = computerScore;
                info.innerHTML = "Paper covers Rock! Computer wins this round!";
            } else {
                humanScore++;
                humanCounter.innerHTML = humanScore;
                info.innerHTML = "Rock crushes Scissor! You win this round!";
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissor") {
                computerScore++;
                computerCounter.innerHTML = computerScore;
                info.innerHTML = "Scissor cuts Paper! Computer wins this round!";
            } else {
                humanScore++;
                humanCounter.innerHTML = humanScore;
                info.innerHTML = "Paper covers Rock! You win this round!";
            }
        } 

        checkRound()
}