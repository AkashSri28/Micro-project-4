let gameRules = document.getElementById('game-rules');
gameRules.style.display = "none";

let choice = ['rock', 'paper', 'scissor'];
let pcChoice = Math.floor(Math.random()*2);
let userChoice = Number(localStorage.getItem("userChoice"));
let againstPC = document.getElementById("against-pc");
let result;

document.getElementById("user-score").innerText = Number(localStorage.getItem("userScore"));
document.getElementById("computer-score").innerText = Number(localStorage.getItem("computerScore"));


document.getElementById("play-again-btn").addEventListener("click", function(){
    location.href = "index.html";
})

function updateScore(playerName){
    let score;
    if(playerName === "user"){
        score = Number(localStorage.getItem("userScore"));
        localStorage.setItem("userScore", score+1); 
        document.getElementById("user-score").innerText = Number(localStorage.getItem("userScore"));
    }
    else{
        score = Number(localStorage.getItem("computerScore"));
        localStorage.setItem("computerScore", score+1);
        document.getElementById("computer-score").innerText = Number(localStorage.getItem("computerScore"));
    }
}

function displayResult(userChoice, pcChoice){
    let resultString = document.getElementById("result-string");
    if(userChoice === pcChoice){
        result = "TIE UP";
        againstPC.style.display = "none";
    }
    else{
        if(choice[userChoice] === "rock"){
            if(choice[pcChoice] === "paper"){
                result = "YOU LOST";
                updateScore('computer');
            }
            else{
                result = "YOU WIN";
                updateScore('user');
            }
        }
        else if(choice[userChoice] === "paper"){
            if(choice[pcChoice] === "scissor"){
                result = "YOU LOST";
                updateScore('computer')
            }
            else{
                result = "YOU WIN";
                updateScore('user');
            }
        }
        else{
            if(choice[pcChoice] === "rock"){
                result = "YOU LOST";
                updateScore('computer');
            }
            else{
                result = "YOU WIN";
                updateScore('user');
            }
        }
    }
    resultString.innerText = result;
}

function startGame(){
    let userChoiceImg = document.createElement("img");
    userChoiceImg.src = `./images/${choice[userChoice]}.png`;
    console.log(userChoiceImg.src)
    let userChoiceLoc = document.getElementById('user-choice-loc');
    userChoiceLoc.appendChild(userChoiceImg);

    let pcChoiceImg = document.createElement("img");
    pcChoiceImg.src = `./images/${choice[pcChoice]}.png`;
    let pcChoiceLoc = document.getElementById('pc-choice-loc');
    pcChoiceLoc.appendChild(pcChoiceImg);

    displayResult(userChoice, pcChoice);

}

startGame();