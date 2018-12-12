//Prototypal Inheritance
//myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes    
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => { 
            bio += ` ${this.firstName} likes ${like}. `
        })
    
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]     
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        // Mike is a software designer
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade, age, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'

        return `${this.fullName} is ${status} the class.`
    }
    updateGrade(score) {
        return this.grade += score
    }

}

const me = new Employee('Mike', 'Williams', 48, 'software designer', ['gaming', 'hugging', 'walking'])
//console.log(me)
//me.setName('George Williams')
console.log(me.getBio())
console.log(me.getYearsLeft())

const person2 = new Person('Jodi', 'Williams', 42)//, ['waitressing']
console.log(person2.getBio())

const newKid = new Student('Mike', 'Williams', 85, 48, [])
console.log(newKid)
console.log(newKid.getBio())
newKid.updateGrade(-50)
console.log(newKid.getBio())