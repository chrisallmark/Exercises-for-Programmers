const { createInterface } = require('readline');

const {
  areaOfARectangularRoom,
} = require('./code');

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('What is the length of the room in feet? ', (length) => {
  readlineInterface.question('What is the widht of the room in feet? ', (width) => {
    process.stdout.write(areaOfARectangularRoom(length, width));
    readlineInterface.close();
  });
});
