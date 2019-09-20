const COVERAGE_FACTOR = 350;

const calculateAreaInSquareFeet = (length, width) => length * width;

const calculateGallonsNeeded = (squareFeet) => Math.ceil(squareFeet / COVERAGE_FACTOR);

const paintCalculator = (length, width) => {
  const areaInSquareFeet = calculateAreaInSquareFeet(length, width);
  const gallonsNeeded = calculateGallonsNeeded(areaInSquareFeet);
  return `You will need to purchase ${gallonsNeeded} gallons of\npaint to cover ${areaInSquareFeet} square feet.\n`;
};

module.exports = {
  calculateAreaInSquareFeet,
  calculateGallonsNeeded,
  paintCalculator,
};
