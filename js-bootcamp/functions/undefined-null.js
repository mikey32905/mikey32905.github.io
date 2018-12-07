//undefined = absense of a value

//Undefined for a variable
let name

name = "Mike"

if (name === undefined) {
    console.log('Please provide a name!')
} else {
    console.log(name)
}

console.log('\r\n\r\n')

//Undefined for a function 
//Undefined as function return default value
let square = function(num) {
    console.log(num * num)
}

let result = square()
console.log(result)

//null as assigned value
let age = 27

age = null

console.log(age)