let temp = 65

if (temp >= 60 && temp <= 90) {
    console.log('It is really nice out!!')
}

//Challenge
// are both vegan? offer up only vegan meals
//at least one vegan? Make sure to offer up one vegan option.
//else anything on the menu
console.log('\r\n\r\n')
console.log('Challenge:\r\n\r\n')

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Here are your vegan dish options.')
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Here is a vegan menu and a non-vegan menu.')
}
else {
    console.log('Here is a non-vegan menu.')
}