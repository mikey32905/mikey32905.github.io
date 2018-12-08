const Hangman = function(word = [], guesses, lettersGuessed = []) {
    this.word = word
    this.guesses = guesses
    this.lettersGuessed = lettersGuessed
}

Hangman.prototype.setWord = function(word) {
    let newWord = word.toLowerCase().split('')
    this.word = newWord
    this.guesses = word.length + 3
}

Hangman.prototype.makeGuesses = function(guess = []) {
    this.lettersGuessed = guess
}

//    this.likes.forEach((like) => { 

/* Hangman.prototype.getPuzzle = function() {
    const guessed = this.lettersGuessed.length !== 0
    let result = ''
    let afterGuessedWord = ''

    if (guessed) {
        result = 'Guessed: '

        this.lettersGuessed.forEach((letter) => {
            result += `"${letter}" `
        })

        result += '? -> '

        this.word.forEach((letter) => {
            if ()
        })

    } else {
        result = 'No guesses? -> '
        this.word.forEach((letter) => {
            if (letter !== ' ') {
                result += '*'
            } else {
                result += ' '
            }
        
        })
    }

    return result
} 
 */

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.lettersGuessed.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

const game1 = new Hangman()
game1.setWord('chocolate')
game1.makeGuesses(['o','c','g','n'])
const game2 = new Hangman()
game2.setWord('Christmas')
game2.makeGuesses(['h','s','z','g'])
console.log(game1)
console.log(game1.word.length)
console.log(game1.getPuzzle())
console.log(game2)
console.log(game2.getPuzzle())
//console.log([].length)