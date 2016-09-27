const createDeck = require('./deck')

let deck = createDeck()

const dealInit = () => {
  let cards = []
  let counter = 0
  for (let i = 0; i < 4; i++) {
    
    deck.shift()
    counter++
  }
}
