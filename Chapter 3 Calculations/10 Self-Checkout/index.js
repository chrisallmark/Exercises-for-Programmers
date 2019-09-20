const { createInterface } = require('readline');

const {
  selfCheckout,
} = require('./code');

const ask = async (question) => {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      readlineInterface.close();
      resolve(answer);
    });
  });
};

(async () => {
  const basket = [];
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < 3; i += 1) {
    const price = await ask(`Enter the price of item ${i + 1}: `);
    const quantity = await ask(`Enter the quantity of item ${i + 1}: `);
    basket.push([price, quantity]);
  }
  /* eslint-enable no-await-in-loop */
  process.stdout.write(selfCheckout(basket));
})();
