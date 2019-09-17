const { createInterface } = require('readline');

const { sayHello } = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('What is your name? ', (name) => {
  process.stdout.write(`${sayHello(name)}\n`);
  readlineInterface.close();
});
