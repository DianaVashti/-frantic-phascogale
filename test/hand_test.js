const addCard = require('../src/hand')
const expect = require('expect.js')


describe('addCard', () => {
  it ('It should return length 208', () => {
    expect(addCard.addCard()).to.eql(208)
  })
})
