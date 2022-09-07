function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

//class ship
Ship.prototype.isWorthit = function () {
    worth = this.draft + (this.crew + 1, 5);
    if (worth > 20) {
        return 'Banyak nih muatan kapalnya'
    } else {
        return 'Lebih banyak muatan orangnya..'
    }
}

var emptyShip = new Ship(21, 10);

console.log(emptyShip.isWorthit());