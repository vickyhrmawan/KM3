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
    constructor(name, age, status)
    super(name, age, status)
}