const { expect } = require('chai');

const { sayHello } = require('./index');

describe('Saying Hello', () => {
  it('Ouputs the Correct String', () => {
    expect(sayHello('Brian')).to.eql('Hello, Brian, nice to meet you!');
  });
});
