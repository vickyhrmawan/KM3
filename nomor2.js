class Animal { 
  constructor(name, age, legs, species, status){ 
    //this.name adalah keyword & name adalah value
      this.name = name; 
      this.age = age; 
      this.legs = legs; 
      this.species = species; 
      this. status = status; 
  } 
  //ini adalah function dari show untuk menampilkan nilai pada console
  show() { 
      console.log (`nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}\n`); 
  } 
} 

//class Shark
class Shark extends Animal { 
  constructor() { 
      super(); 
      this.name = 'Baby Shark' 
      this.age = 3
      this.legs = 0 
      this.species = 'Shark' 
      this.status = 'Berenang' 
  } 
} 

//membuat object dari class shark
const shark = new Shark() 
shark.show() 

//class Cat
class Cat extends Animal { 
  constructor() { 
      super(); 
      this.name = 'Loreng' 
      this.age = 10
      this.legs = 4 
      this.species = 'Anggora'
      this.status = 'Mamalia' 
  } 
} 

//membuat object dari class cat
const cat = new Cat() 
cat.show() 

//class dog
class Dog extends Animal { 
  constructor() { 
      super(); 
      this.name = 'Molly' 
      this.age = 3
      this.legs = 4 
      this.species = 'Bulldog' 
      this.status = 'Mamalia'
  } 
} 

//membuat object baru dari class dog
const dog = new Dog() 
dog.show()