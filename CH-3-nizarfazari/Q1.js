let draft = 9;
let crew = 9;
var emptyShip = new Ship(draft, crew);

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
  this.totDraft = draft + crew * 1.5;

  if (this.totDraft > 20) {
    console.log(" Banyak nih muatannya");
  } else {
    console.log(" lebih banyak muatan orangnya");
  }
}

module.exports = emptyShip.totDraft;
