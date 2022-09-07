var emptyShip = new Ship(15, 5);
var emptyShip = new Ship(10, 5);
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;

  draft = crew * 1.5 + draft;

  draft > 20
    ? console.log("Banyak Nih muatan kapalnya")
    : console.log("Lebih Banyak Muatan Orangnya");
  console.log(draft);
}
