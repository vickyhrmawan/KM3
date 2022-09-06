// SOAL NO 1
const os = require('os');
const Ship = require('./soal1.js');
let emptyShip = new Ship(4, 7);


//SOAL NO 2
class Animal{
    constructor(name, age, legs, species, status){
        this.name = name;
        this.age = age; 
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce(){
        return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}`;
    }
}

class Shark extends Animal{
    constructor(name, age, status, legs, species){
        super(name, 
              age, 
              legs = 0, 
              species =  "shark", 
              status
              );
    }

    show(){
        return this.introduce();
    }
}

class Cat extends Animal{
    constructor(name, age, status, legs, species){
        super(name, 
              age, 
              legs = 4, 
              species =  "cat", 
              status
              );
    }

    show(){
        return this.introduce();
    }
}

class Dog extends Animal{
    constructor(name, age, status, master, legs, species){
        super(name, 
              age, 
              legs = 4, 
              species =  "dog", 
              status
              );
        this.master = master;
    }

    show(){
        return `${this.introduce()}, master ${this.master} \n${this.GreetMaster()}`;
    }

    GreetMaster(){
        return `Hello ${this.master}`;
    }
}

let hewan1 = new Shark("hiu", 10, "berenang");
console.log(hewan1.show());
let hewan2 = new Cat("kucing", 12, "Manjat tebing");
console.log(hewan2.show());
let hewan3 = new Dog("Anjing", 24, "Jogging", "joni");
console.log(hewan3.show());