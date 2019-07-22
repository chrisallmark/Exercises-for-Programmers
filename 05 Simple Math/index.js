const { createInterface } = require('readline').createInterface;

const sum = (first, second) => `${first} + ${second} = ${first + second}`;
const difference = (first, second) => `${first} - ${second} = ${first - second}`;
const product = (first, second) => `${first} * ${second} = ${first * second}`;
const quotient = (first, second) => `${first} / ${second} = ${first / second}`;
const math = (first, second) => `${sum(first, second)}\n${difference(first, second)}\n${product(first, second)}\n${quotient(first, second)}`;

if (require.main === module) {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readlineInterface.question('What is the first number? ', (first) => {
    readlineInterface.question('What is the second number? ', (second) => {
      process.stdout.write(`${math(Number.parseInt(first, 10), Number.parseInt(second, 10))}\n`);
      readlineInterface.close();
    });
  });
} else {
  module.exports = {
    sum,
    difference,
    product,
    quotient,
    math,
  };
}
