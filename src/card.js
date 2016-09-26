const heart = '♥️'
const spade = '♠️'
const diamond = '♦️'
const club = '♣️'
const ace = ['A',11]
const king = ['K',10]
const queen = ['Q',10]
const jack = ['J',10]

const suits = [heart,spade,diamond,club]
const ranks = [ace[0],2,3,4,5,6,7,8,9,10,jack[0],queen[0],king[0]]

class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }
  print () {
  return alert(this.rank)
	}
}

print () {
  return
}
