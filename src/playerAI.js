const col = require('colors')
const round = require('./round')
const Card = require('./card')
const createDeck = require('./deck')
//
// This will be where I write the logic that dictates how the computer player behaves
//
// if player total = 4-11 always hit
(handTotal(aiHand) <= 11)  hit

// if player total = 12 and dealer up card = 4-6 stay, otherwise hit
(handTotal(aiHand) = 12 && (handTotal(dealerHand[1]) <=6) hit
(handTotal(aiHand) = 12 && (handTotal(dealerHand[1]) > 6) stay
//
// if player total = 13-16: dealer up card 2-6 stay, dealer up card 7-A hit
(13 <= (handTotal(aiHand) <= 16) && (handTotal(dealerHand[1]) > 6) hit
(13 <= (handTotal(aiHand) <= 16) && (handTotal(dealerHand[1]) <= 6) stay
//
// if player total 17+ always stay
(handTotal(aiHand) <= 17) stay


const aiRoundOutcome = () => {
  if (handTotal(aiHand) < handTotal(dealerHand) && handTotal(dealerHand) <= 21) {
    console.log("House wins ☹️ ")
    aiWin = false
  }
  else if ((handTotal(aiHand) > handTotal(dealerHand) && (handTotal(dealerHand) < 21 && handTotal(aiHand) < 21)) ||  handTotal(aiHand) <= 21 && handTotal(dealerHand) > 21) {
    console.log("You win!")
    aiWin = true
  } else if (handTotal(aiHand) == handTotal(dealerHand)) {
    console.log("Tie, re-deal")
  }
  roundStart = false
}





const playerAiLogic = (aiHand, dealerHand) => {
  if (
    (handTotal(aiHand) <= 11) || (handTotal(aiHand) = 12 && (handTotal(dealerHand[1]) <=6)) || (13 <= (handTotal(aiHand) <= 16) && (handTotal(dealerHand[1]) > 6))
  ) {
    addCard()
    aiRoundOutcome()
  } else if (
    ((handTotal(aiHand) = 12 && (handTotal(dealerHand[1]) > 6))) || ((13 <= (handTotal(aiHand) <= 16)) && (handTotal(dealerHand[1]) <= 6)) || (handTotal(aiHand) <= 17)
  ) {
    aiRoundOutcome()
    break
  }
}


module.exports = playerAiLogic
