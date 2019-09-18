const { expect } = require('chai');

const {
  pizzaPerPerson,
  pizzaLeftover,
  pizzaParty,
} = require('./code');

describe('Pizza Party', () => {
  it('Calculates Pizza Per Person', () => {
    expect(pizzaPerPerson(8, 2, 5)).to.eql(1);
  });

  it('Calculates Pizza Leftover', () => {
    expect(pizzaLeftover(8, 2, 5)).to.eql(2);
  });

  it('Outputs the Correct String', () => {
    expect(pizzaParty(8, 2, 8)).to.eql('8 people with 2 pizzas\nEach person gets 2 pieces of pizza.\nThere are 0 leftover pieces.\n');
  });
});
