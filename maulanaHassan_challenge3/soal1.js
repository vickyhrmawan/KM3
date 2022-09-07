function Ship(draft, crew){
    this.draft = draft;
    this.crew = crew;
    this.draft = this.draft + (this.crew * 1.5);
    

    if(this.draft > 20){
        console.log(`${this.draft} Banyak nih muatan kapalnya`);
    }else if(this.draft < 20 && this.draft > 0 && this.crew !=0){
        console.log(`${this.draft} Lebih banyak muatan orangnya`);
    }else{
        console.log(`${this.draft} Kosong nih muatan orang di kapalnya`);
    }
}

module.exports = Ship