// Soal No 1
var emptyShip = new Ship (20, 10);

function Ship (draft, crew){
    this.draft = draft;
    this.crew = crew;

    draft = crew * 1.5 + draft;
    
    draft > 20 ? console.log (`Banyak nih muatan kapalnya (Muatan = ${draft})`) : console.log (`Lebih banyak muatan orangnya (Muatan = ${draft})`);
}

