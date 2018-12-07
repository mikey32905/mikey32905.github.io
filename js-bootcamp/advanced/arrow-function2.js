const add = function(a, b) {
    console.log(arguments)
    return arguments[0] + arguments[1]
}

console.log(add(11,22,33,44))

//method definition syntax
const car = {
    color: 'Gray',
    getSummary() {
        return `The car is ${this.color}.`
    }
}

console.log(car.getSummary())