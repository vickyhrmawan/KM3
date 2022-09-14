var emptyShip = new Ship(16, 1.5);

function Ship(draft, crew) {
    this.draft = draft + 1.5;
    this.crew = crew;
    this.result = function () {
        if (typeof this.draft == 'number' && typeof this.crew == 'number') {
            return this.draft <= 20 ? 'Lebih banyak muatan orangnya...' : 'Banyak nih muatan kapalnya';
        } else {
            return 'Error: data type must number';
        }
    }

}

module.exports = Ship;