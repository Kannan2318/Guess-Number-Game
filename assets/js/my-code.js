'use strict'
// GUESS THE NUMBER
// GET VALUE FROM INPUT FIELD USING EVENT LISTNER
// CREATE SECRET NUMBER 
// WRIGHT LOGIC FOR GUESSING NUMBER
// RETURN SCORE BOARD VALUE
// RETURN HIGHEST SCORE
// REPLAY FUNCTION

const secretNumber = Math.trunc(Math.random() * 20 )+1;
console.log(secretNumber);

function secretNumberfn(){
    return Math.trunc(Math.random() * 20 )+1;
}

let guessScore = Number(document.querySelector('.score').textContent);    
let checkBtn = document.querySelector('.check');
let resetAgainBtn = document.querySelector('.again')

resetAgainBtn.addEventListener('click',function(){
        secretNumberfn();
                document.querySelector('.message').textContent = 'Start guessing...';
                document.querySelector('.score').textContent = 20;
                document.querySelector('.guess').value = '';
                document.querySelector('body').style.backgroundColor = '#222';
        }
    )
checkBtn.addEventListener('click',function(){    
    let guess = document.querySelector('.guess').value;   
    let score = Number(document.querySelector('.score').innerHTML)
    if(guess === ""){
        document.querySelector('.message').textContent = 'Feild is Empty Please Guess any Number';
    }else if (secretNumber === Number(guess)){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Your guess is correct';
        document.querySelector('body').style.backgroundColor = '#05d229';
    }else if(secretNumber >=  Number(guess)){
        document.querySelector('.message').textContent = 'Value is Low';                        
    }
    else if(secretNumber <= guess){
        document.querySelector('.message').textContent = 'Value is High';                           
    }
    if(score === 0){
        document.querySelector('body').style.backgroundColor = 'red';
    }
    else{
        Number(document.querySelector('.score').innerHTML =  score - 1)
    }


})

