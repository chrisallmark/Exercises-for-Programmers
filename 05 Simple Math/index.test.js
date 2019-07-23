const { expect } = require('chai');

const {
  sum, difference, product, quotient, caclulator,
} = require('./index');

describe('Simple Math', () => {
  it('Outputs the Sum', () => {
    expect(sum(10, 5)).to.eql('10 + 5 = 15');
  });

  it('Outputs the Difference', () => {
    expect(difference(10, 5)).to.eql('10 - 5 = 5');
  });

  it('Outputs the Product', () => {
    expect(product(10, 5)).to.eql('10 * 5 = 50');
  });

  it('Outputs the Quotient', () => {
    expect(quotient(10, 5)).to.eql('10 / 5 = 2');
  });

  it('Outputs the Correct String', () => {
    expect(caclulator(10, 5)).to.eql('10 + 5 = 15\n10 - 5 = 5\n10 * 5 = 50\n10 / 5 = 2');
  });
});
