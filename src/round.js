const createDeck = require('./deck')
const diag = require('readline-sync')
const col = require('colors')
const hand = require('./hand')

let playerHand = []
let dealerHand = []
let globalDeck = createDeck()

//Round Functions
const checkDeckLength = () => {
  if (globalDeck.length < 10) {
    globalDeck = createDeck()
  }
}
const addCard = (hand) => {
  hand.push(globalDeck.shift())
}

const handTotal = (hand) => {
    let total = 0
    for (let card of hand) {
      if (isNaN(card.rank)) {
        total += card.rank[1]
      } else {
        total += card.rank
      }
    }
    return total
}

const checkBJ = (handTotal) => {
  if (handTotal == 21) {
    console.log("Blackjack! You win :D")
  }
}

const dealInit = () => {
  checkDeckLength()
  addCard(playerHand)
  addCard(playerHand)
  addCard(dealerHand)
  addCard(dealerHand)
}

const roundOutcome = () => {
  if (handTotal(playerHand) > handTotal(dealerHand)) {
    return //true or false, or win or lose bank pending
  }
}

//Round order of operations
dealInit()

console.log(hand.printHand(dealerHand))
console.log(hand.printHand(playerHand, "p"))

checkBJ(handTotal(playerHand))
//if your win by BJ end round, send winnings to bank


//this happens last
roundOutcome()

//Tests
const theDeckLength = () => {
  return globalDeck.length
}

module.exports = {
  theDeckLength,
  dealInit,
  playerHand
}

//the following is pseudo code to REMOVE ME LATER!!!


// show hands in console (ai player hand one up one down)
//
// begin round
//
// round:
// player goes first,
// if natural blackjack, game ends, player wins
// if != natural blackjack, (hit || stay) loop until (stay || bust)
// if outcome == bust, player loses
// if outcome != bust log score
//
// ai goes second,
// utilizes ai Logic to execute round
//
// does math to calculate scores and determines winner of round
//
// if player wins takes pot and stores new bank
// if ai wins wins takes pot and stores new bank
//
// loop back to begin round again unless either player or ai are out of money
