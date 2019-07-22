const { expect } = require('chai');

const { printQuote } = require('./index');

describe('Printing Quotes', () => {
  it('Outputs the Correct String', () => {
    expect(printQuote('These aren\'t the droids you\'re looking for.', 'Obi-Wan Kenobi')).to.eql('Obi-Wan Kenobi says, "These aren\'t the droids you\'re looking for."');
  });
});
