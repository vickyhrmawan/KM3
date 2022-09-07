// membuat instance
var emptyShip = new Ship(4, 10); // draft total 20
var emptyShip1 = new Ship(6, 10); // draft total 21
// console.log(emptyShip.getShipCrew());
console.log(emptyShip.getTotalDraft());
console.log(emptyShip1.getTotalDraft());

// membuat function untuk menentukan jumlah muatan di kapal
function Ship(draft, crew) {
  // properti
  this.draft = draft;
  this.crew = crew;

  // method
  this.getShipCrew = () => {
    return this.crew;
  };
  this.getShipDraft = () => {
    return this.draft;
  };
  this.getTotalDraft = () => {
    if (this.draft + this.crew * 1.5 > 20) {
      return `Banyak nih muatan kapalnya (${this.draft + this.crew * 1.5})`;
    } else {
      return `Lebih banyak muatan orangnya.. (${this.draft + this.crew * 1.5})`;
    }
  };
}
