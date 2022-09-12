class Animal {
  constructor(names, age, status, legs, species) {
    this.name = names;
    this.age = age;
    this.status = status;
    this.legs = legs;
    this.species = species;
  }

  introduced() {
    return `Hello my name is ${this.name} and I am ${this.age} years old`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.species = "shark";
    this.legs = 0;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.legs = 4;
    this.species = "dog";
    this.master = master;
  }
  Greetmaster() {
    return `Hello ${this.master}`;
  }
}

module.exports = {
  Shark,
  Cat,
  Dog,
};
