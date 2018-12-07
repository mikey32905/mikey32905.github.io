//type coercion - a string, number, or boolean loose equality: ==  strict equality: ===

console.log('5' + 4)
console.log('5' - 5)
console.log(5 == '5')

const type = typeof 1234
console.log(type)

const value = true + 12
const type2 = typeof value
console.log(value)
console.log(type2)