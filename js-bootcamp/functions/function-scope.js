//Global Scope( convertFahrToCelsius, enteredValue, converted)
  //Local Scope (fahrValue, celsiusConv)
    //Local Scope (isFreezing)

let convertFahrToCelsius = function(fahr){
    let fahrValue = Number.parseFloat(fahr)
    let celsiusConv = (fahrValue - 32) * (5/9)

    if (celsiusConv <= 0) {
        let isFreezing = true
    }

    return celsiusConv
}

let enteredValue = "68"//prompt("Enter a temperature value in fahrenheit to convert: ")

let converted = convertFahrToCelsius(enteredValue)

console.log(enteredValue + '°F = ' + converted + '°C')

