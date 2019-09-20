const { expect } = require('chai');

const {
  yearsLeft,
  yearsUntilRetirement,
  yearOfRetirement,
} = require('./code');

describe('Retirement Calculator', () => {
  it('Calculate the Years Left', () => {
    expect(yearsLeft(25, 65)).to.eql(40);
  });

  it('Outputs the Years Until Retirement', () => {
    expect(yearsUntilRetirement(25, 65)).to.eql('You have 40 years left until you can retire.');
  });

  it('Outputs the Retirement Year', () => {
    const retirementDate = new Date('2015-07-23');
    expect(yearOfRetirement(25, 65, retirementDate.getFullYear())).to.eql('It\'s 2015, so you can retire in 2055.');
  });
});
