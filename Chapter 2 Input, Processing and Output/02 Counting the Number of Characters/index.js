const { createInterface } = require('readline');

const { countCharacters } = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('What is the input string? ', (word) => {
  process.stdout.write(`${countCharacters(word)}\n`);
  readlineInterface.close();
});
