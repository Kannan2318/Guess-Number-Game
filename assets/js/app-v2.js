// GUESS THE NUMBER 🔢
// ___________________________
// FLOW >> 
// GET INPUT FROM INPUT FIELD
// UPDATE SCORE 
// UPDATE STATUS
// UPDATE HIGH-SCORE
// ___________________________

'use strict'    
const checkBtn = document.querySelector(".check");
function secretNumberFun(){return Math.trunc(Math.random()*20)+1;}
function displayMessage(message){document.querySelector(".message").textContent = message;}
function displaySecretNumber(secretNumber){document.querySelector('.number').textContent = secretNumber;}
function displayScore(score){document.querySelector('.score').textContent =score;}
function bgColorChange(color){
    bodyEl.style.background =color;
}
let secretNumber = secretNumberFun();
const againBtn = document.querySelector('.again');
const bodyEl = document.querySelector('body');
let highScore = 0;
let score = 20;
let blink = 0;
checkBtn.addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    displayMessage("✅Correct");    
    // NO INPUT
    if(!guess) displayMessage("⚠️Warning: Please enter the guess number");    
    // PLAYER WINS
    else if(guess === secretNumber){
        displaySecretNumber(secretNumber);
        bgColorChange('green');    
        if(score > highScore)  {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // USING DRY METHOD
    else if(guess !== secretNumber){
        if(score > 1){
            let findScore = guess > secretNumber ?"🔔 Your Guess is too high":"🔔 Your Guess is too low";
            displayMessage(findScore);
            score--;
            displayScore(score);
        }
        else{
            displayMessage("💀 You lose the game, Try again");            
            displayScore(0);
            bgColorChange('red');            
        }
    }
})
// REPLAY
againBtn.addEventListener('click',function(){
    score = 20;
    secretNumber = secretNumberFun();  
    displaySecretNumber('?');
    displayMessage("Start guessing...");    
    displayScore(score);    
    document.querySelector('.guess').value="";
    bgColorChange('#222222');
    
})



