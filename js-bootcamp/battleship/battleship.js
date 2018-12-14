//let board = []
const battleshipBoardElement = document.querySelector('#puzzle-display')
const titleElement = document.querySelector('#title')
const guessRowElement = document.querySelector('#row-guess')
const guessColumnElement = document.querySelector('#column-guess')
const fireButtonElement = document.querySelector('#fire')
//const lf = document.createElement('br')

let gameBoard = []
let turn = 1

titleElement.textContent = "Let's play Battleship!!"
const generateGameBoard = (board) => {
    battleshipBoardElement.innerHTML = ''
    
    for (let i = 0; i < 9; i++) {
        //create an empty line
        board.push([])
        //add columns to empty line
        board[i].push(new Array(9))

        for (let j = 0; j < 9; j++) {
            board[i][j] = "O"
        }
    }

    gameBoard = board

     board.forEach((row) => {
        battleshipBoardElement.innerHTML += (row + "<br />") 
    }) 
}

const getGuessRow = () => {
    return parseInt(guessRowElement.value)
}

const getGuessColumn = () => {
    return parseInt(guessColumnElement.value)
}

const randomRow = () => {
    return Math.floor(Math.random() * 9)
}

const randomColumn = () => {
    return Math.floor(Math.random() * 9)   
}

generateGameBoard(gameBoard)
const shipRow = randomRow()
const shipColumn = randomColumn()

console.log(`Ship's Row: ${shipRow}  Ship's Column: ${shipColumn}`)



fireButtonElement.addEventListener('click', () => {
    const guessRow = getGuessRow()
    const guessColumn = getGuessColumn()
    console.log(`Guess Row: ${guessRow}  Guess Column: ${guessColumn}`)
   // debugger
    if (guessRow === shipRow && guessColumn === shipColumn) {
        console.log('Congratulations! You sunk my battleship!')
        gameBoard[shipRow][shipColumn] = '*'
    } else {
        if (guessRow < 0 || guessRow > 4) {
            console.log('Oops, that\'s not even in the ocean!')
        } else if (gameBoard[guessRow][guessColumn] === 'X') {
            console.log('You guessed that one already!!')
        } else {
            console.log('You missed my battleship!')
        }

        if (turn === 9) {
            console.log('Game Over!!')
            gameBoard[shipRow][shipColumn] = "*"
            console.log(`Ship located at: ${shipRow}, ${shipColumn}.`)
        }

        gameBoard[guessRow][guessColumn] = 'X'
        turn++
        console.log(`Turn: ${turn}`)
        generateGameBoard(gameBoard)
    }
})
