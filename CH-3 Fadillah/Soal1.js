function Ship (draft, crew){
    //Declaration
    this.draft = draft;
    this.crew = crew;
    let totalDraft = 0;

    //Total Draft Formula
    totalDraft = this.draft + (this.crew * 1.5)

    //Conditional Statements (Output)
    if (typeof totalDraft != 'number') {    
        console.log ('Error : Invalid Data Type')
    } else {
        if (totalDraft >= 20 ) {
            console.log(`Banyak nih muatan kapalnya! (Total Draft = ${totalDraft})`)
        } else if(this.crew > this.draft){
            console.log (`Lebih banyak muatan orangnya! (Crew = ${this.crew}, Draft = ${this.draft}, Total Draft = ${totalDraft})`) 
        } else {
            console.log (`Lebih banyak muatan barangnya! (Crew = ${this.crew}, Draft = ${this.draft}, Total Draft = ${totalDraft})`) 
        }
    }
}

//Output & Insert Parameter
var emptyShip = new Ship(10, 11);
var emptyShip = new Ship(12, 14);
var emptyShip = new Ship(4, 10);
var emptyShip = new Ship(6, 4);