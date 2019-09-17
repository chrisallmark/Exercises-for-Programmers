const { expect } = require('chai');

const { countCharacters } = require('./code');

describe('Counting the Number of Characters', () => {
  it('Has the Input String in the Output String', () => {
    expect(countCharacters('Homer')).to.contain('Homer');
  });

  it('Outputs the Correct String', () => {
    expect(countCharacters('Homer')).to.eql('Homer has 5 characters.');
  });
});
