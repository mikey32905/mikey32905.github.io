const myAge = 15

//        condition   op  true         op   false
const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote!'

//let message

/* if (myAge >= 18) {
    message = 'You can vote!'
} else {
    message = 'You cannot vote!'
} */

console.log(message)
const showPage = () => {
    console.log('Showing the page!')
}

const showError = () => {
    console.log('Showing the error page!')
}

//condition op   true    op  false
myAge >= 21 ? showPage() : showError()

const team = ['Mike', 'Jimmy', 'Keith', 'Matt']//

const status = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team!'

console.log(status)