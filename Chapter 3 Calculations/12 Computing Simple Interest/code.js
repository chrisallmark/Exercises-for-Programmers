// eslint-disable-next-line max-len
const calculateInvestmentValue = (principal, interestRate, years) => principal * (1 + (interestRate / 100) * years);

const computeSimpleInterest = (principal, interestRate, years) => `After ${years} years at ${interestRate}%, the investment will\nbe worth $${calculateInvestmentValue(principal, interestRate, years)}\n`;

module.exports = {
  calculateInvestmentValue,
  computeSimpleInterest,
};
