class Animal {
    constructor(name, age, status, legs, species) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and i am ${this.age} years old`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, status)
        this.legs = 0;
        this.species = 'shark';
    }
    intro() {
        return `Nama ${this.name}, umur ${this.age}, kaki ${this.legs}, Spesies ${this.species}, Status ${this.status}`
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status)
        this.legs = 4;
        this.species = 'cat'
    }
    intro() {
        return `Nama ${this.name}, umur ${this.age}, kaki ${this.legs}, Spesies ${this.species}, Status ${this.status}`
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, status)
        this.legs = 4
        this.species = 'Dog'
        this.master = master
    }

    intro() {
        return `Nama ${this.name}, umur ${this.age}, kaki ${this.legs}, Spesies ${this.species}, Status ${this.status}`
    }

    GreetMaster() {
        return `Hello ${this.master}`
    }
}

// Shark
let shark1 = new Shark('Hiu', 12, 'Berenang')
console.log(shark1.intro())

// Cat
let Cat1 = new Cat('Mei', 8, 'berlari')
console.log(Cat1.intro())

// DOG
let Dog1 = new Dog('Bruno', 8, 'berlari', 'Wiridho')
console.log(Dog1.intro())
console.log(Dog1.GreetMaster())