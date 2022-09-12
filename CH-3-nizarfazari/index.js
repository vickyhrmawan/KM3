const Q1 = require("./Q1");

const { Shark, Cat, Dog } = require("./Q2");

console.log(Q1);

let shark = new Shark("Ini Hiu", 22, "jomblo");
console.log(shark);
console.log(shark.introduced());

let cat = new Cat(" Ini kucing", 22, "nikah");
console.log(cat);
console.log(cat.introduced());

let dog = new Dog(" Ini anjing", 10, "sekolah", "Nizar");
console.log(dog);
console.log(dog.Greetmaster());
