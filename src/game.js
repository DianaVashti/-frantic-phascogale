// const createDeck = require('./deck')
//
// let deck = createDeck()
//
// const dealInit = () => {
//   let cards = []
//   let counter = 0
//   for (let i = 0; i < 4; i++) {
//
//     deck.shift()
//     counter++
//   }

const _ = require('lodash')
const Betting = require('./betting')
const currency = require('./currency')

module.exports = class Game {
  constructor() {
    this.minBet = 10;
    this.maxBet = 500;
    this.CBet = 10;
    this.minCBet = '👕'
    this.midCBet = '👞'
    this.maxCBet = '👖'
    this.players = []
    this.setup();
    this.start();
  }

  report( theme, message ){
    console.log(colors.green( theme+ '')+'> '+message);
  }

  prompt(ask){
    return prompt.forString(ask)
  }

  promptForNumber(ask){
    return prompt.forNumber(ask)
  }

  setup() {
    clear()
    if (!this.numberOfHumanPlayers){
      this.numberOfHumanPlayers = this.promptForNumber("How may Risk Takers?")
      this.report('okay', this.numberOfHumanPlayers+' victims')
      this.createHumanPlayers();
    }

    if (!this.numberOfAiPlayers){
      this.numberOfAiPlayers = this.promptForNumber("How many Android Risk Takers?")
      this.report('cool', this.numberOfAiPlayers+ 'Android Victims' )
      this.createAiPlayers()
    }

    this.dealer = new AiDealer ({
      name: 'shady dealer',
      game: this,
    })
    this.players.push(this.dealer)
    this.dealers.deck = new Deck(this.players.length)
    this.hands = []
  }

  createHumanPlayers() {
    for (let i=0; i < this.numberOfHumanPlayers; i++){
      let name = this.prompt("Give victim #"+(i+1)+"a name:")
      this.players.push(
        new HumanPlayer ({
          game: this,
          name: name
        })
      )
      this.shufflePlayers()
    }
  }

  createAiPlayers() {
    for (let i=0; i < this.numberOfAiPlayers; i++){
      this.players.push(
        new AiPlayer ({
          game: this,
          name: 'Ai victim'+(i+1),
        })
        this.shufflePlayers()
      )
    }
  }

  shufflePlayers()
  this.players = _.shuffle(this.players)
}

start(){
  let playAgain
  while(true){
    clear()

    this.round = new Round({
      game: this,
      index: this.roundIndex++,
    })

    prompt.forOption('Would you like to wager your shirt?', {
      '[y]es': ()=>{ this.minCBet = true},
      '[n]o': ()=>{ this.minCBet = false},
    })
    if (playAgain){ continue }else{ break }
  }

    prompt.forSecondOption('Would you like to wager your shoes?', {
      '[y]es': ()=>{ this.midCBet = true},
      '[n]o': ()=>{ this.midCBet = false},
    })
    if (playAgain){ continue }else{ break }
  }

    prompt.forFinalOption('Would you like to wager your pants?', {
      '[y]es': ()=>{ this.maxCBet = true},
      '[n]o': ()=>{ this.maxCBet = false},
    })
    if (playAgain){ continue }else{ console.log("you're such a loser, lol"); }
}

function clear(){
  process.stdout.write('\033c')
}
