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
// import Betting from './betting'
// import currency from './currency'

const MINIMUM_BET = 10

// this.minBet = 10
// this.ClothesValueBet = 10
// this.minClothesBet = '👕'
// this.midClothesBet = '👞'
// this.maxClothesBet = '👖'


  // setup() {
  //   const name = this.prompt( `Give victim#${i + 1} a name:`)
  //
  //   this.dealer = new AiDealer ({
  //     name: 'shady dealer',
  //     game: this
  //   })
  //   this.players.push(this.dealer)
  //   this.dealers.deck = new Deck(this.players.length)
  //   this.hands = []
  // }

class Hand {
  constructor() {
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
    return this.cards.map( card => `${card.toString()}` ).join( ' ' )
  }
}

class Player {
  constructor( name ) {
    this.name = name
    this.hand = new Hand()
    this.cash = 100
    this.clothes = []
  }

  giveCard( card ) {
    this.hand.addCard( card )
  }

  bet( amount ) {
    this.cash -= amount
  }

  toString() {
    return `$${this.cash} ${this.hand.toString()}`
  }
}

class Game {
  constructor() {
    this.player = new Player()
    this.dealer = new Player()
    this.deck = new Deck()

    this.cashPot = 0
    this.clothesPot = []

    this.start()
  }

  prompt( ask ){
    return prompt.forString( ask )
  }

  promptForNumber( ask ){
    return prompt.forNumber( ask )
  }

  clear() {
    process.stdout.write( '033c' )
  }

  collectAnte() {
    this.cashPot += this.player.bet( MINIMUM_BET )
  }

  start() {
    let playAgain = true

    while( playAgain ) {
      clear()
      collectAnte()

      // Deal 2 cards to dealer and player
      for( let counter = 0; counter < 2; counter++ ) {
        this.player.giveCard( this.deck.draw() )
        this.dealer.giveCard( this.deck.draw() )
      }
      // Dealer shows one card and keeps other hidden
      console.log( `DEALER: ${this.dealer.toString()}` )
      console.log( `PLAYER: ${this.player.toString()}` )

      // Player may hit until bust or stay
      // Dealer must hit until bust or over 17
      // Compare hand values, winner takes pot
    }
  }
}

const game = new Game()
game.start()

module.exports = Game
