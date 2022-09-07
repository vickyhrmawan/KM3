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

//Shark
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "Shark", status);
  }
  show() {
    return this.introduce() + `kaki ${this.legs}, spesies ${this.species}, status ${this.status}`;
  }
}
let myShark = new Shark("Hiu", 10, "Berenang");
console.log(myShark.show());

//Cat
class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  show() {
    return this.introduce() + ` kaki ${this.legs}, spesies ${this.species}, status ${this.status}`;
  }
}
let myCat = new Cat("Cimol", 1, "tidur");
console.log(myCat.show());

//Dog
class Dog extends Animal {
  constructor(name, age, status, master) {
  super(name, age, 4, "dog", master, status,)
  this.master = master;
  }
  GreatMaster(){
    return (`Hello ${this.master}`);
}
  show() {
    return this.introduce() + `kaki ${this.legs}, spesies ${this.species}, status ${this.status}, hello ${this.master}`;
  }
}
let myDog = new Dog("Tambur", 3, "lari", "Komang");
console.log(myDog.show());
