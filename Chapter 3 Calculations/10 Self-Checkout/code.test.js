const { expect } = require('chai');

const {
  calculateSubtotal,
  calculateTax,
  calculateTotal,
  selfCheckout,
} = require('./code');

const BASKET = [[25, 2], [10, 1], [4, 1]];

describe('Self-Checkout', () => {
  it('Calculates Subtotal', () => {
    expect(calculateSubtotal(BASKET)).to.eql(64);
  });

  it('Calculates Tax', () => {
    expect(calculateTax(BASKET)).to.eql(3.52);
  });

  it('Calculates Total', () => {
    expect(calculateTotal(BASKET)).to.eql(67.52);
  });

  it('Outputs the Correct String', () => {
    expect(selfCheckout(BASKET)).to.eql('Subtotal: $64.00\nTax: $3.52\nTotal: $67.52\n');
  });
});
