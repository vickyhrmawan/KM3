class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    instroduce() {  
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;  
    }

    info(){
        this.instroduce();
        console.log(`Nama: ${this.name}, Umur: ${this.age}, Kaki: ${this.legs}, Spesies: ${this.species}, Status: ${this.status}`)
    }
}

class Shark extends Animal {
    constructor (name, age, status){
      super(name, age, status);

      this.legs = 0;
      this.species= "Shark";
      this.status= "Berenang"
    //   console.log(status);
     }
}

class Cat extends Animal {
    constructor (name, age, status){
        super(name, age, status);

        this.legs = 4;
        this.species = "Cat";
        this.status = "Berjalan"
        //console.log(status)
       }
}

class Dog extends Animal {
    constructor (name, age, status, master){
            super(name, age, status);

            this.master = master;
            this.legs = 4;
            this.species = "Dog";
            this.status = "Berjalan"
            //console.log(status)
    }
    GreetMaster(){
            return console.log(`Hello ${this.master}`)
        }
}

/* --- SHARK --- */
const shark = new Shark ("Hiu", 10, "Berenang")
// this.species = "Shark";
// this.legs = 0;
shark.info()

/* --- CAT --- */
const cat = new Cat ("Boni", 3, "Berjalan")
cat.info()

// /* --- SHARK --- */
const dog = new Dog ("Dogi", 5, "Berjalan", "Mr. Bean");
dog.info();
dog.GreetMaster();