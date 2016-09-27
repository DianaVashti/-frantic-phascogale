import currency from './currency'

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
