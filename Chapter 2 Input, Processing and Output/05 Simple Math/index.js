const { createInterface } = require('readline');

const {
  caclulator,
} = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('What is the first number? ', (first) => {
  readlineInterface.question('What is the second number? ', (second) => {
    process.stdout.write(`${caclulator(Number.parseInt(first, 10), Number.parseInt(second, 10))}\n`);
    readlineInterface.close();
  });
});
