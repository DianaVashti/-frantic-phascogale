const createDeck = require('../src/deck')
const expect = require('expect.js')


describe('createDeck', () => {
  it ('It should create an array with length 208', () => {
    expect(createDeck().length).to.eql(208)
  })
})
