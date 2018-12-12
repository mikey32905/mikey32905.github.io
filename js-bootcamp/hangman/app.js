const hangmanGameElement = document.querySelector('#hangman-board')
const puzzleBoardElement = document.querySelector('#puzzle-display')
const lettersGuessedElement = document.querySelector('#letters-guessed')
const guessesLeftElement = document.querySelector('#guesses-left')

const game1 = new Hangman('chocolate', 7)
//game1.setWord('chocolate')
console.log(game1.status)

window.addEventListener('keypress', function(e) {
    if (game1.status === "playing") {
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuesses(guess)
        puzzleBoardElement.textContent = game1.puzzle
        lettersGuessedElement.textContent = `Letters Guessed: ${game1.lettersGuessed}`
        guessesLeftElement.textContent = game1.statusMessage
    }
})


puzzleBoardElement.textContent = game1.puzzle
lettersGuessedElement.textContent = `Letters Guessed: ${game1.lettersGuessed}`
guessesLeftElement.textContent = game1.statusMessage
