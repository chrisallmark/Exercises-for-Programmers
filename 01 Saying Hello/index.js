const { createInterface } = require('readline');

const sayHello = name => `Hello, ${name}, nice to meet you!`;

if (require.main === module) {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readlineInterface.question('What is your name? ', (name) => {
    process.stdout.write(`${sayHello(name)}\n`);
    readlineInterface.close();
  });
} else {
  module.exports = {
    sayHello,
  };
}
