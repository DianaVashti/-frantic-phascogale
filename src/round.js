const createDeck = require('./deck')
const diag = require('readline-sync')
const col = require('colors')
const hand = require('./hand')

let playerHand = []
let dealerHand = []
let playerBank = [20,["👕","👖","👞"]]
let dealerBank = [10000000000000,[]]
let globalDeck = createDeck()
let roundStart = true
let playerWin = "empty"

//Round Functions
const dealerLogic = (playerHand, dealerHand) => {
  while (handTotal(playerHand) > handTotal(dealerHand)) {
    addCard(dealerHand)
  }
}
const roundOutcome = () => {
  if (handTotal(playerHand) < handTotal(dealerHand) && handTotal(dealerHand) <= 21) {
    console.log("House wins ☹️ ")
    playerWin = false
  }
  else if ((handTotal(playerHand) > handTotal(dealerHand) && (handTotal(dealerHand) < 21 && handTotal(playerHand) < 21)) ||  handTotal(playerHand) <= 21 && handTotal(dealerHand) > 21) {
    console.log("You win!")
    playerWin = true
  } else if (handTotal(playerHand) == handTotal(dealerHand)) {
    console.log("Tie, re-deal")
  }
  roundStart = false
}

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
    for (let aceSearch of hand) {
      if (total > 21) {
        if (aceSearch.rank[0] == "A") {
          total -= 10
        }
      }
    }
    return total
}

const checkBJ = (handTotal) => {
  if (handTotal == 21) {
    console.log("Blackjack! You win :D")
    roundOutcome()
    playerWin = true
  }
}

const dealInit = () => {
  checkDeckLength()
  addCard(playerHand)
  addCard(playerHand)
  addCard(dealerHand)
  addCard(dealerHand)
}

//Round order of operations
const roundCycle = () => {
  playerHand = []
  dealerHand = []
  roundStart = true
  dealInit()
  let hitStay = ''

  console.log(hand.printHand(dealerHand))
  console.log(hand.printHand(playerHand, "p"))

  checkBJ(handTotal(playerHand))

while (roundStart == true) {
    hitStay = diag.question("Hit or Stay? (h/s)")
    console.log(hitStay)
    if (hitStay !== 'h' && hitStay !== 's') {
      console.log("Invalid input, try again")
      continue
    } else if (hitStay == 'h') {
      addCard(playerHand)
      console.log(hand.printHand(dealerHand))
      console.log(hand.printHand(playerHand, "p"))
      if (handTotal(playerHand) > 21) {
        console.log('Bust! Sorry, you lose')
        roundOutcome()
      }
    } else if (hitStay == 's') {
      console.log("\nDealer's turn\n")
      dealerLogic(playerHand, dealerHand)
      console.log(hand.printHand(dealerHand, "d"))
      roundOutcome()
    }

  }

  if (playerWin == true) {
    console.log("Give pot to player")
  } else if (playerWin == false){
    console.log("House takes pot")
  }

let end = diag.question("End game? y to end")
if (end == 'y') {
  console.log("game over")
} else {
  roundCycle()
}

}

//Tests
const theDeckLength = () => {
  return globalDeck.length
}


//the following is pseudo code to REMOVE ME LATER!!!
// round:
//
// ai goes second,
// utilizes ai Logic to execute round
//
//
// if player wins takes pot and stores new bank
// if ai wins wins takes pot and stores new bank
//
// loop back to begin round again unless either player or ai are out of money

module.exports = {
  theDeckLength,
  dealInit,
  playerHand,
  roundCycle,
}
