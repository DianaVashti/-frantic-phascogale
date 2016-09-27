import currency from './currency'
import game from './game'

const CASH = [
  { type: '💵', value: 100}
]

const CLOTHES = [
  { type: '👕', value: 'shirt'}
  { type: '👞', value: 'shoes'}
  { type: '👖', value: 'pants'}
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
    console.log( new Account() );
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

  shirtBet() {
    if( player.cash === 0 ) {
      this.game.report( this.player, 'you have no money!!!')
      let placeShirtBet = this.player'> Do you want to wager your shirt?'(+minClothesBet+clothesValueBet+'')
      while (true) {
        let shirtsBet = prompt.forNumber(placeShirtBet)
        return shirtsBet
      }
    }
  }

  shoesBet() {
    if( player.clothes === 1 ) {
      this.game.report( this.player, 'you have no shirt!!!')
      let placeShoesBet = this.player'> Do you want to wager your shoes'(+midClothesBet+clothesValueBet+'')
      while (true) {
        let shoeBet = prompt.forNumber(placeShoesBet)
        return shoeBet
      }
    }
  }

  pantsBet() {
    if( player.clothes === 2 ) {
      this.game.report( this.player, 'you have no shoes!!!')
      let placePantsBet = this.player'> Do you want to wager your pants'(+maxClothesBet+clothesValueBet+'')
      while (true) {
        let PantBet = prompt.forNumber(placePantsBet)
        return pantBet
      } else {
        console.log("You have no clothes! Good luck getting home!")
      }
    }
  }
}
