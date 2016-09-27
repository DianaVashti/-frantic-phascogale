import _ from 'lodash'
import Betting, { CASH, CLOTHES } from './betting'
import currency from './currency'

class Player {
  constructor() {
    this.player = player
    this.player.forEach( account => console.log( account.toString() ))
  }

  cashReducer( type, cash ) {
    return type.concat(...CLOTHES.map( bank => new Account( cash, clothes ) ))
  }

  buildPlayer() {
    return CASH.reduce( this.cashReducer , [] )
  }
  console.log(Player)
}
