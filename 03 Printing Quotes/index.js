const { createInterface } = require('readline').createInterface;

// eslint-disable-next-line prefer-template
const printQuote = (quote, originator) => originator + ' says, "' + quote + '"';

if (require.main === module) {
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
} else {
  module.exports = {
    printQuote,
  };
}
