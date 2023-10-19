let gameRules = document.getElementById('game-rules');
let rulesBtn = document.getElementById('rules-btn');
gameRules.style.display = "none";

rulesBtn.addEventListener("click", function(){
    if(gameRules.style.display === "none"){
        gameRules.style.display = "block";
    }
    else{
        gameRules.style.display = "none";
    }
})

document.getElementById("play-again-btn").addEventListener("click", function(){
    location.href = "index.html";
})