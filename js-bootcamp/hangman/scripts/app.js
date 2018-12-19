//HTTP (Hypertext Transfer Protocol)
//Request - What do we want to do
//Response - what was actually done

const hangmanGameElement = document.querySelector('#hangman-board')
const puzzleBoardElement = document.querySelector('#puzzle-display')
const lettersGuessedElement = document.querySelector('#letters-guessed')
const guessesLeftElement = document.querySelector('#guesses-left')

let game1 


window.addEventListener('keypress', (e) => {
    if (game1.status === "playing") {
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuesses(guess)
        render()
    }
})

const render = () => {
    puzzleBoardElement.innerHTML = ''

    //puzzleBoardElement.textContent = game1.puzzle
    lettersGuessedElement.textContent = `Letters Guessed: ${game1.lettersGuessed}`
    guessesLeftElement.textContent = game1.statusMessage
    const puzzle = game1.puzzle.split('')
    
    puzzle.forEach((letter) => {
        const puzzleEl = document.createElement('span')
        puzzleEl.textContent = letter
        puzzleBoardElement.appendChild(puzzleEl) 
    })
    
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 7)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
//example of asychronous execution
/* getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
}) */

/* getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
}) */


