const Ship = require('./Ship.js');
const {
    Animal,
    Shark,
    Cat,
    Dog
} = require('./Animal.js');

//No 1
let emptyShip = new Ship(16, 1.5);
console.log('============== No 1 ===============');
console.log(emptyShip.result());
console.log('===================================\n');
//No 2
let shark1 = new Shark('hiu putih', 10, 'Berenang');
let cat1 = new Cat('cici', 10, 'berlari');
let dog1 = new Dog('Hely', 10, 'Mengongong', 'Evan');

console.log('============== No 2 ===============');
console.log(shark1.show());
console.log(cat1.show());
console.log(dog1.show())
console.log(dog1.GreetMaster());
console.log('===================================\n');