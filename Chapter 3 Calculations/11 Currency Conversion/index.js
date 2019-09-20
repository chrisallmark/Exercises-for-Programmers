const { createInterface } = require('readline');

const {
  currencyConversion,
} = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('How many euro are you exchanging? ', (euro) => {
  readlineInterface.question('What is the exchange rate? ', (exchangeRate) => {
    process.stdout.write(currencyConversion(euro, exchangeRate));
    readlineInterface.close();
  });
});
