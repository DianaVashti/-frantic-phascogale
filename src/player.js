import Hand from './hand'

const CLOTHES = [
  { type: '👕', value: 'shirt' },
  { type: '👞', value: 'shoes' },
  { type: '👖', value: 'pants' }
]

class Player {
  constructor( name, isDealer=false ) {
    this.name = name
    this.hand = new Hand( isDealer )
    this.cash = 100
    this.clothes = [ ...CLOTHES ]
  }

  giveCard( card ) {
    this.hand.addCard( card )
  }

  bet( amount ) {
    this.cash -= amount

    return amount
  }

  hasCash() {
    return this.cash > 0
  }

  betClothes() {
    return this.clothes.pop()
  }

  hasClothes() {
    return this.clothes.length > 0
  }

  toString() {
    return `${this.name} $${this.cash} ${this.hand.toString()}`
  }
}

export default Player
