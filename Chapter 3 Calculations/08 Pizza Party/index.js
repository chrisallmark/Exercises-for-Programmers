const { createInterface } = require('readline');

const {
  pizzaParty,
} = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('How many people? ', (people) => {
  readlineInterface.question('How many pizzas do you have? ', (pizzas) => {
    readlineInterface.question('How many slices per pizza? ', (slices) => {
      process.stdout.write(pizzaParty(people, pizzas, slices));
      readlineInterface.close();
    });
  });
});
