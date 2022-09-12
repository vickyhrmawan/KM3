var emptyShip = new Ship(30, 5);

function Ship(draft, crew) {
    this.draft = draft + 1.5;
    this.crew = crew;

    if (this.draft > 20){
        console.log("Banyak nih muatan kapalnya")
    }else{
        console.log("Lebih banyak muatan orangnya..")
    }
}

console.log(emptyShip)
