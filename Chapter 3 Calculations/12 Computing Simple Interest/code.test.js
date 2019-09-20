const { expect } = require('chai');

const {
  calculateInvestmentValue,
  computeSimpleInterest,
} = require('./code');

describe('Computing Simple Interest', () => {
  it('Calculates the Investment Value', () => {
    expect(calculateInvestmentValue(1500, 4.3, 4)).to.eql(1758);
  });

  it('Outputs the Correct String', () => {
    expect(computeSimpleInterest(1500, 4.3, 4)).to.eql('After 4 years at 4.3%, the investment will\nbe worth $1758\n');
  });
});
