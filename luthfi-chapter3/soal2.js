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
  constructor(name, age, status, legs, species) {
    super(...arguments);
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello saya ${this.name} umur ${this.age},kaki ${this.legs},status ${this.status},spesies ${this.species}`;
  }
}

class Cat extends Animal {
  constructor(name, age, status, legs, species) {
    super(...arguments);
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return (
      `Hello saya ${this.name} umur ${this.age},aku ${this.status} dengan ${this.legs}kaki ,spesiesku ${this.species}` +
      " .Meow meow!"
    );
  }
}

class Dog extends Animal {
  constructor(name, age, status, legs, species, master) {
    super(...arguments);
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
    this.master = master;
    this.greetMaster();
  }
  greetMaster() {
    return `${this.master} Adalah Master ku`;
  }
  introduce() {
    return (
      `Halo saya ${this.name},aku ${this.status} dengan ${this.legs} kaki, aku berspesies ${this.species}, ` +
      this.greetMaster()
    );
  }
}

var shark1 = new Shark("hiu", 10, "berenang", 0, "shark");
console.log(shark1.introduce());

var dog1 = new Dog("anjing", 2, "berlari", 4, "Dog", "Jajang");
console.log(dog1.introduce());

var cat1 = new Cat("Hiu", 2, "berlari", 4, "kucing");
console.log(cat1.introduce());

var animal1 = new Animal("jajang", 12);
console.log(animal1.introduce());
