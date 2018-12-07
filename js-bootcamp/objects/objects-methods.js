let restaurant = {
    name: "Eat at Joes",
    guestCapacity: 75,
    guestCount:0,
    checkAvailability: function(partySize) {
        let available = this.guestCapacity - this.guestCount
        return partySize <= available
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))