let num = 103.941

//toFixed() decimal places
console.log(num.toFixed(2))

//round
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//random generates number (0 - .999999)
let randomNum = Math.random()

//console.log(randomNum)
console.log(randomNum)

///  sample random
let min = 10
let max = 20
randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//0-10

console.log(randomNum)
//console.log(randomNum) 

//guessing game Challenge
console.log('\r\nChallenge: \r\n')

// 1-5 - true if correct.  False if not correct

let guessNumber = function(num) {
    let min = 1
    let max = 5
    let testNum = Math.floor(Math.random() * (max - min +1) + min)

    return num === testNum
}

console.log(guessNumber(2))
console.log(guessNumber(1))
console.log(guessNumber(4))


