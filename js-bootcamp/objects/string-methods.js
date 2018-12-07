let name = ' Mike Williams  '

//Length property - can be used to validate user's password for example.
console.log(name.length)

// Convert to upper case.
console.log(name.toUpperCase())

// Convert to lower case.
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim - remove extra white space
console.log(name.trim())

//Challenge area
//create a function IsValidPassword
//only return true if:
//  -- length >=8
//  -- does not contain the word password

console.log('\r\nChallenge area:\r\n')

let isValidPassword = function(text) {
    //can be done as follows:
    // return (text.length >= 8 && !text.includes('password'))
    if (text.length >= 8 && !text.includes('password')) {
        return 'Your password is valid!!'
    } else {
        return 'Your password is invalid!'
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('D_-u09m_-B'))
console.log(isValidPassword('asdfpasdfpoijpassword'))