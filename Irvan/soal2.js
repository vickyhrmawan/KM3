class Animal {
    constructor(name, age, status, species, legs) {
        this.name = name;
        this.age = age;
        this.status = status;
        this.species = species;
        this.legs = legs;
        
    }
    profile() {
        return `nama: ${this.name}, umur: ${this.age}, spesies: ${this.species}, kaki: ${this.legs}, status: ${this.status}`
    }
    introduce() {
        return `Hello, my name is ${this.name} I am ${this.age} years old`
    }
}

class Shark extends Animal {
    constructor(name,age,status) {
        super(name,age,status);
        this.legs = 0
        this.species = "shark"
    }
    showProfile() {
        return super.profile()
    }
    showIntroduce() {
        return super.introduce()+' and now I am '+this.status
    }
}

class Cat extends Animal {
    constructor(name,age,status) {
        super(name,age,status);
        this.legs = 4
        this.species = "cat"
    }
    showProfile() {
        return super.profile()
    }
    showIntroduce() {
        return super.introduce()+' and now I am '+this.status
    }
}

class Dog extends Animal {
    constructor(name,age,status,master) {
        super(name,age,status);
        this.master = master
        this.legs = 4
        this.species = 'dog'
    }
    showProfile() {
        return super.profile()
    }
    showIntroduce() {
        return super.introduce()+' and now I am '+this.status
    }
    GreetMaster() {
        return `My master name is ${this.master}`
    }
}

const shark = new Shark('Hiu',10,'swimming');
console.log(shark.showProfile())
console.log(shark.showIntroduce())

console.log('\n')
const cat = new Cat('Kucing',10,'walking');
console.log(cat.showProfile())
console.log(cat.showIntroduce())


console.log('\n')
const dog = new Dog('Anjing',10,'running','Ben');
console.log(dog.showProfile())
console.log(dog.showIntroduce())
console.log(dog.GreetMaster())