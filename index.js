let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 6

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function guessNumbers() {
    const inputValue = Number(document.getElementById('inputNumber').value)
    userNumbers.push(' ' + inputValue)
    document.getElementById('guesses').innerHTML = userNumbers 
    attempts = document.getElementById('attempts').innerHTML = userNumbers.length

    if(attempts < maxguesses){
        if (inputValue > computerNumber) {
            document.getElementById('yourGuess').innerHTML = 'Number too high'
            document.getElementById('inputNumber').value = ''
        }
        else if (inputValue < computerNumber) {
            document.getElementById('yourGuess').innerHTML = 'Number too low'
            document.getElementById('inputNumber').value = ''
        } else {
            document.getElementById('yourGuess').innerHTML = 'Congratulations!!'
            document.getElementById('inputNumber').setAttribute('Readonly','Readonly')
        }
    } else {
        document.getElementById('yourGuess').innerHTML = `You lose! the computer number was ${computerNumber}`
        document.getElementById('inputNumber').setAttribute('Readonly','Readonly')
    }
}

function reloading(){
    window.location.reload()
}


