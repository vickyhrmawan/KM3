class Animal {
    constructor(name, age, status, legs, species) {
        this.name = name;
        this.age = age;
        this.status = status;
        this.legs = legs;
        this.species = species;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old `
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.legs = 0;
        this.species = 'shark';
    }

    show() {
        return this.introduce() + `, i have ${this.legs} legs, spesies ${this.species}, status ${this.status}`
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status)
        this.legs = 4;
        this.species = 'cat';
    }

    show() {
        return this.introduce() + `, i have ${this.legs} legs, spesies ${this.species}, status ${this.status}`
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, status);
        this.master = master;
        this.legs = 4;
        this.species = 'Dog';
    }

    show() {
        return this.introduce() + `, i have ${this.legs} legs, spesies ${this.species}, status ${this.status}`
    }

    GreetMaster() {
        return `Hello ${this.master}`
    }
}

module.exports = {
    Animal,
    Shark,
    Cat,
    Dog
};