class Animal{
    constructor(name, age, status, legs, species){
        this.name = name
        this.age = age
        this.status = status
        this.legs = legs
        this.species = species
    }
    introduce(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old, `
    }
}

class Shark extends Animal{
    constructor (name, age, status){
        super (name, age, status)
        this.legs = 0
        this.species = 'shark'
    }
    show(){
        return this.introduce() + `kaki ${this.legs}, spesies ${this.species}, status ${this.status}`
    }
}

class Cat extends Animal{
    constructor (name, age, status){
        super (name, age, status)
        this.legs = 4
        this.species = 'cat'
    }
    show(){
        return this.introduce() + `kaki ${this.legs}, spesies ${this.species}, status ${this.status}`
    }
}

class Dog extends Animal{
    constructor (name, age, status, master){
        super (name, age, status)
        this.legs = 4
        this.species = 'dog'
        this.master = master
    }
    GreetMaster(){
        return `${this.master} is my owner`
    }
    show(){
        return this.introduce() + this.GreetMaster() + `, kaki ${this.legs}, spesies ${this.species}, status ${this.status}`
    }
}

//Shark
const shark = new Shark('Hiu', 10, 'Swim');
console.log(shark.show());

//Cat
const cat = new Cat('Kucing', 12, 'Run');
console.log(cat.show());

//Dog
const dog = new Dog('Anjing', 12, 'Sleep', 'Ardi');
console.log(dog.show());