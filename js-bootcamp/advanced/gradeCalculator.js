//grade calculation challenge
// function takes in students score, total possible score
//15/20 --> You got a C(75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function(studentScore, totalPossible) {
    if (typeof studentScore !== 'number' || typeof totalPossible !== 'number') {
        throw Error('Arguments must be a number')
    }

    let percent = studentScore / totalPossible * 100
    let gradeLetter

    if (percent >= 90) {
        gradeLetter = "A"
    } else if (percent >= 80 && percent <= 89) {
        gradeLetter = "B"
    } else if (percent >= 70 && percent <= 79) {
        gradeLetter = "C"
    } else if (percent >= 60 && percent <= 69) {
        gradeLetter = "D"
    } else {
        gradeLetter = "F"
    }

    let result = `You got a ${gradeLetter} (${percent}%) !!`
    return result
}

console.log(gradeCalc(15,20))
console.log(gradeCalc(18,50))
console.log(gradeCalc(19,20))
console.log(gradeCalc(17,20))
console.log(gradeCalc(13,20))

try {
    const result = gradeCalc('test',20)
    console.log(result)
} catch (e) {
    console.log(e.message)
}
