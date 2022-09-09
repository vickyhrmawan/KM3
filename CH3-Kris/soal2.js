class Animal {
    constructor(name, age, status, legs, species ){
        this.name = name
        this.age = age
        this.legs = legs
        this.species = species
        this.status = status
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. I am a ${this.species}, I have ${this.legs} legs, and i can ${this.status}`
    }
}

class Shark extends Animal{
    constructor(name, age, status){
        super(name, age, status)
        this.legs = 0
        this.species = "Shark"
    }
    intro(){
        return this.introduce()
    }
}

class Cat extends Animal{
    constructor(name, age, status){
        super(name, age, status)
        this.legs = 4
        this.species = "Cat"
    }
    intro(){
        return this.introduce()
    }
}

class Dog extends Animal{
    constructor(name, age, status, master){
        super(name, age, status)
        this.legs = 4
        this.master = master
        this.species = "Dog"

    }
    greetMaster(){
        return `Hail my master ${this.master}. `
    }
    intro(){
        return this.greetMaster() + this.introduce()
    }
}

let myShark = new Shark("Sharky", 21, "Swim")
let myCat = new Cat("Fabregas", 5, "Scratch")
let myDog = new Dog("Joergen", 4, "Bite", "Regis")

console.log (`Shark`)
console.log (`--------`)
console.log(myShark.intro())
console.log(`\n`)
console.log (`Cat`)
console.log (`--------`)
console.log(myCat.intro())
console.log(`\n`)
console.log (`Dog`)
console.log (`--------`)
console.log(myDog.intro())