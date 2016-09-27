const round = require('../src/round')
const expect = require('expect.js')


describe('round', () => {
  it ('It should return length 204', () => {
    expect(round.theDeckLength()).to.eql(204)
  })
})

describe('round', () => {
  it ('It should return length 2', () => {
    expect(round.playerHand.length).to.eql(2)
  })
})
