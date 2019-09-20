const { createInterface } = require('readline');

const { madLib } = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('Enter a noun: ', (noun) => {
  readlineInterface.question('Enter a verb: ', (verb) => {
    readlineInterface.question('Enter a adjective: ', (adjective) => {
      readlineInterface.question('Enter a adverb: ', (adverb) => {
        process.stdout.write(`${madLib(noun, verb, adjective, adverb)}\n`);
        readlineInterface.close();
      });
    });
  });
});
