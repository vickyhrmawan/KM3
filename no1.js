function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    let calculateDraft = () => {
        let totalDraft = this.draft + (this.crew * 1.5);
        if (totalDraft > 20) {
            return "Banyak nih muatannya"
        } else {
            return "Lebih banyak muatan orangnya"
        }
    }

    return calculateDraft;
}

let emptyShip = new Ship(5, 5);
console.log(emptyShip());