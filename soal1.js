
var emptyShip = new Ship(0, 0);



function Ship(draft, crew) {
    this.draft = draft + crew * 1.5;
    this.crew = crew;

    if (this.draft > 20) {
        console.log("Banyak nih muatan kapalnya");
    } else if (this.draft > 1) {
        console.log("Lebih banyak muatan orangnya..");
    } else {
        console.log("Kosong Nih..");
    }
}

