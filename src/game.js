const diag = require('readline-sync')
const col = require('colors')
const round = require('./round')

//Gamestart text w/ rules
console.log(col.green("Welcome to strip blackjack 🤘 😜 🤘\n"))
console.log ("You start with $20, a shirt(👕 ), pants(👖 ) and shoes(👞 )\nwhile ($ == true) {\'You cannot bet clothes\'} \nif ($ == false) {\'Bet your clothes\'} \nNaked & broke = YOU LOSE!\n")

setTimeout(function(){
  diag.question(col.bgWhite.black(" Hit return to start game!"))
  console.log(" ")
  playGame()
}, 100)

const playGame = () => {
  while( round.roundCycle() ) {
    console.log(" ")
    console.log(col.bgWhite.black(" Next round:"))
    console.log(" ")
  }
    console.log( col.red('Game over\n') )
}
