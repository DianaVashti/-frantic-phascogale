const heart = '♥️'
const spade = '♠️'
const diamond = '♦️'
const club = '♣️'

const ace = ['A',11]
const king = ['K',10]
const queen = ['Q',10]
const jack = ['J',10]
const values = {
  [ace]: ace[1],
}

const suits = [heart,spade,diamond,club]
const ranks = [ace,2,3,4,5,6,7,8,9,10,jack,queen,king]

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
