//Multiple arguments

let add = function(num1, num2) {
    return num1 + num2
}

let result = add(2,3)

console.log(result)

console.log('\r\n\r\n')

// Default arguments
let getScoreText = function(name = 'unknown', score = 0){
   /*  console.log(name)
    console.log(score) */
    return `Name: ${name}  --  Score: ${score}\r\n`
}

console.log(getScoreText())
console.log(getScoreText('Mike', 100))

console.log('\r\n')

//challenge area
console.log("Challenge:")

let tipCalculator = function(total, tipPercent = .15) {
    let tipPercentValue = tipPercent * 100
    let tipCalc = total * tipPercent
    let billTotal = total + tipCalc
    let result = 'Your tip calculation: \r\n'
    let result0 = `Bill Total: \$${total}\r\n`//Bill Total: $' + total + '\r\n'
    let result1 = `A ${tipPercentValue}% on your bill total would be \$${tipCalc}\r\n`
    //Tip amount at ' + tipPercentValue + '%:  $' + tipCalc + "\r\n"
    let result2 = `Your bill total w/ tip is: \$${billTotal}\r\n`
    //'Total Bill Amount w/ tip is: $' + billTotal + '\r\n'
    return result + result0 + result1 + result2
}

let test1 = tipCalculator(23.43)
let test2 = tipCalculator(10.45,.25)
let test3 = tipCalculator(30.65, .10)

console.log(test1)
console.log(test2)
console.log(test3)

////Template strings
//` back tip key, used for creating template strings
//Calculations can be done in template strings.
let name = 'Mike'
let age = 48
console.log(`Hey, my name is ${name}. I am ${age} years old.`)
