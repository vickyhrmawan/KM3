class Animal {
  constructor(name, age, legs, species, status) {
    this.name = "Jajang";
    this.age = 12;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor() {
    super(...arguments);
    this.name = "Hiu";
    this.age = 10;
    this.legs = 0;
    this.species = "shark";
    this.status = "Berenang";
  }
  introduce() {
    return `Hello saya ${this.name} umur ${this.age},kaki ${this.legs},status ${this.status},spesies ${this.species}`;
  }
}

class Cat extends Animal {
  constructor() {
    super(...arguments);
    this.name = "kucing";
    this.age = 2;
    this.legs = 4;
    this.species = "cat";
    this.status = "Berlari";
  }

  introduce() {
    return (
      `Halo saya ${this.name},Umur ku ${this.age} tahun,aku ${this.status} dengan ${this.legs} kaki` +
      " .Meow meow!"
    );
  }
}

class Dog extends Animal {
  constructor() {
    super(...arguments);
    this.legs = 4;
    this.species = "dog";
    this.name = "Anjing";
    this.status = "berjalan";
    this.master = "Jajang";
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

var shark1 = new Shark();
console.log(shark1.introduce());

var dog1 = new Dog();
console.log(dog1.introduce());

var cat1 = new Cat();
console.log(cat1.introduce());

var animal1 = new Animal();
console.log(animal1.introduce("jajang", 12));
