const sum = (first, second) => `${first} + ${second} = ${first + second}`;
const difference = (first, second) => `${first} - ${second} = ${first - second}`;
const product = (first, second) => `${first} * ${second} = ${first * second}`;
const quotient = (first, second) => `${first} / ${second} = ${first / second}`;
const caclulator = (first, second) => `${sum(first, second)}\n${difference(first, second)}\n${product(first, second)}\n${quotient(first, second)}`;

module.exports = {
  sum,
  difference,
  product,
  quotient,
  caclulator,
};
