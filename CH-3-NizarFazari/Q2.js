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

let shark = new Shark("Ini Hiu", 22, "jomblo");
console.log(shark);
console.log(shark.introduced());

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
  }
}
let cat = new Cat(" Ini kucing", 22, "nikah");
console.log(cat);
console.log(cat.introduced());

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

let dog = new Dog(" Ini anjing", 10, "sekolah", "Nizar");
console.log(dog);
console.log(dog.Greetmaster());
