const { expect } = require('chai');

const {
  calculateAreaInSquareFeet,
  calculateGallonsNeeded,
  paintCalculator,
} = require('./code');

describe('Paint Calculator', () => {
  it('Calculates Area In Square Feet', () => {
    expect(calculateAreaInSquareFeet(18, 20)).to.eql(360);
  });

  it('Calculates Gallons Needed', () => {
    expect(calculateGallonsNeeded(360)).to.eql(2);
  });

  it('Outputs the Correct String', () => {
    expect(paintCalculator(18, 20)).to.eql('You will need to purchase 2 gallons of\npaint to cover 360 square feet.\n');
  });
});
