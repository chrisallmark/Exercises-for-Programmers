const yearsLeft = (currentAge, retirementAge) => retirementAge - currentAge;
const yearsUntilRetirement = (currentAge, retirementAge) => `You have ${yearsLeft(currentAge, retirementAge)} years left until you can retire.`;
const yearOfRetirement = (currentAge, retirementAge, year = (new Date()).getFullYear()) => `It's ${year}, so you can retire in ${year + yearsLeft(currentAge, retirementAge)}.`;

module.exports = {
  yearsLeft,
  yearsUntilRetirement,
  yearOfRetirement,
};
