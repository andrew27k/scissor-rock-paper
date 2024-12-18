//#################ITEMS#################
//btn
const valueBtn = document.querySelectorAll('.option-box')
//info
const info = document.getElementById('info');
const humanCounter = document.getElementById('humanCounter');
const computerCounter = document.getElementById('computerCounter');
const humanImg = document.querySelector('.human-img');
const computerImg = document.querySelector('.computer-img');
const container = document.querySelector('.container');
const modal = document.getElementById('endGameModal');
const playAgainBtn = document.getElementById('newGame');
const modalMsg = document.getElementById('modalMsg');
//#################CSS#################
const winnerColor = "#aaf683";
const loserColor = "#bd1f36";


let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice;
    let computerNumber = Math.floor(Math.random() * 3 );
    if (computerNumber == 0) {
        computerChoice = "scissor";
        computerImg.innerText = "✂️";
    } else if (computerNumber == 1) {
        computerChoice = "rock";
        computerImg.innerText = "🪨";
    } else {
        computerChoice = "paper";
        computerImg.innerText = "🧻";
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