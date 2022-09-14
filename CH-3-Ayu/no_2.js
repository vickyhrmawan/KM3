class Animal {
    constructor(name, age, legs, species, status){
        this.name = name
        this.age = age
        this.legs = legs 
        this.species = species
        this.status = status
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

class Shark extends Animal{
    constructor(name, age, status){
        super(name, age)
        this.status = status
        this.legs = 0
        this.species = "Shark"
    }
    show(){
        return this.introduce() + ' I can ' + this.status
    }
}
let myShark = new Shark("SharkBoy", 11, "Swim")
console.log(myShark.show())
console.log(myShark)


class Cat extends Animal{
    constructor(name, age, status){
        super(name, age)
        this.status = status
        this.legs = 4
        this.species = "Cat"
    }
    show(){
        return this.introduce() + ' I can ' + this.status
    }
}
let myCat = new Cat("Jaenudin", 5, "run")
console.log(myCat.show())
console.log(myCat)

class Dog extends Animal{
    constructor(name, age, status, master){
        super(name,age,status)
        this.status = status
        this.legs = 4
        this.master = master
        this.species = "Dog"
     
    }
    greetMaster(){
        return ` My lord ${this.master}`
    }
    show(){
        return this.introduce() + this.greetMaster()
    }
}
let myDog = new Dog("Asep", 4, "bite", "Ayuapry")
console.log(myDog.show())
console.log(myDog)