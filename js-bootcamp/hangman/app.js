//HTTP (Hypertext Transfer Protocol)
//Request - What do we want to do
//Response - what was actually done

const hangmanGameElement = document.querySelector('#hangman-board')
const puzzleBoardElement = document.querySelector('#puzzle-display')
const lettersGuessedElement = document.querySelector('#letters-guessed')
const guessesLeftElement = document.querySelector('#guesses-left')

const game1 = new Hangman('Merry Christmas', 7)
//game1.setWord('chocolate')
//console.log(game1.status)


puzzleBoardElement.textContent = game1.puzzle
lettersGuessedElement.textContent = `Letters Guessed: ${game1.lettersGuessed}`
guessesLeftElement.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
    if (game1.status === "playing") {
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuesses(guess)
        puzzleBoardElement.textContent = game1.puzzle
        lettersGuessedElement.textContent = `Letters Guessed: ${game1.lettersGuessed}`
        guessesLeftElement.textContent = game1.statusMessage
    }
})

//example of asychronous execution
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

getCountry('MX').then((country) => {
    console.log(`Country: ${country}`)
}, (err) => {
    console.log(`Error: ${err}`)
})


