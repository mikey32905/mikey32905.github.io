//arrow function

//short hand arrow function call
const square = (num) =>  num * num


console.log(square(100))

//normal function call
const squareLong = (num) => {
    return num * num
}

console.log(squareLong(5))

const people = [{
    name: 'Mike',
    age: 48
},{
    name: 'John',
    age: 26
},{
    name: 'Alec',
    age: 98
}]

const under30Long = people.filter(function(person) {
    return person.age < 30
})

const under30 = people.filter((person) =>  person.age < 30)

console.log(under30)

const findPersonByage = people.find((person) => person.age === 98)
console.log(findPersonByage.name)