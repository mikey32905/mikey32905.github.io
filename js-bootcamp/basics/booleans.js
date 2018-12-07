
let temp = 32
let isFreezing = temp <= 32

if (isFreezing)
{
    console.log('It is freezing outside!!')
}

//Challenge area
// under 7 - child discount
// over 65 - senior
// standard adult
let age = 48

let isChild = age <= 7
let isSenior = age >= 65

console.log('Your entered age, ' + age + ', produces the following:\r\n')
console.log('Are you a child: ' + isChild + '.\r\n')
console.log('Are you a senior: ' + isSenior +'.')

//Challenge 2 area.  Use if statements for above.
age = 48

console.log("\r\n\r\nChallenge 2:\r\n")
console.log('Your entered age, ' + age + ', produces the following:\r\n')

if (age <= 7) {
    console.log('You get a child discount. \r\n')
}
else if (age >= 65){
    console.log('You get a senior discount. \r\n')
}
else
{
    console.log("You get no discount. \r\n")
}

console.log('\r\n\r\n\r\n')

//challenge 3 (is it freezing)

temp = 25

console.log("\r\n\r\nChallenge 3:\r\n")
console.log('The entered temperature is ' + temp + '.\r\n\r\n')

if (temp <= 32) {
    console.log('It is freezing outside!!!\r\n')
}
else if (temp >= 95) {
    console.log('it is hot outside!!\r\n')
}
else {
    console.log('Go for it!! It is pretty nice outside!')
}
