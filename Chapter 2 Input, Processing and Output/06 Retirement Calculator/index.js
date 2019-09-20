const { createInterface } = require('readline');

const {
  yearsUntilRetirement,
  retirementYear,
} = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('What is your current age? ', (currentAge) => {
  readlineInterface.question('At what age would you like to retire? ', (returementAge) => {
    process.stdout.write(`${yearsUntilRetirement(Number.parseInt(currentAge, 10), Number.parseInt(returementAge, 10))}\n`);
    process.stdout.write(`${retirementYear(Number.parseInt(currentAge, 10), Number.parseInt(returementAge, 10))}\n`);
    readlineInterface.close();
  });
});
