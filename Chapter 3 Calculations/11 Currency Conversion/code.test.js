const { expect } = require('chai');

const {
  convertCurrency,
  currencyConversion,
} = require('./code');

describe('Currency Conversion', () => {
  it('Converts Currency', () => {
    expect(convertCurrency(81, 137.51)).to.eql(111.38);
  });

  it('Outputs the Correct String', () => {
    expect(currencyConversion(81, 137.51)).to.eql('81 euro at an exchange rate of 137.51 is\n111.38 U.S. dollars.\n');
  });
});
