const hangmanGameElement = document.querySelector('#hangman-board')
const puzzleBoardElement = document.querySelector('#puzzle-display')
const lettersGuessedElement = document.querySelector('#letters-guessed')
const guessesLeftElement = document.querySelector('#guesses-left')

const game1 = new Hangman()
game1.setWord('chocolate')
console.log(game1.status)

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuesses(guess)
    this.console.log(game1.status)
    puzzleBoardElement.textContent = game1.getPuzzle()
    lettersGuessedElement.textContent = `Letters Guessed: ${game1.lettersGuessed}`
    guessesLeftElement.textContent = `Number of guesses left: ${game1.guesses}`
})


hangmanGameElement.innerHTML = ''

puzzleBoardElement.innerHTML = '<h3>'
puzzleBoardElement.textContent = game1.getPuzzle()
hangmanGameElement.appendChild(puzzleBoardElement)

lettersGuessedElement.innerHTML = '<p>'
lettersGuessedElement.textContent = `Letters Guessed: ${game1.lettersGuessed}`
hangmanGameElement.appendChild(lettersGuessedElement)

guessesLeftElement.innerHTML = '<p>'
guessesLeftElement.textContent = `Number of guesses left: ${game1.guesses}`
hangmanGameElement.appendChild(guessesLeftElement)

