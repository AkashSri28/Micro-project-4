let rulesBtn = document.getElementById('rules-btn');
let gameRules = document.getElementById('game-rules');
gameRules.style.display = "none";

if(localStorage.getItem("userScore") === undefined){
    localStorage.setItem("userScore", 0);
    localStorage.setItem("computerScore", 0);
}

document.getElementById("user-score").innerText = Number(localStorage.getItem("userScore"));
document.getElementById("computer-score").innerText = Number(localStorage.getItem("computerScore"));

document.getElementById('rock').addEventListener("click", function(){
    localStorage.setItem("userChoice", 0);
    
})

document.getElementById('paper').addEventListener("click", function(){
    localStorage.setItem("userChoice", 1);
})

document.getElementById('scissor').addEventListener("click", function(){
    localStorage.setItem("userChoice", 2);
})

rulesBtn.addEventListener("click", function(){
    if(gameRules.style.display === "none"){
        gameRules.style.display = "block";
    }
    else{
        gameRules.style.display = "none";
    }
})