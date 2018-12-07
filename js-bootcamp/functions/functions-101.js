// function - input, code, output

let greetUser = function() {
    console.log('Welcome to functions, user!')
}

greetUser()

console.log('\r\n\r\n')

let square = function(number) {
    return number * number
}

console.log(square(3))

console.log('\r\n\r\n')

//Convert Fahrenheit to Celsius Function Challenge
console.log("Challenge: Fahr to Celsius function challenge.")

let convertFahrToCelsius = function(fahr){
    let fahrValue = Number.parseFloat(fahr)
    let celsiusConv = (fahrValue - 32) * (5/9)
    return celsiusConv
}

let enteredValue = "68"//prompt("Enter a temperature value in fahrenheit to convert: ")

let converted = convertFahrToCelsius(enteredValue)

console.log(enteredValue + '°F = ' + converted + '°C')