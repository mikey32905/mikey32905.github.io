const myFunction = () => {
    const message = 'This is my message.'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()
//console.log(myPrintMessage)

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-5))
console.log(add10(40))

const add100 = createAdder(100)
console.log(add100(-90))

//Tipper

const createTipper = (tip) => {
    return (billAmt) => {
        const tipPercent = tip / 100
        const tipAmt = billAmt * tipPercent
        return `Tip Amount for $${billAmt} at ${tip}% is $${tipAmt}.`
    }
}

const tipper1 = createTipper(15)
console.log(tipper1(25.50))
console.log(tipper1(50.34))
console.log(tipper1(45.67))
const tipper2 = createTipper(25)
console.log(tipper2(25.50))
console.log(tipper2(50.34))
console.log(tipper2(45.67))

