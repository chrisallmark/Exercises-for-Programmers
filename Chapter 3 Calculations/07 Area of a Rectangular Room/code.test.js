const { expect } = require('chai');

const {
  calculateAreaInSquareFeet,
  convertSquareFeetToSquareMeters,
  areaOfARectangularRoom,
} = require('./code');

describe('Area of a Rectangular Room', () => {
  it('Calculates Area In Square Feet', () => {
    expect(calculateAreaInSquareFeet(15, 20)).to.eql(300);
  });

  it('Converts Square Feet to Square Meters', () => {
    expect(convertSquareFeetToSquareMeters(300)).to.eql(27.871);
  });

  it('Outputs the Correct String', () => {
    expect(areaOfARectangularRoom(15, 20)).to.eql('You entered dimensions of 15 feet by 20 feet.\nThe area is\n300 square feet\n27.871 square meters\n');
  });
});
