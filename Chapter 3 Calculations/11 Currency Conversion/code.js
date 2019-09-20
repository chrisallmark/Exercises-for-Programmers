const convertCurrency = (euro, exchangeRate) => Math.round(euro * exchangeRate) / 100;

const currencyConversion = (euro, exchangeRate) => `${euro} euro at an exchange rate of ${exchangeRate} is\n${convertCurrency(euro, exchangeRate)} U.S. dollars.\n`;

module.exports = {
  convertCurrency,
  currencyConversion,
};
