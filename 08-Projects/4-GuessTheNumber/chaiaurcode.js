const number = Math.floor(Math.random()*100+1)

const submit =document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const PrevGuess =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true 
if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
//to validate no bw 1 to 100
if(isNaN(guess)){
    alert('Please add a valid number : ')
    }
else if(guess<1){
        alert('enter a number bw 1 to 100')
}
else if(guess>100){
    alert('enter a number bw 1 to 100')
}
else {
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Gameover , Random No was ${number}`)
        endgame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
//validate = random no
if(guess === number){
    displayMessage('Pass')
    endgame()
}
else if(guess < number){
    displayMessage('Number is too low ')
    
}
else if(guess > number){
    displayMessage('Number is too High ')
    
}
}
function displayGuess(guess){
//clean value and give guess value to array 
userInput.value = ''
prevGuess.innerHTML =+ `${guess}  `
numGuess++
remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(meggage){
//to pass a message 
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton. addEventListener('click', function (e) {
      randomNumber =parseInt(Math. random() * 100 + 1);
      prevGuess =[];
      numGuess = 1;
      prevGuess.innerHTML =
      remaining.innerHTML = `$(11 - numGuess} `
      userInput.removeAttribute('disabled');
      startOver.removeChild(p)
      playGame = true
       })
    
}

function endgame(){
userInput.value = ''
userInput.setAttribute('disable', '')
p.classList.add('button')
p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`
startOver.appendChild(p)
playGame= false
newGame()
}
