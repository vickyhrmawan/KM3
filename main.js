let draft= 10
let crew = 8
var emptyShip = new Ship(draft, crew)

function Ship(draft, crew) {
    let draftTot = 0;
    this.draft = draft;
    this.crew = crew;

    draftTot = draft + (crew*1.5)
    
    return (draftTot < 20) ? 
    console.log("Muatan overload") : console.log("Terlalu banyak crew nyaa")
}