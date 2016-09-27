// const createDeck = require('./deck')
//
// let deck = createDeck()
//
// const dealInit = () => {
//   let cards = []
//   let counter = 0
//   for (let i = 0; i < 4; i++) {
//
//     deck.shift()
//     counter++
//   }

import _ from 'lodash'
import Betting from './betting'
import currency from './currency'

module.exports = class Game {
  constructor() {
    this.minBet = 10
    this.ClothesValueBet = 10
    this.minClothesBet = '👕'
    this.midClothesBet = '👞'
    this.maxClothesBet = '👖'
    this.players = []
    this.setup()
    this.start()
  }

  report( theme, message ){
    console.log(colors.green( theme+ '')+'> '+message)
  }

  prompt(ask){
    return prompt.forString(ask)
  }

  promptForNumber(ask){
    return prompt.forNumber(ask)
  }

  setup() {
    const name = this.prompt( `Give victim#${i + 1} a name:`)

    this.dealer = new AiDealer ({
      name: 'shady dealer',
      game: this,
    })
    this.players.push(this.dealer)
    this.dealers.deck = new Deck(this.players.length)
    this.hands = []
  }

start() {
  let playAgain
  while( true ) {
    clear( )

    this.round = new Round( {
      game: this,
      index: this.roundIndex++,
    })

let playAgain = true

function clear(){
  process.stdout.write('\033c')
}
