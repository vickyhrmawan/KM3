//NO 1
console.log("----------------------NO 1--------------------");
let draf = 20;
let crew = 20;

var emptyShip = new Ship(draf, crew);

function Ship(draf, crew) {
  this.draf = draf + 1.5;
  this.crew = crew;
  this.result = function () {
    if (typeof this.draf == "number") {
      return this.draf <= 20
        ? "lebih banyak muatan orangnya..."
        : "Banyak nih muatan kapalnya";
    } else {
      return "Erorr : Data type must number";
    }
  };
}

console.log(emptyShip.result());

// class Ship {
//   constructor(draf, crew) {
//     this.draf = draf + 1.5;
//     this.crew = crew;
//   }
//   myShip(){
//     // return this.draf + this.crew

//     if (typeof this.draf == "number") {
//       this.draf <= 20 ? console.log("Lebih banyak muatan orangnya..."): console.log("Banyak nih muatan kapalnya...")
//     } else {
//       return "Erorr : Data type must number"
//     }
//   }
// }
// let emptyShip = new Ship(draf, crew);
// console.log(emptyShip.myShip())

//NO 2
// console.log("----------------------NO 2--------------------")
// class Animal {
//     constructor(name, age, status, legs, species ){
//         this.name = name
//         this.age = age
//         this.legs = legs
//         this.species = species
//         this.status = status
//     }
//     introduce() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     }
// }

// class Shark extends Animal{
//     constructor(name, age, status){
//         super(name, age, status)
//         this.legs = 0
//         this.species = "Shark"
//     }
//     show(){
//         return this.introduce() + ' I can ' + this.status
//     }
// }

// class Cat extends Animal{
//     constructor(name, age, status){
//         super(name, age, status)
//         this.legs = 4
//         this.species = "Cat"
//     }
//     show(){
//         return this.introduce() + ' I can ' + this.status
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, status, master){
//         super(name, age, status)
//         this.legs = 4
//         this.master = master
//         this.species = "Dog"

//     }
//     greetMaster(){
//         return ` My lord ${this.master}`
//     }
//     show(){
//         return this.introduce() + this.greetMaster() + ' and i can ' + this.status
//     }
// }

// let myShark = new Shark("Hiu", 10, "Swim")
// let myCat = new Cat("Chiko", 2, "run")
// let myDog = new Dog("Bulbul", 4, "roar", "Flatzou")

// console.log(myShark.show())
// console.log(myCat.show())
// console.log(myDog.show())

// console.log(myShark)
// console.log(myCat)
// console.log(myDog)
