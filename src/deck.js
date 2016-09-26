const Card = require('./card')
const _ = require('lodash')

const heart = '♥️'
const spade = '♠️'
const diamond = '♦️'
const club = '♣️'

const ace = ['A',11]
const king = ['K',10]
const queen = ['Q',10]
const jack = ['J',10]

const suits = [heart,spade,diamond,club]
const ranks = [ace,2,3,4,5,6,7,8,9,10,jack,queen,king]

const createDeck = () => {
  let deck = []
  suits.forEach(suit => {
    ranks.forEach(rank => {
        deck.push(new Card(suit, rank))
    })
  })
  deck = _.shuffle(deck)
  return deck
}


module.exports = createDeck
