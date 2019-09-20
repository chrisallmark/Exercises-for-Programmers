const { createInterface } = require('readline');

const { printQuote } = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('What is the quote? ', (quote) => {
  readlineInterface.question('Who said it? ', (originator) => {
    process.stdout.write(`${printQuote(quote, originator)}\n`);
    readlineInterface.close();
  });
});
