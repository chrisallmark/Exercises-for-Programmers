const calculateSubtotal = (basket) => {
  let subtotal = 0;
  basket.forEach((item) => {
    subtotal += item[0] * item[1];
  });
  return subtotal;
};

const calculateTax = (basket) => {
  const subtotal = calculateSubtotal(basket);
  return subtotal * 0.055;
};

const calculateTotal = (basket) => {
  const subtotal = calculateSubtotal(basket);
  const tax = calculateTax(basket);
  return subtotal + tax;
};

const selfCheckout = (basket) => {
  const subtotal = calculateSubtotal(basket);
  const tax = calculateTax(basket);
  const total = calculateTotal(basket);
  return `Subtotal: $${subtotal.toFixed(2)}\nTax: $${tax.toFixed(2)}\nTotal: $${total.toFixed(2)}\n`;
};

module.exports = {
  calculateSubtotal,
  calculateTax,
  calculateTotal,
  selfCheckout,
};
