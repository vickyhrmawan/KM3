let totalDraft = 0;

function Ship (draft, crew){
    totalDraft = draft + (crew * 1.5)

    if (typeof totalDraft != 'number') {    
        console.log ('Error : Invalid Data Type')
    } else {
        if (totalDraft >= 20 ) {
            console.log(`Banyak nih muatan kapalnya! Total Draft = ${totalDraft}`)
        } else {
            console.log (`Lebih banyak muatan orangnya! Crew = ${crew}, Draft = ${draft}, Total Draft = ${totalDraft}`) 
        }   
    }
}

var emptyShip = new Ship(10, 11);