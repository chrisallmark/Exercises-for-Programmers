const { createInterface } = require('readline');

const {
  paintCalculator,
} = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('What is the length of the ceiling in feet? ', (length) => {
  readlineInterface.question('What is the width of the ceiling in feet? ', (width) => {
    process.stdout.write(paintCalculator(length, width));
    readlineInterface.close();
  });
});
