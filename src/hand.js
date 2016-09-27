class Hand {
  constructor( isDealer=false ) {
    this.isDealerHand = isDealer
    this.cards = []
  }

  addCard( card ) {
    this.cards.push( card )
  }

  value() {
    // TODO: Handle aces
    return this.cards.reduce( (memo, card) => memo + card.value, 0 )
  }

  toString() {
    const displayCards = this.isDealerHand ? this.cards.slice( 0, 1 ) : this.cards

    return displayCards.map( card => `${card.toString()}` ).join( ' ' )
  }
}

export default Hand
