const pizzaPerPerson = (people, pizzas, slices) => Math.floor((pizzas * slices) / people);

const pizzaLeftover = (people, pizzas, slices) => (pizzas * slices) % people;

// eslint-disable-next-line max-len
const pizzaParty = (people, pizzas, slices) => `${people} people with ${pizzas} pizzas\nEach person gets ${pizzaPerPerson(people, pizzas, slices)} pieces of pizza.\nThere are ${pizzaLeftover(people, pizzas, slices)} leftover pieces.\n`;

module.exports = {
  pizzaPerPerson,
  pizzaLeftover,
  pizzaParty,
};
