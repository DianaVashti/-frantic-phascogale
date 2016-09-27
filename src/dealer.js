import Player from './player'

class Dealer extends Player {
  constructor( name='DEALER' ) {
    super( name, true )
  }

  toString() {
    return `${this.name} ${this.hand.toString()}`
  }
}

export default Dealer
