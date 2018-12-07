let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge Area
//Model a person (name, age, location) 
//create a string (name is age and lives in location)
//increase age by one and then reprint.
console.log('\r\nChallenge\r\n')

let aPerson = {
    name: 'Mike',
    age: 47,
    location: 'Melbourne, FL'
}

console.log(`${aPerson.name} is ${aPerson.age} and lives in ${aPerson.location}.`)

aPerson.age = 48

console.log(`${aPerson.name} is ${aPerson.age} and lives in ${aPerson.location}.`)
