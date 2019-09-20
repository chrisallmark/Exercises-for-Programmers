const { createInterface } = require('readline');

const {
  computeSimpleInterest,
} = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('Enter the principal:  ', (principal) => {
  readlineInterface.question('Enter the rate of interest: ', (interestRate) => {
    readlineInterface.question('Enter the number of years: ', (years) => {
      process.stdout.write(computeSimpleInterest(principal, interestRate, years));
      readlineInterface.close();
    });
  });
});
