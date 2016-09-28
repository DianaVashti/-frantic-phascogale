const round = require('./round')

const dealerLogic = (playerHand, dealerHand) => {
  while (round.handTotal(playerHand) > round.handTotal(dealerHand)) {
    round.addCard(dealerHand)
  }
}

module.exports = dealerLogic
