let emptyShip = new Ship(5, 5);

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    let calculateDraft = () => {
        let totalDraft = this.draft + (this.crew * 1.5);
        if (totalDraft > 20) {
            console.log("Banyak nih muatannya")
        } else {
            console.log("Lebih banyak muatan orangnya")
        }
    }

    calculateDraft()
}