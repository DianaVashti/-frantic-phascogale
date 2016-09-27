class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }

  toString () {
    if( isNaN( this.rank )) {
      this.rank = this.rank[0]
    }

    return `${this.rank} of ${this.suit}`
	}
}

module.exports = Card
