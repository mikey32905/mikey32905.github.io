class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.lettersGuessed = []
        this.status = 'playing'    
    }
    setWord(word) {
        let newWord = word.toLowerCase().split('')
        this.word = newWord
        this.guesses = 7         
    }
    makeGuesses(guess) {
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
   get puzzle() {
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
    calculateStatus() {
        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (!this.puzzle.includes('*')) { //
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }    

    }
    get statusMessage() {
        if (this.status === "failed") {
            return `Nice try! The word was "${this.word.join('')}".`
        } else if (this.status === "finished") {
            return 'Great work!! You guessed the word!'
        } else {
            return `Guesses left: ${this.guesses}`
        }    
    }
}
