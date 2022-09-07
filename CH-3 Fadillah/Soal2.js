//Parent Class
class Animal{
    constructor(name, age, legs, species, status){
        this.name = name
        this.age = age
        this.status = status
        this.legs = legs
        this.species = species
    }
    introduce(){
        return `Hello, my name is ${this.name}, I am ${this.age} years old, `
    }
}

//Class Inheritance
class Shark extends Animal{ 
    constructor (name, age, status){
        super (name, age, '0', 'Shark', status)
    }
    show(){
        return this.introduce() + `I have ${this.legs} legs, I am a ${this.species}, I like ${this.status}`
    }
}

//Class Inheritance
class Cat extends Animal{
    constructor (name, age, status){
        super (name, age, '4', 'Cat', status)
    }
    show(){
        return this.introduce() + `I have ${this.legs} legs, I am a ${this.species}, I like ${this.status}`
    }
}

//Class Inheritance
class Dog extends Animal{
    constructor (name, age, status, master){
        super (name, age, '4', 'Dog', status)
        this.master = master
    }
    GreetMaster(){
        return `${this.master} is my owner`
    }
    show(){
        return this.introduce() + `I have ${this.legs} legs, I am a ${this.species}, I like ${this.status}, and ` + this.GreetMaster()
    }
}

//Shark
const showShark = new Shark('Shaky', 10, 'Swimming');
console.log(showShark.show());

//Cat
const showCat = new Cat('Milo', 12, 'Running');
console.log(showCat.show());

//Dog
const showDog = new Dog('Bubu', 12, 'Running', 'Albert');
console.log(showDog.show());