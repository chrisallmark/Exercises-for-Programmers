const { createInterface } = require('readline');

const countCharacters = word => `${word} has ${word.length} characters.`;

if (require.main === module) {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readlineInterface.question('What is the input string? ', (word) => {
    process.stdout.write(`${countCharacters(word)}\n`);
    readlineInterface.close();
  });
} else {
  module.exports = {
    countCharacters,
  };
}
