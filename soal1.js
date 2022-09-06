var emptyShip = new Ship(12, 14);

function Ship(draft, crew) {
    this.draft = draft + crew * 1.5;
    this.crew = crew;

    if (this.draft > 20) {
        console.log("Banyak nih muatan kapalnya");
    } else {
        console.log("Lebih banyak muatan orangnya..");
    }
}

module.exports = emptyShip;