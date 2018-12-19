//Battleship game: by Mike Williams (12-18-18) v1.0
const battleshipBoardElement = document.querySelector('#battleship-board')
const puzzleDisplayElement = document.querySelector('#puzzle-display')
const titleElement = document.querySelector('#title')
const guessRowElement = document.querySelector('#row-guess')
const guessColumnElement = document.querySelector('#column-guess')
const fireButtonElement = document.querySelector('#fire-button')
const gameStatusElement = document.querySelector('#guesses-left')

let gameBoard = []
//let turn = 1
const gameStatus = {
    turn: 1,
    status: 'starting'
}

const generateGameBoard = (board) => {
    puzzleDisplayElement.innerHTML = ''
    console.log(`Game Status: ${gameStatus.status}`)
    for (let i = 0; i < 9; i++) {
        //create an empty line
        if (gameStatus.status === 'starting') {
            board.push([])
        
            //add columns to empty line
            board[i].push(new Array(9))
        }

        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== "X" && board[i][j] !== "*") {
                board[i][j] = "O"
            }
        }
    }

    gameBoard = board

     board.forEach((row) => {
        row.forEach((item) => {
            const gameBoardEl = document.createElement('span')
            gameBoardEl.textContent = item
            puzzleDisplayElement.appendChild(gameBoardEl)
        })
        puzzleDisplayElement.innerHTML += ('<br />')
    }) 
}

let getGuessRow = NaN
let getGuessColumn = NaN

const randomRow = () => {
    return Math.floor(Math.random() * 9)
}

const randomColumn = () => {
    return Math.floor(Math.random() * 9)   
}

const generateStatusMessage = () => {
    if (gameStatus.status === 'playing') {
        gameStatusElement.textContent = `You missed!  Try again! Turn: ${gameStatus.turn}`
    } else if (gameStatus.status === 'finished') {
        gameStatusElement.textContent = 'Congratulations! You sunk my battleship!'
    } else if (gameStatus.status === 'failed') {
        gameStatusElement.textContent = `Game Over!! Ship was located at: ${shipRow}, ${shipColumn}. `
    } else {
        gameStatusElement.textContent = 'Good luck!! You may start your game!'
    }
}


generateGameBoard(gameBoard)
const shipRow = randomRow()
const shipColumn = randomColumn()

console.log(`Ship's Row: ${shipRow}  Ship's Column: ${shipColumn}`)
titleElement.textContent = "Let's play Battleship!!"
generateStatusMessage()
gameStatus.status = 'playing'

guessRowElement.addEventListener('input', (e) => {
    console.log(`Row Guess: ${e.target.value}`)
    if (gameStatus.status === 'playing') {
        if (isNaN(e.target.value)) {
            console.log('Row guess must be number 0 - 8')
        } else {
            getGuessRow = parseInt(e.target.value)
        }
    }
})

guessColumnElement.addEventListener('input', (e) => {
    console.log(`Column Guess: ${e.target.value}`)
    if (gameStatus.status === 'playing') {
        if (isNaN(e.target.value)) {
            console.log('Column guess must be number 0 - 8')
        } else {
            getGuessColumn = parseInt(e.target.value)
        }
    }
})

fireButtonElement.addEventListener('click', (e) => {
    if (gameStatus.status === 'playing') {
        console.log(`Guess Row: ${getGuessRow}  Guess Column: ${getGuessColumn}`)
        // debugger
            if (getGuessRow === shipRow && getGuessColumn === shipColumn) {
                gameStatus.status = 'finished'
                gameBoard[shipRow][shipColumn] = '*'
            } else {
                if (getGuessRow < 0 || getGuessRow > 4) {
                    console.log('Oops, that\'s not even in the ocean!')
                } else if (gameBoard[getGuessRow][getGuessColumn] === 'X') {
                    console.log('You guessed that one already!!')
                } else {
                    console.log('You missed my battleship!')
                }

                if (gameStatus.turn === 9) {
        //            console.log('Game Over!!')
                    gameStatus.status = 'failed'
                    gameBoard[shipRow][shipColumn] = "*"
        //            console.log(`Ship located at: ${shipRow}, ${shipColumn}.`)
                } else {
                    gameStatus.status = 'playing'
                    gameBoard[getGuessRow][getGuessColumn] = 'X'
                    gameStatus.turn++
                }

            }

            generateStatusMessage()
            generateGameBoard(gameBoard)
            guessRowElement.value = null
            guessColumnElement.value = null
    }
})


