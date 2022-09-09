class Animal {
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

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.legs = 0;
    this.species = "shark";
    this.status = status;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.legs = 4;
    this.species = "cat";
    this.status = status;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age);
    this.legs = 4;
    this.master = master;
    this.species = "Dog";
    this.status = status;
  }
  GreetMaster() {
    return `Hello ${this.master}`;
  }
}

const shark = new Shark("Shark", 29, "Berenang");
console.log(shark.introduce());
console.log(shark);
//
const cat = new Cat("Cat", 1, "Makan dan Tidur");
console.log(cat.introduce());
console.log(cat);
//
const dog = new Dog("Dog", 1.5, "Makan dan Tidur", "St.Diva Cantik");
console.log(dog.introduce());
console.log(dog.GreetMaster());
console.log(dog);
