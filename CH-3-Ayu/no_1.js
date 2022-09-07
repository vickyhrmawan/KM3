var emptyShip = new Ship(100, 15)

function Ship(draft, crew){
    this.draft = draft + 1.5;
    this.crew = crew;
    
    if(typeof this.draft == 'number'){
        if(this.draft >=20){
            console.log("Banyak nih Muatan Kapalnya")
        }else{
            console.log("Lebih Banyak Muatan Orangnya")
        }
    }else{
        return "Error: Invalid Data Type"
    }
}