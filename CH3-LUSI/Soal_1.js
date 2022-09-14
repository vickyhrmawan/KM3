function Ship(draft,crew) {
    this.draft = draft + 1.5;
    this.crew = crew;

    if (this.draft > 20) {
        console.log('Banyak nih muatan kapalnya')
    } else {
        console.log('Banyak nih muatan orangnyanya')
    }
}
  
var emptyShip = new Ship(100, 20);
console.log(emptyShip);
var cakalang = new Ship(15, 30);
console.log(cakalang);