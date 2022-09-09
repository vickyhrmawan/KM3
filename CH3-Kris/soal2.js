class Animal {
    constructor(name, age, status, legs, species ){
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
        super(name, age, status)
        this.legs = 0
        this.species = "Shark"
    }
    show(){
        return this.introduce() + ' I can ' + this.status
    }
}
