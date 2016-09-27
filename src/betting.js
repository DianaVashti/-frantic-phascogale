import currency from './currency'
import game from './game'

const CASH = [
  { type: '💵', value: 10}
]

const CLOTHES = [
  { type: '👕', value: 'shirt'}
  { type: '👞', value: 'shirt'}
  { type: '👖', value: 'shirt'}
]

class Account {
  constructor( cash, clothes ) {
    this.cash = cash
    this.clothes = clothes
  }

  toString() {
    return `${this.cash.symbol} ${this.displayClothes()}`
  }

  displayClothes() {
    if( this.clothes.type === '👕')
    return 'shirt'
  } else if ( this.clothes.type === '👞'){
    return 'shoes'
  } else if ( this.clothes.type === '👖'){
    return 'pants'
    }
}

class PlayerBet {
  constructor(choices) {
    this.choices = choices.game
  }

  makeBet() {
    this.game.report( this.player, 'you have '+currency( this.account ) )
    let placeBet = this.player'> Do you want to place your bet?('+minBet(min)+'')
    while ( true ) {
      let bet = prompt.forNumber(placeBet)
      return bet
    }
  }
}
