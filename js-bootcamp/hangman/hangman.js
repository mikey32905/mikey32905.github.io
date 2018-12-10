const Hangman = function(word = [], guesses, lettersGuessed = []) {
    this.word = word
    this.guesses = guesses
    this.lettersGuessed = lettersGuessed
}

Hangman.prototype.setWord = function(word) {
    let newWord = word.toLowerCase().split('')
    this.word = newWord
    this.guesses = 7
}

Hangman.prototype.makeGuesses = function(guess) {
    const testGuess = guess.toLowerCase()
    const isUnique = !this.lettersGuessed.includes(testGuess)
    const isBadGuess = !this.word.includes(testGuess)

    if (isUnique) {
        this.lettersGuessed.push(testGuess)
    }

    if (isUnique && isBadGuess) {
        this.guesses--
    }
 }


Hangman.prototype.getPuzzle = function() {
    const puzzleResult = {
        puzzle: '',
        lettersGuessed: '',
        guessesLeft: 0
    }

    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.lettersGuessed.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }

    })

    this.lettersGuessed.forEach((letter) => {
        puzzleResult.lettersGuessed += letter + ' '
    })

    puzzleResult.puzzle = puzzle
    puzzleResult.guessesLeft = this.guesses

    return `Your puzzle results: \r\n ${puzzleResult.puzzle}   You have guessed: ${puzzleResult.lettersGuessed}.  You have ${puzzleResult.guessesLeft} remaining.`
}

const game1 = new Hangman()
game1.setWord('chocolate')
console.log(game1.getPuzzle())
this.console.log(game1.guesses)

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    //this.console.log(guess)
    game1.makeGuesses(guess)
    console.log(game1.getPuzzle())
    this.console.log(game1.guesses)
})


/* game1.makeGuesses('O')
game1.makeGuesses('c')
game1.makeGuesses('g')
game1.makeGuesses('N') */
//game1.makeGuesses(['o','c','g','n'])
/* const game2 = new Hangman()
game2.setWord('Christmas')
game2.makeGuesses('H')
game2.makeGuesses('s')
game2.makeGuesses('z')
//game2.makeGuesses(['h','s','z','g'])
const game3 = new Hangman()
game3.setWord('Merry Christmas')
game3.makeGuesses('M')
game3.makeGuesses('t')
game3.makeGuesses('r')
game3.makeGuesses('z')
game3.makeGuesses('q')
game3.makeGuesses('C')
//game3.makeGuesses(['m','t','r','z','q'])

console.log(game1)
console.log(game1.word.length)
console.log(game1.getPuzzle())
console.log(game2)
console.log(game2.getPuzzle())
console.log(game3)
console.log(game3.getPuzzle())
 */
//console.log([].length)