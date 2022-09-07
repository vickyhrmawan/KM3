function Ship(draft, crew) {
    this.draft = draft + 1.5 * crew
    this.crew = crew

    if(this.draft > 20) {
        console.log('Banyak nih muatan kapalnya')
    } else {
        console.log(`lebih banyak muatan orangnya berjumlah ${this.crew} crew`)
    }
}



let myShip = new Ship(12, 14)

module.exports = myShip