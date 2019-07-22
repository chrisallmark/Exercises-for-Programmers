const { expect } = require('chai');

const { madLib } = require('./index');

describe('Mad Lib', () => {
  it('Outputs the Correct String', () => {
    expect(madLib('dog', 'walk', 'blue', 'quickly')).to.eql('Do you walk your blue dog quickly? That\'s hilarious!');
  });
});
