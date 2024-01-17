'use strict'
const secretNumber = Math.trunc(Math.random() * 20 )+1;
console.log(secretNumber);
function secretNumberfn(){
    return Math.trunc(Math.random() * 20 )+1;
}
let guessScore = Number(document.querySelector('.score').textContent);    
let checkBtn = document.querySelector('.check');


checkBtn.addEventListener('click',function(){    
    let guess = document.querySelector('.guess').value;   
    let score = Number(document.querySelector('.score').textContent)
    let highScore = 0;
    // console.log(guess);
    if(guess    == ""){
        document.querySelector('.message').textContent = 'Feild is Empty Please Guess any Number';
    }
    if (secretNumber === Number(guess)){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Your guess is correct';
        document.querySelector('body').style.backgroundColor = '#05d229';
        if (score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore;           
        }
        
    }
    if(secretNumber >=  Number(guess)){
        document.querySelector('.message').textContent = 'Value is Low';                        
    }
    if(secretNumber <= guess){
        document.querySelector('.message').textContent = 'Value is High';                           
    }
    if(score === 0){
        document.querySelector('body').style.backgroundColor = 'red';
    }
    else{
        Number(document.querySelector('.score').textContent =  score - 1);
    }


})


let resetAgainBtn = document.querySelector('.again')
resetAgainBtn.addEventListener('click',function(){
        secretNumberfn();
                document.querySelector('.message').textContent = 'Start guessing...';
                document.querySelector('.score').textContent = 20;
                // document.querySelector('.highscore').textContent = latestScore;
                document.querySelector('.guess').value = '';
                document.querySelector('body').style.backgroundColor = '#222';
        }
    )


// WRIGHT LOGIC FOR GUESSING NUMBER

// RETURN SCORE BOARD VALUE
// RETURN HIGHEST SCORE
// REPLAY FUNCTION
