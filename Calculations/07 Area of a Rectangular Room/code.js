const CONVERSION_FACTOR = 0.09290304;

const calculateAreaInSquareFeet = (length, width) => length * width;

// eslint-disable-next-line max-len
const convertSquareFeetToSquareMeters = (squareFeet) => Math.round(squareFeet * CONVERSION_FACTOR * 1000) / 1000;

const areaOfARectangularRoom = (length, width) => {
  const areaInSquareFeet = calculateAreaInSquareFeet(length, width);
  const areaInSquareMeters = convertSquareFeetToSquareMeters(areaInSquareFeet);
  // eslint-disable-next-line max-len
  return `You entered dimensions of ${length} feet by ${width} feet.\nThe area is\n${areaInSquareFeet} square feet\n${areaInSquareMeters} square meters\n`;
};

module.exports = {
  calculateAreaInSquareFeet,
  convertSquareFeetToSquareMeters,
  areaOfARectangularRoom,
};
