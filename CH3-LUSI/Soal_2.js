class Animals {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animals {
    constructor(name, age, status) {
        super(name, age, 0, "Shark", status);
    }
    introduce(){
        return (`${super.introduce()}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}`);
    }
}

class Cat extends Animals {
    constructor(name, age, status) {
        super(name, age, 4, "Cat", status);
    }
    introduce(){
        return (`${super.introduce()}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}`);
    }
}

class Dog extends Animals {
    constructor(name, age, status, master) {
        super(name, age, 4, "Dog", status);
        this.master = master;
    }
    GreatMaster(){
        return (`Hello ${this.master}`);
    }
    introduce(){
        return (`${super.introduce()}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}, ${this.GreatMaster()}`);
    }
} 

let hiu = new Shark("Sharki", 10, "Berenang");
console.log(hiu.introduce());

let cat = new Cat("Kitty", 4, "Berjalan");
console.log(cat.introduce());

let dog = new Dog("Dogi", 5, "Berlari", "Pulan");
console.log(dog.introduce());
