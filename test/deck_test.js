const createDeck = require('../src/deck')
const expect = require('expect.js')


describe('createDeck', () => {
  it ('It should create an array with length 52', () => {
    expect(createDeck().length).to.eql(52)
  })
})
