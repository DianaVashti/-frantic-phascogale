const diag = require('readline-sync')
const col = require('colors')
const round = require('./round')

//Gamestart text w/ rules
console.log(col.green("Welcome to strip blackjack 🤘 😜 🤘\n"))
console.log ("You have $100, a shirt(👕 ), pants(👖 ) and shoes(👞 )\nEach round you automatically bet $10. \nOnce you run out of money, you bet an article of clothing. \nNaked & broke = YOU LOSE!\n")

setTimeout(function(){
  let begin = diag.question(col.bgWhite.black(" Hit return to start game!"))
  console.log("")
  round.roundCycle()
}, 100)
