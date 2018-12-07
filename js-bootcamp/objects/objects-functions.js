let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
   // console.log(`${book.title} by ${book.author}`)
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge Area:
console.log('\r\nChallenge area\r\n')

/*Create a function - take fahrenheit in return object with all three values 
  (fahr, celsius, kelvin)
   
*/
let fahrTempConv = function(fahr) {
    let calcCelsius = (fahr - 32) * (5/9)
    let calcKelvin = calcCelsius + 273.15
    return {
        fahrenheit: fahr,
        celsius: calcCelsius,
        kelvin: calcKelvin
    }    
}

let tempConvert1 = fahrTempConv(32)
let tempConvert2 = fahrTempConv(68)
let tempConvert3 = fahrTempConv(212)

console.log(tempConvert1)
console.log(tempConvert2)
console.log(tempConvert3)



