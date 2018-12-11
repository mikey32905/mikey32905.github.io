
//const words = ['chocolate', 'Merry Christmas', 'Spiderman', 'New Years Eve', 'winter', 'Titanic']
const Hangman = function(word = [], guesses, lettersGuessed = [], status = 'playing') {
    this.word = word
    this.guesses = guesses
    this.lettersGuessed = lettersGuessed
    this.status = status
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

    this.calculateStatus()
 }

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

Hangman.prototype.calculateStatus = function() {
    if (this.guesses === 0) {
        this.status = 'failed'
    } else if (!this.getPuzzle().includes('*')) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

