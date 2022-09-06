var emptyShip = new Ship(10, 15);
var emptyShip = new Ship(10, 5);
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;

  draft = draft + crew * 1.5;

  draft > 20
    ? console.log("Banyak Nih muatan kapalnya")
    : console.log("Lebih Banyak Muatan Orangnya");
}
