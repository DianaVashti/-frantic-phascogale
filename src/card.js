class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }
  print () {
    if (isNaN(this.rank)) {
      this.rank = this.rank[0]
    }
  return this.rank + ' of ' + this.suit
	}
}

module.exports = Card
