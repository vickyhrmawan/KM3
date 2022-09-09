var emptyShip = new Ship(12, 10);

function Ship(draft, crew) {
  this.draft = draft + 1.5;
  this.crew = crew;
  // CHECK TIPE DATA
  if (typeof this.draft !== "number")
    return console.log("Error: Invalid data type");
  // JIKA TIPE DATA ADALAH NUMBER
  // JIKA DRAFT >= 20
  if (this.draft >= 20) return console.log("banyak nih muatan kapalnya");
  // JIKA DRAFT < 20
  return console.log("Lebih banyak muatan orangnya");
}
