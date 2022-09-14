class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name
        this.age = age
        this.legs = legs
        this.species = species
        this.status = status
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, status)
        this.species = 'Shark'
        this.legs = 0
        this.status = status
    }
    show() {
        return this.introduce() + `Kaki ${this.legs}, spesies ${this.species}, status ${this.status}` 
    }
    
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status)
        this.legs = 4
        this.species = 'Cat'
        this.status = status
    }
    show() {
        return this.introduce() + `Kaki ${this.legs}, spesies ${this.species}, status ${this.status}`
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, status)
        this.legs = 4
        this.species = 'Dog'
        this.status = status
        this.master = master
    }
    show() {
        return this.introduce() + `Kaki ${this.legs}, spesies ${this.species}, status ${this.status}`
    }
    greetMaster() {
        return `Hello ${this.master}, woof woof `
    }
}


let myShark = new Shark('Hiu Patil', 17,'Berenang')
let myCat = new Cat('Kucing Garong', 8,'Berjalan')
let myDog = new Dog('Poodle', 12,'Duduk','Gihon')

// let showShark = myShark.show()
// console.log(myDog.show())
// let showCat = myCat.show()
// let showDog = myDog.show()
let greetDog = myDog.greetMaster()

module.exports = greetDog