// parent class
class Animal {
  // constructor
  constructor(name, age, legs, species, status) {
    // property
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  // method
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// child class
class Shark extends Animal {
  // constructor
  constructor(name, age, status) {
    // call constructor parent
    super(name, age, status);
    this.legs = 0;
    this.species = 'shark';
  }
}

// child class
class Cat extends Animal {
  // constructor
  constructor(name, age, status) {
    // call constructor parent
    super(name, age, status);
    this.legs = 4;
    this.species = 'cat';
  }
}

// child class
class Dog extends Animal {
  // constructor
  constructor(name, age, status, master) {
    // call constructor parent
    super(name, age, status);
    this.legs = 4;
    this.species = 'dog';
    this.master = master;
  }

  // method
  GreetMaster() {
    return `Hello ${this.master}!`;
  }
}

// membuat instance
const doggy = new Dog('Doggy', 3, 'mammal', 'Azar');
console.log(doggy.introduce());
console.log(doggy.GreetMaster());
console.log(doggy.legs);
