class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce() {
        return `Hello my name is ${this.name} and I am ${this.age} years old.`
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`
    }
}

let dog1 = new Dog("Toni", 3, "Healthy", "Sae");
console.log(dog1.introduce())
console.log(dog1.greetMaster())