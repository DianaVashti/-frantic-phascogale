import _ from 'lodash'

import Hand from './hand'
import Player from './player'
import Dealer from './dealer'
import createDeck from './deck'

const MINIMUM_BET = 10

class Game {
  constructor() {
    this.player = new Player( 'PLAYER' )
    this.dealer = new Dealer()
    this.deck = createDeck()

    this.cashPot = 0
    this.clothesPot = []
  }

  collectAnte() {
    if( this.player.hasCash() ) {
      this.cashPot += this.player.bet( MINIMUM_BET )
    } else if( this.player.hasClothes() ){
      this.clothesPot.push( this.player.betClothes() )
    }
  }

  start() {
    let playAgain = true

    while( playAgain ) {
      this.collectAnte()

      // Deal 2 cards to dealer and player
      for( let counter = 0; counter < 2; counter++ ) {
        this.player.giveCard( this.deck.pop() )
        this.dealer.giveCard( this.deck.pop() )
      }
      // Dealer shows one card and keeps other hidden
      console.log( this.dealer.toString() )
      console.log( this.player.toString() )

      // Player may hit until bust or stay
      // Dealer must hit until bust or over 17
      // Compare hand values, winner takes pot

      playAgain = false
    }
  }
}

module.exports = Game
