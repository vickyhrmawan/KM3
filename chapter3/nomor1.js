function Ship(draft, crew) {
	this.draft = draft;
	this.crew = crew;
	this.totalDraft = this.draft + (this.crew * 1.5);

	this.calTotal = function () {
		return (this.totalDraft >= 20) ? 'Banyak nih muatan kapalnya' : 'Lebih banyak muatan orangnya'
	}

}
let emptyShip = new Ship(20, 1.5);
console.log((emptyShip.calTotal()));
